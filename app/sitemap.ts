import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://precisionbathtile.com";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    {
      url: `${base}/services`,
      lastModified: new Date(),
    },
    {
      url: `${base}/builders`,
      lastModified: new Date(),
    },
    {
      url: `${base}/request`,
      lastModified: new Date(),
    },
    {
      url: `${base}/journal`,
      lastModified: new Date(),
    },
  ];
}