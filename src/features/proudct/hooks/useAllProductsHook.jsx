import {React, useEffect, useState} from "react";
import { categoryProductApi, filterProductApi, getProductApi } from "../api/productApi";
import { useQuery } from "@tanstack/react-query";

export const useAllProducts = () => {
  let [search, setSearch] = useState(null);
  let [debounceSearch, setDebounceSearch] = useState(null);

  useEffect(()=>{
    let timeout = setTimeout(()=>{
      setDebounceSearch(search);
    },1000)

    return ()=> clearTimeout(timeout);
  },[search])

  let { isPending, data, error } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: ()=> getProductApi(debounceSearch)
  });

  return { isPending, data, error, search, setSearch };
};



export const useAllCategories = () => {
  let { isPending, data, error } = useQuery({
    queryKey: ["filteredProducts"],
    queryFn: filterProductApi,
  });
  return { isPending, data, error };
};



export const useCategoryProduct = () => {

    let [categoryProductData, setCategoryProductData] = useState([]) 

    let {isPending, data, error} = useQuery({
      queryKey : ['categoryProductData',categoryProductData],
      queryFn : ()=> categoryProductApi(categoryProductData)
    })

    return {categoryProductData, setCategoryProductData, isPending , data, error }

}