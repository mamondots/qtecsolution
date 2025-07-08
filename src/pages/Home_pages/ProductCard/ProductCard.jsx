/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useAddToCartMutation } from "@/redux/features/cart/cartApi";
import toast from "react-hot-toast";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, price, mrpPrice, image, _id } = product;

  const [addToCart, { isLoading }] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      const params = {
        productRef: _id,
        quantity: 1,
      };
      await addToCart({ params }).unwrap();
      toast.success("Product added to cart!");
    } catch (err) {
      console.error("Failed to add to cart:", err);
      toast.error("Failed to add product to cart. Please try again.");
    }
  };
  return (
    <div className="group">
      <div className="border rounded cursor-pointer  group-hover:border-[#059CFA]/20 duration-300">
        <Link to={`/product/${_id}`}>
          <div className="lg:h-[280px] relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full rounded-t group-hover:scale-105 duration-300"
            />
          </div>
        </Link>

        <div className="px-3 py-3">
          <Link to={`/product/${_id}`}>
            <h1 className="text-base font-semibold text-[#262626]/80 group-hover:text-[#059CFA] duration-300 line-clamp-1">
              {title}
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold">৳ {price}</p>
            {mrpPrice && (
              <p className="text-[red] line-through text-sm mt-1">
                ৳ {mrpPrice}
              </p>
            )}
          </div>

          <button
            onClick={isLoading ? undefined : handleAddToCart}
            className=" flex items-center justify-center gap-1 text-white w-full py-2 rounded bg-[#059CFA] hover:bg-[#01D7F8] duration-300 mt-2"
          >
            <span className="hover:animate-shake">
              <BsCart3 />
            </span>
            <span className="capitalize">
              {isLoading ? "Adding..." : "Add to cart"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
