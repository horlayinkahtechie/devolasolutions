import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/edu/admin"],
      },
    ],
    sitemap: "https://devolasolutions.com/sitemap.xml",
    host: "https://devolasolutions.com",
  };
}
