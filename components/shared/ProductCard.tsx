"use client";

import Image from "next/image";
import Link from "next/link";
import { Title } from ".";
import { Button } from "../ui";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type Props = {};

export const ProductCard = ({}: Props) => {
  const [isAdd, setIsAdd] = useState(false);
  const [productCount, setProductCount] = useState(0);

  const isProduct = () => {
    setIsAdd(true);
    increase();
  };

  const decrease = () => {
    if (productCount === 1) {
      setProductCount(0);
      setIsAdd(false);
      return;
    }
    setProductCount((e) => e - 1);
  };

  const increase = () => {
    setProductCount((e) => e + 1);
  };

  return (
    <div className="h-[430px] w-[285px]">
      <Link href={"/product/1"}>
        <div className="flex h-[260px] justify-center items-center bg-[#FFF7EE] rounded-[15px]">
          <Image
            src={"https://placeholder.apptor.studio/200/200/product1.png"}
            alt="logo"
            width={210}
            height={210}
          />
        </div>
      </Link>
      <div className="mb-3">
        <Title text="Название пиццы" size="sm" className="font-bold mt-4 mb-2" />
        <p className="text-[#B1B1B1] text-[14px]">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
        </p>
      </div>

      <div className="flex justify-between items-center">
        <span>
          от <b className="text-[18px]">365 ₽</b>
        </span>
        <div className="h-10">
          {isAdd ? (
            <div>
              <Button variant={"outline"} className="h-9 w-9" onClick={decrease}>
                <Minus />
              </Button>
              <span className="text-[20px] font-bold mx-3">{productCount}</span>
              <Button variant={"outline"} className="h-9 w-9" onClick={increase}>
                <Plus />
              </Button>
            </div>
          ) : (
            <Button
              variant={"secondary"}
              className="bg-[#FFFAF4] text-[#FE5F00] font-semibold text-[14px] w-[110px] h-[40px] p-0 gap-1"
              onClick={isProduct}
            >
              <Plus /> Добавить
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
