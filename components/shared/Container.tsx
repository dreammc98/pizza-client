import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ children, className }: Props) => {
  return <div className={cn("mx-auto max-w-[1280px] px-5", className)}>{children}</div>;
};
