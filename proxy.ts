import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/* Detects the visitor's country from edge geolocation headers (Vercel sets
   x-vercel-ip-country; Cloudflare sets cf-ipcountry) and picks a currency:
   Nigeria -> NGN, everything else (including undetectable) -> USD.

   The result is forwarded as an `x-currency` request header so Server
   Components rendering THIS request can read it immediately via headers()
   (a freshly-set response cookie isn't visible to the current request), and
   is also persisted as a response cookie so it sticks on future requests and
   can be overridden by the on-site currency toggle. */
export function proxy(request: NextRequest) {
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

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (!existing) {
    response.cookies.set("currency", currency, {
      path: "/",
      maxAge: 60 * 60 * 24 * 180, // 180 days
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
