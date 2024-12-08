import { Container } from "./Container";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Button, Input } from "../ui";
import { Search, User, ShoppingCart, ArrowRight } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b-[1px] border-[#EDEDED]">
      <Container className="flex items-center justify-between py-8 ">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="Logo" width={35} height={35} className="h-[35px]" />
          <div className="leading-3">
            <h1 className="text-2xl uppercase font-black ">Time to work</h1>
            <span className="text-sm text-gray-400 leading-3">Всё только начинается</span>
          </div>
        </div>

        <div>
          <Input>
            {/* \{" "}
            <span>
              <Search />
            </span> */}
          </Input>
        </div>

        <div className="text-[#FE5F00] gap-4 flex ">
          <Button variant={"outline"} className=" outline outline-1 font-semibold border-none">
            <User size={16} />
            Войти
          </Button>

          <div className="group relative">
            <Button>
              <span>520 ₽</span>
              <span className="h-full w-[1px] bg-white/30 mx-3"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} />
                <span>5</span>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
