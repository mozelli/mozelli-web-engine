"use client";

import Link from "next/link";

import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { siteConfig } from "@/config/site";

interface NavbarProps {
  ctaLabel: string;
}

export const Navbar = ({ ctaLabel }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <Container className="flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-lg">
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#servicos">Serviços</Link>
          <Link href="#depoimentos">Depoimentos</Link>
          <Link href="#contato">Contato</Link>
        </nav>

        <Button size="sm">{ctaLabel}</Button>
      </Container>
    </header>
  );
};
