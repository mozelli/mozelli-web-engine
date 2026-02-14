import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <>
      <Navbar ctaLabel="WhatsApp" />
      <main>{children}</main>
      <Footer />
    </>
  );
};
