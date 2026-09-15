"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const CurrencyContext = createContext({ currency: "USD", setCurrency: () => {} });

/* Wraps the whole app (see app/layout.tsx). `initialCurrency` comes from the
   server (proxy.ts geolocation, read via getServerCurrency()) so the toggle
   renders correctly on first paint with no flash. Switching currency writes
   the same cookie the proxy reads, then refreshes the router so every
   server-rendered price on the page updates to match. */
export function CurrencyProvider({ initialCurrency, children }) {
  const [currency, setCurrencyState] = useState(
    initialCurrency === "NGN" ? "NGN" : "USD"
  );
  const router = useRouter();

  const setCurrency = useCallback(
    (next) => {
      const value = next === "NGN" ? "NGN" : "USD";
      setCurrencyState(value);
      if (typeof document !== "undefined") {
        document.cookie = `currency=${value}; path=/; max-age=${60 * 60 * 24 * 180}; samesite=lax`;
      }
      router.refresh();
    },
    [router]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
