import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Checkout from "@/shared/Checkout";
const CartPage = () => {
  return (
    <div className="container w-full mx-auto  md:px-20 xl:px-60 2xl:px-60 lg:mt-0 mt-22">
      <div className="hidden lg:block">
        <h2 className="font-bold md:text-3xl text-xl text-center py-8">
          Your Cart
        </h2>

        {/* Header row */}
        <div className="grid grid-cols-7 font-bold border-t border-black/20 py-5">
          <div className="col-span-2">Product</div>
          <div>Unit Price</div>
          <div>Size</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div>Action</div>
        </div>
        {/* make a div */}

        {/* Product rows */}

        <div className="grid grid-cols-7 items-center border-t border-black/20 py-3">
          {/* Product */}
          <div className="col-span-2 flex flex-col xl:flex-row items-start xl:items-center gap-3">
            <img src="" alt="" />
            <p className="md:text-base text-sm line-clamp-3">prduct</p>
          </div>

          {/* Unit Price */}
          <div className="flex gap-2">
            <p>৳ 500</p>
          </div>

          {/* Size */}
          <div>
            <p>
              <span className="uppercase">xl</span>
            </p>
          </div>

          {/* Quantity */}
          <div>12</div>

          {/* Subtotal */}
          <div>
            <p>৳ 1200</p>
          </div>

          {/* Action buttons */}
          <button className="text-white cursor-pointer ">
            <RiDeleteBin6Line className="bg-[#C9302C]  h-7 w-7 p-1" />
          </button>
        </div>
      </div>

      <div className="lg:hidden block">
        <h2 className="font-bold md:text-3xl text-xl text-center mt- py-8">
          Your Cart
        </h2>

        {/* Product rows */}

        <div className="flex flex-col mb-5 bg-[#fcf9f9] hover:bg-[#E6E6E6] transition-colors duration-200 rounded">
          {/* Product */}
          <div className="bg-[#F6F6F6] flex justify-between border-t border-black/5 py-3 px-3 rounded-t">
            <div className="font-bold text-[15px]">
              <p className="text-[#2287e0] hover:underline hover:text-[#014C8C] px-1">
                products
              </p>
            </div>

            <div>
              <img src="" alt="" />
            </div>
          </div>

          <div className="hover:bg-[#E6E6E6] rounded-b">
            {/* Price */}
            <div className="flex justify-between border-t border-black/5 py-3 px-3">
              <p className="font-bold text-[15px]">Price</p>
              <div className="flex gap-2">
                <p>৳ 5000</p>
              </div>
            </div>

            <div className="flex justify-between border-t border-black/5 py-3 px-3">
              <p className="font-bold text-[15px]">Size</p>
              xl
            </div>

            <div className="flex justify-between border-t border-black/5 py-3 px-3">
              <p className="font-bold text-[15px]">Quantity</p>
              12
            </div>

            <div className="flex justify-between border-t border-black/5 py-3 px-3">
              <p className="font-bold text-[15px]">Subtotal</p>
              <div className="flex gap-2">
                <p>৳ 6520</p>
              </div>
            </div>

            {/* Action */}
            <button className="text-white cursor-pointer ">
              <RiDeleteBin6Line className="bg-[#C9302C]  h-7 w-7 p-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 justify-between items-center my-12">
        <div className="text-2xl">
          Total Amount (৳):
          <span className="text-3xl font-bold text-[#059CFA]"> 500</span>
        </div>
        <div className="text-white text-sm font-semibold items-center text-center w-[70%] sm:w-[50%] md:w-[40%]  bg-[#059CFA] rounded  hover:bg-[#02D7F8] duration-300 px-2 py-2">
          <span>
            <Checkout />
          </span>
        </div>
        <Link
          tp="/"
          className="text-white text-sm font-semibold rounded items-center text-center  w-[70%] sm:w-[50%] md:w-[40%]  bg-[#059CFA] hover:bg-[#02D7F8] px-2 py-2 mt-3 duration-300"
        >
          <span>Conting Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
