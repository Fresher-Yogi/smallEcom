import React from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ArrowDownUp,
  Key,
} from "lucide-react";
import {
  useAllCategories,
  useAllProducts,
} from "../../../features/proudct/hooks/useAllProductsHook";

const Filter = ({ search, setSearch, categoryProductData , setCategoryProductData }) => {
  let { data, isPending, error } = useAllCategories();

  if (isPending) return <h1> Categories Loading </h1>;

  return (
    <section className="w-full mb-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
        {/* Search Bar */}
        <div className="relative w-full lg:max-w-[430px] group">
          <Search
            size={19}
            strokeWidth={1.7}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#4A4540]/60 group-focus-within:text-[#1A1A1A] transition-colors"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search your favourite products..."
            className="w-full h-[54px] pl-14 pr-5 rounded-2xl bg-[#F4F1EA] border border-[#A3B19B]/30 outline-none text-sm font-body text-[#1A1A1A] placeholder:text-[#4A4540]/50 focus:border-[#A3B19B] focus:bg-[#FAF9F6] transition-all duration-300"
          />
        </div>

        {/* Filter Options */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          {/* Category */}
          <button className="flex-1 sm:flex-none h-[48px] px-4 flex items-center justify-center gap-3 rounded-xl border border-[#A3B19B]/40 bg-[#FAF9F6] text-[#4A4540] hover:bg-[#F4F1EA] transition-all duration-300">
            <select
            value={categoryProductData}
              onChange={(e) => {
                console.log("select changed", e.target.value);
                setCategoryProductData(e.target.value)
              }}
              className="text-xs font-semibold font-body"
            >
              <option value="category"> All Categories </option>

              {data.map((val) => {
                return (
                  <option key={val.slug} value={val.slug}>
                    {val.name}
                  </option>
                );
              })}
            </select>
          </button>

          {/* Price Filter */}
          <button className="flex-1 sm:flex-none h-[48px] px-4 flex items-center justify-center gap-3 rounded-xl border border-[#A3B19B]/40 bg-[#FAF9F6] text-[#4A4540] hover:bg-[#F4F1EA] transition-all duration-300">
            <span className="text-xs font-semibold font-body">Price</span>

            <ArrowDownUp size={15} />
          </button>

          {/* More Filters */}
          <button className="flex-1 sm:flex-none h-[48px] px-5 flex items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] text-[#FAF9F6] hover:bg-[#A3B19B] hover:text-[#1A1A1A] transition-all duration-300">
            <SlidersHorizontal size={16} />

            <span className="text-xs font-semibold font-body"> Filters </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
