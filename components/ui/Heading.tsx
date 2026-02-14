import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

export const Heading = ({
  children,
  as: Tag = "h2",
  className,
}: HeadingProps) => {
  const sizes = {
    h1: "text-4xl md:text-5xl font-bold",
    h2: "text-3xl md:text-4xl font-bold",
    h3: "text-2xl md:text-3xl font-semibold",
    h4: "text-xl font-semibold",
  };

  return <Tag className={cn(sizes[Tag], className)}>{children}</Tag>;
};
