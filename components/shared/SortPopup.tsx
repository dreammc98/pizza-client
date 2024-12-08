import { ArrowDownUp } from "lucide-react";

export const SortPopup = () => {
  return (
    <div className="inline-flex items-center bg-gray-100  rounded-2xl px-3 h-[40px]">
      <ArrowDownUp size={16} />
      <div>
        <b className="mx-1">Сортировка:</b>
        <button className="text-primary">
          <b>рейтингу</b>
        </button>
      </div>
    </div>
  );
};
