import React from "react";
import {
  ShoppingCart,
  Star,
  ArrowUpRight,
} from "lucide-react";

const ProductCard = ({ product, addToCart }) => {
  if (!product) return null;

  const {
    title,
    brand,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
  } = product;

  const discountedPrice = (
    price - (price * discountPercentage) / 100
  ).toFixed(2);

  return (
    <article className="group bg-[#FAF9F6] rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-1">

      {/* Image Section */}
      <div className="relative bg-[#F4F1EA] rounded-[20px] overflow-hidden aspect-[4/4.2]">

        {/* Discount */}
        {discountPercentage > 0 && (
          <span className="absolute top-4 left-4 z-10 bg-[#1A1A1A] text-[#FAF9F6] px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wide">
            -{Math.round(discountPercentage)}%
          </span>
        )}

        {/* Quick View */}
        <button
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#A3B19B]"
          aria-label="Quick view"
        >
          <ArrowUpRight size={17} />
        </button>

        {/* Product Image */}
        <div className="w-full h-full flex items-center justify-center p-7">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>

        {/* Stock Label */}
        {stock <= 0 && (
          <div className="absolute inset-0 bg-[#1A1A1A]/30 flex items-center justify-center">
            <span className="bg-[#FAF9F6] px-5 py-2 rounded-full text-xs font-semibold">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="pt-5 px-1 pb-2">

        {/* Category + Rating */}
        <div className="flex items-center justify-between mb-3">

          <span className="text-[10px] font-semibold uppercase tracking-[1.8px] text-[#777D70]">
            {brand || category}
          </span>

          <div className="flex items-center gap-1.5">
            <Star
              size={13}
              fill="#A3B19B"
              stroke="#A3B19B"
            />
            <span className="text-xs font-medium text-[#4A4540]">
              {rating}
            </span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="font-display text-[16px] md:text-[17px] font-bold tracking-[-0.6px] text-[#1A1A1A] leading-snug line-clamp-1">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2.5 mt-3">

          <span className="font-display text-[19px] font-bold tracking-[-0.7px] text-[#1A1A1A]">
            ${discountedPrice}
          </span>

          {discountPercentage > 0 && (
            <span className="font-body text-[13px] text-[#4A4540]/50 line-through">
              ${price}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => addToCart?.(product)}
          disabled={stock <= 0}
          className="w-full mt-5 h-[46px] rounded-xl bg-[#1A1A1A] text-[#FAF9F6] flex items-center justify-center gap-2 font-body text-[12px] font-semibold tracking-wide transition-all duration-300 hover:bg-[#A3B19B] hover:text-[#1A1A1A] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ShoppingCart size={16} strokeWidth={1.8} />
          {stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>

      </div>
    </article>
  );
};

export default ProductCard;
