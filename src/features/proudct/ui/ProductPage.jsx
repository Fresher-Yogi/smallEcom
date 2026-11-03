import Filter from "../../../shared/ui/components/Filter";
import {useAllProducts, useCategoryProduct} from  '../hooks/useAllProductsHook'
import ProductCard from "./ProductCard";

const ProductPage = () => {

  let { data, isPending, error, search, setSearch } = useAllProducts();

  let {data : productByCategory, categoryProductData, setCategoryProductData } = useCategoryProduct();

  console.log(productByCategory);
  console.log(typeof(productByCategory));

  if (isPending) return <h1> Products Loading..</h1>;

  if (error) return <h1> Error in api </h1>;

  return (
    <>
      <div className="px-12 py-3">
        <Filter search={search} setSearch={setSearch} categoryProductData = {categoryProductData} setCategoryProductData = {setCategoryProductData} />
      </div>
      <div className=" p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {
          (productByCategory) ? 
            productByCategory.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
          :  data.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
        }
      </div>
    </>
  );
};

export default ProductPage;
