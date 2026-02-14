import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title?: string;
  description?: string;
}

export const generateSEO = ({ title, description }: SEOProps) => {
  return {
    title,
    description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  };
};
