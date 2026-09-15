import { headers } from "next/headers";

/* Reads the currency proxy.ts resolved for this request (Nigeria -> NGN,
   everything else / undetectable -> USD). Await this in any Server
   Component that needs to render a price. */
export async function getServerCurrency() {
  const h = await headers();
  return h.get("x-currency") === "NGN" ? "NGN" : "USD";
}
