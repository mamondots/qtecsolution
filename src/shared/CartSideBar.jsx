/* eslint-disable react/prop-types */
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

import Checkout from "./Checkout";
import { useDeleteSingleCartMutation } from "@/redux/features/cart/cartApi";
import { Link } from "react-router-dom";
const CartSideBar = ({ carts }) => {
  const [deleteSingleCart] = useDeleteSingleCartMutation();

  const handleDelete = async (_id) => {
    try {
      await deleteSingleCart(_id);
      console.log(`Deleted cart item with ID: ${_id}`);
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };
  const totalPrice = carts?.data?.reduce((acc, item) => {
    const quantity = item.quantity || 1;
    const price = item.productRef?.price || 0;
    return acc + quantity * price;
  }, 0);
  return (
    <Sheet>
      <SheetTrigger className="relative">
        <BsCart3 />
        <p className="text-[10px] bg-[#059CFA] w-[16px] h-[16px] text-white rounded-full absolute top-[-10px] right-[-10px]">
          {carts?.data?.length}
        </p>
      </SheetTrigger>
      <SheetContent>
        <div>
          <h1 className="text-xl font-semibold">Shopping Bag</h1>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {carts?.data?.map((cart) => (
            <div key={cart._id} className="flex lg:flex-row flex-col  gap-3">
              <div className="lg:w-1/4 w-full">
                <div className="lg:w-[80px] lg:h-[80px] h-[120px] relative">
                  <img
                    src={cart.productRef.image}
                    alt="image"
                    className="w-full h-full"
                  />
                  <p
                    onClick={() => handleDelete(cart._id)}
                    className="border border-red-300 text-red-500 hover:bg-red-500 cursor-pointer duration-300 hover:text-white text-sm absolute top-1 right-1 p-0.5 rounded"
                  >
                    <AiOutlineDelete />
                  </p>
                </div>
              </div>
              <div className="lg:w-2/3 w-full">
                <h1 className="text-[12px]">{cart.productRef.title}</h1>
                <p className="text-sm">
                  <span>Price : </span> ৳ {cart.productRef.price} *{" "}
                  {cart.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#059CFA]/20  py-2 px-2 text-sm font-semibold mt-4 w-full flex items-center justify-between">
          <p>SubTotal : </p>
          <p>
            TK : <span>{totalPrice}</span>
          </p>
        </div>

        <SheetFooter className="px-0 py-0 absolute bottom-0 w-full left-0 right-0">
          <SheetFooter className="px-0 py-0">
            <div className="flex items-center">
              <Link to="/cart" className="flex-1">
                <SheetClose asChild>
                  <div className=" bg-[#059CFA] hover:bg-[#262626] duration-300 text-white text-center capitalize py-2 cursor-pointer">
                    view cart <span> {carts?.data?.length}</span>
                  </div>
                </SheetClose>
              </Link>
              <div className="flex-1 bg-[#02D7F8] hover:bg-[#262626] duration-300 text-white text-center capitalize py-2 cursor-pointer">
                <Checkout />
              </div>
            </div>
          </SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSideBar;
