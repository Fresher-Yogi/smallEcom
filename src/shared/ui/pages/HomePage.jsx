import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  Headphones,
  MoveRight,
} from "lucide-react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-body">
      {/* Hero Section */}
      <section className="px-5 md:px-12 lg:px-20 pt-8 pb-16">
        <div className="relative overflow-hidden rounded-[28px] bg-[#F4F1EA] min-h-[540px] flex items-center">
          <div className="relative z-10 w-full lg:w-[55%] px-7 md:px-14 py-16">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[3px] font-semibold text-[#4A4540] mb-7">
              <span className="w-7 h-[1px] bg-[#A3B19B]" />
              The new collection · 2026
            </span>

            <h1 className="font-display text-[46px] sm:text-6xl lg:text-[76px] leading-[1.05] tracking-[-3px] font-semibold max-w-[600px]">
              Find your
              <br />
              everyday
              <br />
              <span className="text-[#84947D]">essentials.</span>
            </h1>

            <p className="mt-7 max-w-[400px] text-[#4A4540] leading-7 text-sm md:text-base">
              Thoughtfully selected products for the way you live. Discover
              quality, simplicity, and style in every detail.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-9">
              <button className="flex items-center gap-8 bg-[#1A1A1A] text-white px-7 py-4 rounded-full text-sm hover:bg-[#84947D] transition-all duration-300">
                Explore Collection
                <ArrowUpRight size={17} />
              </button>

              <a
                href="#featured"
                className="text-sm font-medium border-b border-[#1A1A1A] pb-1 hover:text-[#84947D] hover:border-[#84947D] transition"
              >
                Discover more
              </a>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 top-0 w-[48%] h-full">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200"
              alt="Fashion collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4F1EA] via-transparent to-transparent" />
          </div>

          <div className="lg:hidden absolute inset-0 opacity-[0.12]">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-5 md:px-12 lg:px-20 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-y border-[#E7E3DB] py-8">
          {[
            {
              icon: Truck,
              title: "Free Shipping",
              desc: "On orders above ₹999",
            },
            {
              icon: ShieldCheck,
              title: "Secure Payments",
              desc: "Safe and trusted checkout",
            },
            {
              icon: Headphones,
              title: "Dedicated Support",
              desc: "We're here whenever you need",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#F4F1EA] flex items-center justify-center">
                <item.icon size={21} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-[#4A4540] mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-5 md:px-12 lg:px-20 pb-24">
        <div className="flex justify-between items-end mb-9">
          <div>
            <span className="text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
              Explore our store
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mt-3">
              Shop by category
            </h2>
          </div>

          <a
            href="/shop"
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-[#84947D] transition"
          >
            View all <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Fashion",
              count: "Explore essentials",
              image:
                "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700",
            },
            {
              name: "Accessories",
              count: "Details that matter",
              image:
                "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700",
            },
            {
              name: "Home & Living",
              count: "Make yourself at home",
              image:
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700",
            },
            {
              name: "Lifestyle",
              count: "Everyday favourites",
              image:
                "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=700",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="group relative h-[310px] rounded-[20px] overflow-hidden cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <p className="text-xs text-white/75 mb-2">{category.count}</p>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">
                    {category.name}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#A3B19B] transition">
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section
        id="featured"
        className="bg-[#F4F1EA] px-5 md:px-12 lg:px-20 py-20"
      >
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
              Curated for you
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mt-3">
              Featured products
            </h2>
            <p className="text-sm text-[#4A4540] mt-3">
              A few things we think you'll love.
            </p>
          </div>

          <a
            href="/shop"
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-[#84947D] transition"
          >
            Shop all <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              name: "Everyday Classic",
              category: "Lifestyle",
              price: "₹1,499",
              rating: "4.8",
              image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
            },
            {
              name: "Minimal Carry Bag",
              category: "Accessories",
              price: "₹1,899",
              rating: "4.9",
              image:
                "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700",
            },
            {
              name: "Modern Living",
              category: "Home Decor",
              price: "₹2,299",
              rating: "4.7",
              image:
                "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=700",
            },
            {
              name: "Essential Wear",
              category: "Fashion",
              price: "₹1,299",
              rating: "4.8",
              image:
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700",
            },
          ].map((product, index) => (
            <article key={index} className="group">
              <div className="relative aspect-[4/4.5] rounded-[18px] overflow-hidden bg-[#FAF9F6]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute top-4 left-4 bg-[#FAF9F6] text-[#1A1A1A] text-[10px] uppercase tracking-wider px-3 py-2 rounded-full">
                  Featured
                </span>

                <button className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A] text-white py-3 rounded-full text-xs font-medium flex items-center justify-center gap-2 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ShoppingBag size={15} />
                  Add to Cart
                </button>
              </div>

              <div className="pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#4A4540]">
                    {product.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <Star size={12} fill="#A3B19B" stroke="#A3B19B" />
                    {product.rating}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-base mt-2">
                  {product.name}
                </h3>

                <p className="font-display font-semibold mt-2">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="px-5 md:px-12 lg:px-20 py-24">
        <div className="relative overflow-hidden bg-[#1A1A1A] rounded-[28px] px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs tracking-[3px] uppercase text-[#A3B19B] font-semibold">
              A little something special
            </span>

            <h2 className="font-display text-4xl md:text-5xl text-[#FAF9F6] font-semibold tracking-tight leading-tight mt-5">
              Good things are
              <br />
              worth discovering.
            </h2>

            <p className="text-[#B9B4AC] text-sm leading-7 mt-5 max-w-md">
              Find your next favourite product from our thoughtfully curated
              collection.
            </p>

            <button className="mt-8 w-50 flex items-center gap-8 bg-[#A3B19B] text-[#1A1A1A] px-7 py-4 rounded-full text-sm font-semibold hover:bg-[#FAF9F6] transition">
              <NavLink to={"/main/shop"}>
                Start Shopping <MoveRight size={18} />
              </NavLink>
            </button>
          </div>

          <div className="absolute right-[-50px] top-[-100px] w-[350px] h-[350px] rounded-full border border-white/10" />
          <div className="absolute right-[-10px] bottom-[-170px] w-[400px] h-[400px] rounded-full border border-white/10" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-5 md:px-12 lg:px-20 pb-24">
        <div className="bg-[#F4F1EA] rounded-[24px] text-center px-6 py-16">
          <span className="text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
            Stay in the loop
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-4">
            A little inspiration, delivered.
          </h2>

          <p className="text-sm text-[#4A4540] mt-4 max-w-md mx-auto leading-6">
            Be the first to discover new arrivals, special collections, and
            exclusive updates.
          </p>

          <div className="flex flex-col sm:flex-row max-w-lg mx-auto mt-8 gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-[#FAF9F6] border border-[#E5E0D7] rounded-full px-6 py-4 text-sm outline-none focus:border-[#A3B19B]"
            />
            <button className="bg-[#1A1A1A] text-white rounded-full px-8 py-4 text-sm hover:bg-[#84947D] transition">
              Subscribe <ArrowRight className="inline ml-2" size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
