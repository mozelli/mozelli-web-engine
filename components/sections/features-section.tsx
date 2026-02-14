import { Section } from "../ui/section";
import { Container } from "../ui/container";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { Card } from "../ui/card";

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  items: Feature[];
}

export const FeaturesSection = ({ title, items }: FeaturesSectionProps) => {
  return (
    <Section>
      <Container>
        <Heading className="text-center mb-12">{title}</Heading>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <Card key={index}>
              <Heading as="h3" className="mb-4">
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
