import axiosInstance from "../../../config/axiosInterceptor";

export let getProductApi = async (search) => {
  // console.log(search);
  try {
    let url = search ? `/products/search?q=${search}` : "/products?limit=194";
    let res = await axiosInstance.get(url)
    // console.log(res.data.products);
    return res.data.products;
  } catch (error) {
    console.log(error);
  }
};

export let filterProductApi = async () => {
  let res = await axiosInstance.get("/products/categories");
  return res.data;
};


export let categoryProductApi = async (product)=>{

  let res = await axiosInstance.get(`/products/category/${product}`);
  // console.log(res);
  return res.data.products;
}