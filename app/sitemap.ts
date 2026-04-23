import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://precisionbathtile.com",
      lastModified: new Date(),
    },
    {
      url: "https://precisionbathtile.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://precisionbathtile.com/builders",
      lastModified: new Date(),
    },
    {
      url: "https://precisionbathtile.com/request",
      lastModified: new Date(),
    },
    {
      url: "https://precisionbathtile.com/journal",
      lastModified: new Date(),
    },
  ];
}