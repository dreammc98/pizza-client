import { cn } from "@/lib/utils";
import { Categories, SortPopup } from ".";

type Props = {
  className?: string;
};

export const TopBar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "sticky top-2 mb-8  inline-flex items-end justify-between w-full z-50",
        className
      )}
    >
      <Categories />
      <SortPopup />
    </div>
  );
};
