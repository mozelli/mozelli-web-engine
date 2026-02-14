import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CTASection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Home",
  description: "Página inicial.",
});

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Sites que convertem 24h por dia"
        subtitle="Estruturamos presença digital estratégica para empresas que querem crescer."
        ctaText="Solicitar Orçamento"
      />

      <FeaturesSection
        title="Nossos Serviços"
        items={[
          {
            title: "Criação de Sites",
            description: "Sites modernos, rápidos e otimizados para SEO.",
          },
          {
            title: "Landing Pages",
            description: "Páginas focadas em conversão.",
          },
          {
            title: "Otimização SEO",
            description: "Posicionamento estratégico no Google.",
          },
        ]}
      />

      <TestimonialsSection
        title="O que nossos clientes dizem"
        items={[
          {
            name: "Carlos Silva",
            content: "Nosso faturamento aumentou após o novo site.",
          },
          {
            name: "Mariana Costa",
            content: "Processo rápido e extremamente profissional.",
          },
          {
            name: "Ricardo Almeida",
            content: "Excelente performance e suporte.",
          },
        ]}
      />

      <CTASection
        title="Pronto para transformar seu negócio?"
        buttonText="Fale conosco"
      />

      <ContactSection buttonLabel="Enviar agora!" formName="Contato" />
    </>
  );
}
