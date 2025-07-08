import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Checkout from "@/shared/Checkout";
import {
  useDeleteSingleCartMutation,
  useGetAllCartsQuery,
  useUpdateSingleCartMutation,
} from "@/redux/features/cart/cartApi";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CartPage = () => {
  const { data: carts } = useGetAllCartsQuery();
  const [deleteSingleCart] = useDeleteSingleCartMutation();
  const [updateSingleCart] = useUpdateSingleCartMutation();

  const [quantities, setQuantities] = useState({});

  // Initialize quantity state when cart data changes
  useEffect(() => {
    if (carts?.data) {
      const initialQuantities = {};
      carts.data.forEach((cart) => {
        initialQuantities[cart._id] = cart.quantity || 1;
      });
      setQuantities(initialQuantities);
    }
  }, [carts]);

  const handleDelete = async (_id) => {
    try {
      await deleteSingleCart(_id);
      toast.success("Product removed from cart");
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const handleIncrement = async (cartId) => {
    const updatedQty = (quantities[cartId] || 1) + 1;
    setQuantities({ ...quantities, [cartId]: updatedQty });
    await updateSingleCart({ id: cartId, params: { quantity: updatedQty } });
  };

  const handleDecrement = async (cartId) => {
    const currentQty = quantities[cartId] || 1;
    if (currentQty <= 1) return;
    const updatedQty = currentQty - 1;
    setQuantities({ ...quantities, [cartId]: updatedQty });
    await updateSingleCart({ id: cartId, params: { quantity: updatedQty } });
  };

  const totalPrice = carts?.data?.reduce((acc, item) => {
    const quantity = quantities[item._id] || 1;
    const price = item.productRef?.price || 0;
    return acc + quantity * price;
  }, 0);

  return (
    <div className="container w-full mx-auto xl:px-50 lg:px-40 md:px-20 lg:mt-0 mt-22">
      <div className="hidden lg:block">
        <h2 className="font-bold md:text-3xl text-xl text-center py-8">
          Your Cart
        </h2>

        <div className="grid grid-cols-6 font-bold border-t border-black/20 py-5">
          <div className="col-span-2">Product</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div>Action</div>
        </div>

        <div>
          {carts?.data?.map((cart) => (
            <div
              key={cart._id}
              className="grid grid-cols-6 items-center border-t border-black/20 py-3"
            >
              <div className="col-span-2 flex flex-col xl:flex-row items-start xl:items-center gap-3">
                <div className="w-[60px] h-[60px]">
                  <img
                    src={cart.productRef.image}
                    alt="image"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm line-clamp-3">{cart.productRef.title}</p>
              </div>

              <div className="flex gap-2">
                <p>৳ {cart.productRef.price}</p>
              </div>

              <div className="flex items-center justify-between border border-[#262629]/40 hover:border-[#059CFA]/40 duration-300 rounded px-2 py-1 md:w-[45%] w-[30%]">
                <p
                  onClick={() => handleDecrement(cart._id)}
                  className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                >
                  <BiMinus size={16} />
                </p>
                <span>{quantities[cart._id]}</span>
                <p
                  onClick={() => handleIncrement(cart._id)}
                  className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                >
                  <BiPlus size={16} />
                </p>
              </div>

              {/* Subtotal */}
              <div>
                <p>৳ {cart.productRef.price * (quantities[cart._id] || 1)}</p>
              </div>

              {/* Action */}
              <button
                onClick={() => handleDelete(cart._id)}
                className="text-white cursor-pointer"
              >
                <RiDeleteBin6Line className="bg-[#C9302C] h-7 w-7 p-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden block">
        <h2 className="font-bold md:text-3xl text-xl text-center mt- py-8">
          Your Cart
        </h2>

        {carts?.data?.map((cart) => (
          <div
            key={cart._id}
            className="flex flex-col mb-5 bg-[#fcf9f9] hover:bg-[#E6E6E6] transition-colors duration-200 rounded"
          >
            <div className="bg-[#F6F6F6] flex justify-between border-t border-black/5 py-3 px-3 rounded-t">
              <div className="">
                <p className="text-[#059CFA] font-bold text-[15px] hover:underline hover:text-[#014C8C] px-1">
                  {cart.productRef.title}
                </p>
              </div>

              <div className="w-[60px] h-[60px]">
                <img
                  src={cart.productRef.image}
                  alt="image"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="hover:bg-[#E6E6E6] rounded-b">
              <div className="flex justify-between border-t border-black/5 py-3 px-3">
                <p className="font-bold text-[15px]">Price</p>
                <div className="flex gap-2">
                  <p>৳ {cart.productRef.price}</p>
                </div>
              </div>

              <div className="flex justify-between border-t border-black/5 py-3 px-3">
                <p className="font-bold text-[15px]">Quantity</p>
                <div className="flex items-center justify-between border border-[#262629]/40 hover:border-[#059CFA]/40 duration-300 rounded px-2 py-1 md:w-[45%] w-[30%]">
                  <p
                    onClick={() => handleDecrement(cart._id)}
                    className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                  >
                    <BiMinus size={16} />
                  </p>
                  <span>{quantities[cart._id]}</span>
                  <p
                    onClick={() => handleIncrement(cart._id)}
                    className="cursor-pointer text-[#262629]/40 hover:text-[#059CFA]/60 duration-300"
                  >
                    <BiPlus size={16} />
                  </p>
                </div>
              </div>

              <div className="flex justify-between border-t border-black/5 py-3 px-3">
                <p className="font-bold text-[15px]">Subtotal</p>
                <div className="flex gap-2">
                  <p>৳ {cart.productRef.price * (quantities[cart._id] || 1)}</p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(cart._id)}
                className="text-white cursor-pointer "
              >
                <RiDeleteBin6Line className="bg-[#C9302C]  h-7 w-7 p-1" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 justify-between items-center my-12">
        <div className="text-2xl">
          Total Amount (৳):{" "}
          <span className="text-3xl font-bold text-[#059CFA]">
            {totalPrice}
          </span>
        </div>

        <div className="text-white text-sm font-semibold items-center text-center w-[70%] sm:w-[50%] md:w-[40%] bg-[#059CFA] rounded hover:bg-[#02D7F8] duration-300 px-2 py-2">
          <span>
            <Checkout />
          </span>
        </div>

        <Link
          to="/"
          className="text-white text-sm font-semibold rounded items-center text-center w-[70%] sm:w-[50%] md:w-[40%] bg-[#059CFA] hover:bg-[#02D7F8] px-2 py-2 mt-3 duration-300"
        >
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
