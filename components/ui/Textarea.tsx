import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black",
        className,
      )}
      {...props}
    />
  );
};
