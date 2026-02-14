"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(5),
});

type FormData = z.infer<typeof schema>;

interface ComtactSectionProps {
  formName: string;
  buttonLabel: string;
}

export const ContactSection = ({
  formName,
  buttonLabel,
}: ComtactSectionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Section>
      <Container className="max-w-xl">
        <Heading className="mb-8 text-center">{formName}</Heading>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Seu nome" {...register("name")} />
          <Input placeholder="Seu e-mail" {...register("email")} />
          <Textarea placeholder="Sua mensagem" {...register("message")} />

          <Button type="submit" className="w-full">
            {buttonLabel}
          </Button>
        </form>
      </Container>
    </Section>
  );
};
