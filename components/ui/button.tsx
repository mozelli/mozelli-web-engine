import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none";

  const variants = {
    primary: "bg-black text-white hover: bg-gray-800",
    secondary: "bg-gray-100 text-black hover:bg-gray-200",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6",
    lg: "h-12 px-8 text-lg",
  };

  return (
    <button
      className={cn(
        base,
        variants[variant || "primary"],
        sizes[size || "md"],
        className,
      )}
      {...props}
    />
  );
};
