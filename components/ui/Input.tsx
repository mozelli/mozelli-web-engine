import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black",
        className,
      )}
      {...props}
    />
  );
};
