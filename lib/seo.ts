import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
}

export const generateSEO = ({ title, description }: SEOProps): Metadata => {
  return {
    title,
    description,
    openGraph: {
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: "website",
    },
  };
};
