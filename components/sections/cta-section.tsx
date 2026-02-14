import { Section } from "../ui/section";
import { Container } from "../ui/container";
import { Heading } from "../ui/heading";
import { Button } from "../ui/button";

interface CTASectionProps {
  title: string;
  buttonText: string;
  onClick?: () => void;
}

const CTASection = ({ title, buttonText, onClick }: CTASectionProps) => {
  return (
    <Section className="bg-black text-white">
      <Container className="text-center">
        <Heading className="mb-6">{title}</Heading>
        <Button variant="secondary" size="lg" onClick={onClick}>
          {buttonText}
        </Button>
      </Container>
    </Section>
  );
};
