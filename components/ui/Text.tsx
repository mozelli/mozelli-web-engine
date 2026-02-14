import { cn } from "@/lib/utils";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const Text = ({ children, className }: TextProps) => {
  return (
    <p className={cn("text-gray-600 leading-relaxed", className)}>{children}</p>
  );
};
