"use client";

import { useEffect } from "react";
import { storeUtmFromLocation } from "../_lib/analytics";

/* Mounted once in the root layout. Whichever page an ad click lands on,
   this captures the attribution data into sessionStorage so it's still
   available on /contact even after the visitor has clicked through one or
   more internal links (the referrer has no utm params of its own by then). */
export default function UtmCapture() {
  useEffect(() => {
    storeUtmFromLocation();
  }, []);

  return null;
}
