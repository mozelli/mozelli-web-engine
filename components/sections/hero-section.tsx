import { Section } from "../ui/section";
import { Container } from "../ui/container";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Button } from "../ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export const HeroSection = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
}: HeroSectionProps) => {
  return (
    <Section>
      <Container className="text-center">
        <Heading as="h1" className="mb-6">
          {title}
        </Heading>
        <Text className="mb-8 text-lg max-w-2xl mx-auto">{subtitle}</Text>
        <Button size="lg" onClick={onCtaClick}>
          {ctaText}
        </Button>
      </Container>
    </Section>
  );
};
