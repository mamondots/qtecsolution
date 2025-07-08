// import { productList } from "../../../utilits/newProducts";
import { useGetProductsQuery } from "@/redux/features/products/productaApi";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const { data: products } = useGetProductsQuery("");
  console.log("find products", products);
  return (
    <div className="container mt-8">
      <div className="flex items-center justify-center flex-col text-center">
        <h1 className="text-xl font-semibold">All Products</h1>
        <p className="text-[#262626]/70 lg:w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          voluptatem fuga quis aut odio
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-4 gap-2 py-8">
        {products?.data?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
