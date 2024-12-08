const foodOptions = ["Все", "Мясные", "Острые", "Сладкие", "Вегетарианские", "С курицей", "Ещё"];

const currentIndex = 0;

export const Categories = () => {
  return (
    <ul className="inline-flex bg-gray-200 gap-1 rounded-2xl p-[6px]">
      {foodOptions.map((item, i) => (
        <li
          key={i}
          className={`text-[16px] font-bold px-6 py-2 rounded-2xl  ${
            currentIndex === i && "bg-white shadow-sm shadow-gray-300 text-primary"
          }`}
        >
          <a className="cursor-pointer">{item} </a>
        </li>
      ))}
    </ul>
  );
};
