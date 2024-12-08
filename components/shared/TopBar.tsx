import { cn } from "@/lib/utils";
import { Categories, SortPopup } from ".";

type Props = {
  className?: string;
};

export const TopBar = ({ className }: Props) => {
  return (
    <div
      className={cn("sticky top-0 py-5 inline-flex items-end justify-between w-full", className)}
    >
      <Categories />
      <SortPopup />
    </div>
  );
};
