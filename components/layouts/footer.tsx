import { Container } from "../ui/container";
import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="border-t py-12 mt-20">
      <Container className="text-center text-sm text-gray-500">
        <p className="mb-4 font-semibold">{siteConfig.name}</p>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
          reservados.
        </p>
      </Container>
    </footer>
  );
};
