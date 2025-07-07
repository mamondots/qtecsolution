import React from "react";
import { BsCart3 } from "react-icons/bs";

const ProductCard = ({ product }) => {
  const { title, price, mrpPrice, image, label } = product;
  return (
    <div className="group">
      <div className="border rounded cursor-pointer  group-hover:border-[#059CFA]/20 duration-300">
        <div className="lg:h-[280px] relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full rounded-t group-hover:scale-105 duration-300"
          />
        </div>

        <div className="px-3 py-3">
          <h1 className="text-base font-semibold text-[#262626]/80 group-hover:text-[#059CFA] duration-300 line-clamp-1">
            {title}
          </h1>
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold">৳ {price}</p>
            {mrpPrice && (
              <p className="text-[red] line-through text-sm mt-1">
                ৳ {mrpPrice}
              </p>
            )}
          </div>

          <button className=" flex items-center justify-center gap-1 text-white w-full py-2 rounded bg-[#059CFA] hover:bg-[#01D7F8] duration-300 mt-2">
            <span className="hover:animate-shake">
              <BsCart3 />
            </span>
            <span> Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
