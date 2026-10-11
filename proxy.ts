import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/* Two unrelated jobs live in this one proxy (Next only allows one file):

   1. SUBDOMAIN ROUTING for the education platform. edu.devolasolutions.com
      (and edu.localhost:PORT in dev — browsers resolve *.localhost to
      127.0.0.1 automatically) is served by the exact same Next.js app, out
      of app/edu/*, via an invisible rewrite: a request to
      edu.devolasolutions.com/courses is rewritten internally to /edu/courses
      before Next resolves a route, so the edu app's own pages/API routes
      use clean paths (/courses, /login, /api/auth/...) with no /edu prefix
      anywhere in a Link, fetch call, or the browser's address bar. The
      marketing site on the apex domain is untouched.

   2. CURRENCY DETECTION — unchanged from before, see below.

   Detects the visitor's country from edge geolocation headers (Vercel sets
   x-vercel-ip-country; Cloudflare sets cf-ipcountry) and picks a currency:
   Nigeria -> NGN, everything else (including undetectable) -> USD.

   The result is forwarded as an `x-currency` request header so Server
   Components rendering THIS request can read it immediately via headers()
   (a freshly-set response cookie isn't visible to the current request), and
   is also persisted as a response cookie so it sticks on future requests and
   can be overridden by the on-site currency toggle. */
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const isEduHost = host.startsWith("edu.");
  const { pathname } = request.nextUrl;
  const needsEduRewrite = isEduHost && !pathname.startsWith("/edu");
  const effectivePathname = needsEduRewrite ? `/edu${pathname === "/" ? "" : pathname}` : pathname;
  const isApiRoute = effectivePathname.startsWith("/api") || effectivePathname.startsWith("/edu/api");

  const existing = request.cookies.get("currency")?.value;
  let currency = existing === "NGN" || existing === "USD" ? existing : null;

  if (!currency) {
    const country =
      request.headers.get("x-vercel-ip-country") ||
      request.headers.get("cf-ipcountry") ||
      "";
    currency = country.toUpperCase() === "NG" ? "NGN" : "USD";
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-currency", currency);

  let response;
  if (needsEduRewrite) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = effectivePathname;
    response = NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
  } else {
    response = NextResponse.next({ request: { headers: requestHeaders } });
  }

  if (!existing && !isApiRoute) {
    response.cookies.set("currency", currency, {
      path: "/",
      maxAge: 60 * 60 * 24 * 180, // 180 days
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  // Runs on everything except static assets — API routes are now included
  // (previously excluded) because the edu subdomain's own /api/* calls need
  // the rewrite too. isApiRoute above still skips the currency cookie for
  // API calls, matching the previous behaviour for app/api/contact.
  matcher: [
    "/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
