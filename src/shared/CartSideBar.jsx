import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BsCart3 } from "react-icons/bs";
import img from "../assets/products/dress1.webp";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
const CartSideBar = () => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <Sheet>
      <SheetTrigger>
        <BsCart3 />
      </SheetTrigger>
      <SheetContent>
        <div>
          <h1 className="text-xl font-semibold">Shopping Bag</h1>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <div className="flex lg:flex-row flex-col  gap-3">
            <div className="lg:w-1/4 w-full">
              <div className="lg:w-[80px] lg:h-[80px] h-[120px] relative">
                <img src={img} alt="image" className="w-full h-full" />
                <p className="border border-red-300 text-red-500 hover:bg-red-500 cursor-pointer duration-300 hover:text-white text-sm absolute top-1 right-1 p-0.5 rounded">
                  <AiOutlineDelete />
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 w-full">
              <h1 className="text-[12px]">
                Purple Pabna Cotton Monipuri Buti Saree
              </h1>
              <p className="text-sm">
                <span>Price : </span> ৳ 700
              </p>

              <div className="flex items-center mt-1 justify-between border border-[#262629]/40 hover:border-[#059CFA]/40 duration-300 rounded px-2  md:w-[30%] w-[30%]">
                <p
                  onClick={handleDecrement}
                  className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                >
                  <BiPlus size={16} />
                </p>
                <span>{count}</span>
                <p
                  onClick={handleIncrement}
                  className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                >
                  <BiMinus size={16} />
                </p>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col  gap-3">
            <div className="lg:w-1/4 w-full">
              <div className="lg:w-[80px] lg:h-[80px] h-[120px] relative">
                <img src={img} alt="image" className="w-full h-full" />
                <p className="border border-red-300 text-red-500 hover:bg-red-500 cursor-pointer duration-300 hover:text-white text-sm absolute top-1 right-1 p-0.5 rounded">
                  <AiOutlineDelete />
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 w-full">
              <h1 className="text-[12px]">
                Purple Pabna Cotton Monipuri Buti Saree
              </h1>
              <p className="text-sm">
                <span>Price : </span> ৳ 700
              </p>

              <div className="flex items-center mt-1 justify-between border border-[#262629]/40 hover:border-[#059CFA]/40 duration-300 rounded px-2  md:w-[30%] w-[30%]">
                <p
                  onClick={handleDecrement}
                  className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                >
                  <BiPlus size={16} />
                </p>
                <span>{count}</span>
                <p
                  onClick={handleIncrement}
                  className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                >
                  <BiMinus size={16} />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#059CFA]/20  py-2 px-2 text-sm font-semibold mt-4 w-full flex items-center justify-between">
          <p>SubTotal : </p>
          <p>
            TK : <span>15245</span>
          </p>
        </div>

        <SheetFooter className="px-0 py-0 absolute bottom-0 w-full left-0 right-0">
          <SheetFooter className="px-0 py-0">
            <div className="flex items-center">
              <div className="flex-1 bg-[#059CFA] hover:bg-[#262626] duration-300 text-white text-center capitalize py-2 cursor-pointer">
                view cart
              </div>
              <div className="flex-1 bg-[#02D7F8] hover:bg-[#262626] duration-300 text-white text-center capitalize py-2 cursor-pointer">
                checkout
              </div>
            </div>
          </SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSideBar;
