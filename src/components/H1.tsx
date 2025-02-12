import { cn } from "@/app/lib/utils";
type H1Props = {
  children: React.ReactNode;
  className?: string;
};
export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cn("font-bold text-3xl lg:text-6xl tracking-tight", className)}
    >
      {children}
    </h1>
  );
}
