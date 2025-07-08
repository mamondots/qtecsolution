import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useGetSingleProductQuery } from "@/redux/features/products/productaApi";
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import toast from "react-hot-toast";
const ProductDetails = () => {
  const id = useParams();
  const [addToCart, { isLoading }] = useAddToCartMutation();

  const { data: product } = useGetSingleProductQuery(id);
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleAddToCart = async () => {
    try {
      const params = {
        productRef: product?.data?._id,
        quantity: count,
      };
      await addToCart({ params }).unwrap();
      toast.success("Product added to cart!");
    } catch (err) {
      console.error("Failed to add to cart:", err);
      toast.error("Failed to add product to cart. Please try again.");
    }
  };

  console.log("products details", product);
  return (
    <div className="container mt-6">
      <div className="flex items-center  gap-1">
        <Link to="/">
          <p className="hover:text-[#059CFA] duration-300 cursor-pointer">
            Home
          </p>
        </Link>
        <p>
          <MdKeyboardArrowRight />
        </p>
        <p className="text-[#262626]/80 lg:text-base text-sm">
          {product?.data?.title}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 py-8">
        <div className="border rounded flex items-center justify-center p-4">
          <img src={product?.data?.image} alt="details" className="rounded" />
        </div>
        <div className="">
          <h1 className="text-xl font-semibold text-[#262629]/90">
            {product?.data?.title}
          </h1>

          <p className="mt-1 flex items-center gap-1 text-lg">
            <span className="text-[red]">
              <FaFire />
            </span>
            <span className="text-[red]">6 sold in last 25 hours</span>
          </p>

          <div className="flex items-center gap-3 mt-2">
            <p className="text-lg font-semibold">৳ {product?.data?.price}</p>
            {product?.data?.mrpPrice && (
              <p className="text-[red] line-through text-sm">
                ৳ {product?.data?.mrpPrice}
              </p>
            )}
          </div>

          <p className="mt-1 text-sm text-[#262629]/80">
            {product?.data?.description}
          </p>

          <p className="mt-2 text-sm text-[#262629]/80">
            <span className="font-semibold">SKU</span> :{" "}
            <span className="text-sm">{product?.data?.sku}</span>
          </p>

          <p className="mt-2  text-[#262629]/80">
            <span className="font-semibold">Availability</span> :{" "}
            <span className="text-sm">{product?.data?.availability}</span>
          </p>

          <div className="mt-2 flex items-center gap-1  text-[#262629]">
            <p className="font-semibold">Size :</p>
            <p className="flex items-center gap-1 mt-1">
              {product?.data?.size.map((item, index) => (
                <span
                  key={index}
                  className="border border-[#262629]/40 px-2 rounded text-sm capitalize cursor-pointer hover:border-primary/40 hover:text-primary duration-300"
                >
                  {item}
                </span>
              ))}
            </p>
          </div>

          <p className="mt-2 text-sm text-[#262629]/80">
            <span className="font-semibold">Category</span> :{" "}
            <span className="text-sm">{product?.data?.category}</span>
          </p>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center justify-between border border-[#262629]/40 hover:border-[#059CFA]/40 duration-300 rounded px-2 py-1 md:w-[45%] w-[30%]">
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
            <div
              onClick={isLoading ? undefined : handleAddToCart}
              className="w-full bg-[#059CFA] hover:bg-[#01D7F8] cursor-pointer duration-300 rounded text-white text-center py-1.5"
            >
              <button className="text-sm outline-none cursor-pointer">
                {isLoading ? "Adding..." : "Add to cart"}
              </button>
            </div>
          </div>

          <div className="w-full bg-[#059CFA]  hover:bg-[#01D7F8] duration-300 cursor-pointer rounded text-white text-center py-1.5 mt-2">
            <button className="text-sm outline-none cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
