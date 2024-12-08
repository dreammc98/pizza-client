import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from ".";
import { Input } from "../ui";

const ingredients = [
  { text: "Сырный соус", value: "1" },
  { text: "Моцарелла", value: "2" },
  { text: "Чеснок", value: "3" },
  { text: "Солёные огурчики", value: "4" },
  { text: "Красный лук", value: "5" },
  { text: "Томаты", value: "6" },
];

export const Filters = () => {
  return (
    <div className=" w-[250px]">
      <Title text="Фильтрация" size="sm" className="font-bold mb-6" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <span className="block w-full h-[1px] bg-[#F6F6F6] my-6"></span>

      <div>
        <Title text="Цена от и до:" size="xs" className="font-bold mb-4" />
        <div className="flex gap-4 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
            className="w-[90px]"
          />
          <Input type="number" placeholder="1000" min={100} max={1000} className="w-[90px]" />
        </div>

        <RangeSlider min={0} max={1000} step={1} />
      </div>

      <span className="block w-full h-[1px] bg-[#F6F6F6] mb-6 mt-12"></span>

      <div>
        <CheckboxFiltersGroup items={ingredients} title="Ингредиенты" />
      </div>
    </div>
  );
};
