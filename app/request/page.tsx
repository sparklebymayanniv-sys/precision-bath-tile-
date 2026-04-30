import RequestFormPage from "./RequestFormPage";

export const metadata = {
  title: "Request a Tile Project Quote | Precision Bath & Tile",
  description:
    "Submit your residential tile project details for a fast quote on bathrooms, showers, kitchen backsplashes, heated floors, stone work and more.",
  openGraph: {
    title: "Request a Tile Project Quote | Precision Bath & Tile",
    description:
      "Submit your residential tile project details for a fast quote on bathrooms, showers, kitchen backsplashes, heated floors, stone work and more.",
    url: "https://precisionbathtile.com/request",
    siteName: "Precision Bath & Tile",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Tile Project Quote | Precision Bath & Tile",
    description:
      "Submit your residential tile project details for a fast quote on bathrooms, showers, kitchen backsplashes, heated floors, stone work and more.",
  },
};

export default function RequestPage() {
  return <RequestFormPage />;
}