
import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  MoveRight,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

const Collections = () => {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-body">

      {/* Hero Section */}
      <section className="px-5 md:px-12 lg:px-20 pt-10 pb-16">
        <div className="relative bg-[#F4F1EA] rounded-[28px] overflow-hidden min-h-[480px] flex items-center">

          <div className="relative z-10 px-7 md:px-14 py-16 max-w-2xl">
            <span className="inline-flex items-center gap-3 text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
              <Sparkles size={15} />
              Curated Collections
            </span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-[76px] font-semibold tracking-[-3px] leading-[1.05] mt-7">
              Discover
              <br />
              your next
              <br />
              <span className="text-[#84947D]">favourite.</span>
            </h1>

            <p className="text-[#4A4540] text-sm md:text-base leading-8 max-w-md mt-7">
              Explore collections thoughtfully brought together
              to inspire your style, elevate your space, and make
              everyday moments more special.
            </p>

            <a
              href="#all-collections"
              className="inline-flex items-center gap-8 bg-[#1A1A1A] text-white px-7 py-4 rounded-full text-sm mt-9 hover:bg-[#84947D] transition-all duration-300"
            >
              Explore Collections
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="absolute right-0 top-0 w-full lg:w-[52%] h-full">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
              alt="Curated collection"
              className="w-full h-full object-cover opacity-20 lg:opacity-100"
            />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#F4F1EA] via-[#F4F1EA]/30 to-transparent" />
          </div>

        </div>
      </section>

      {/* Collection Intro */}
      <section className="px-5 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E7E3DB] pb-10">
          <div>
            <span className="text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
              Find Your Style
            </span>

            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mt-4">
              Collections made for you.
            </h2>
          </div>

          <p className="text-sm text-[#4A4540] leading-7 max-w-md">
            From everyday essentials to statement pieces, discover
            thoughtfully selected products for every part of your life.
          </p>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="px-5 md:px-12 lg:px-20 py-10">
        <div className="relative h-[420px] md:h-[520px] rounded-[24px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1500"
            alt="The everyday edit collection"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

          <div className="absolute bottom-10 left-7 md:left-14 max-w-xl text-white">
            <span className="text-xs tracking-[3px] uppercase text-[#D6E0D0] font-semibold">
              Featured Collection
            </span>

            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-5 leading-tight">
              The Everyday
              <br />
              Edit.
            </h2>

            <p className="text-white/75 text-sm leading-7 mt-4 max-w-sm">
              Timeless essentials and everyday favourites,
              selected to complement your lifestyle.
            </p>

            <a
              href="/shop"
              className="inline-flex items-center gap-7 bg-[#FAF9F6] text-[#1A1A1A] px-7 py-4 rounded-full text-sm mt-7 hover:bg-[#A3B19B] transition"
            >
              Explore Collection
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* All Collections */}
      <section
        id="all-collections"
        className="px-5 md:px-12 lg:px-20 py-20"
      >
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
              Explore & Discover
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mt-4">
              Browse our collections
            </h2>

            <p className="text-sm text-[#4A4540] mt-3">
              Something special for every taste and occasion.
            </p>
          </div>

          <a
            href="/shop"
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-[#84947D] transition"
          >
            View All Products
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Collection 1 */}
          <article className="group">
            <div className="relative h-[380px] rounded-[20px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900"
                alt="Fashion collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <span className="absolute top-5 left-5 bg-[#FAF9F6] text-[#1A1A1A] px-4 py-2 rounded-full text-[10px] uppercase tracking-wider">
                Style & Comfort
              </span>

              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    Fashion Edit
                  </h3>
                  <p className="text-xs text-white/75 mt-2">
                    Everyday style, redefined.
                  </p>
                </div>

                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#A3B19B] transition">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </article>

          {/* Collection 2 */}
          <article className="group">
            <div className="relative h-[380px] rounded-[20px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900"
                alt="Accessories collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <span className="absolute top-5 left-5 bg-[#FAF9F6] text-[#1A1A1A] px-4 py-2 rounded-full text-[10px] uppercase tracking-wider">
                The Finishing Touch
              </span>

              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    Accessories
                  </h3>
                  <p className="text-xs text-white/75 mt-2">
                    Small details, big impact.
                  </p>
                </div>

                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#A3B19B] transition">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </article>

          {/* Collection 3 */}
          <article className="group">
            <div className="relative h-[380px] rounded-[20px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900"
                alt="Home collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <span className="absolute top-5 left-5 bg-[#FAF9F6] text-[#1A1A1A] px-4 py-2 rounded-full text-[10px] uppercase tracking-wider">
                Comfort Living
              </span>

              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    Home & Living
                  </h3>
                  <p className="text-xs text-white/75 mt-2">
                    Make every corner yours.
                  </p>
                </div>

                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#A3B19B] transition">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </article>

          {/* Collection 4 */}
          <article className="group">
            <div className="relative h-[380px] rounded-[20px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900"
                alt="Lifestyle collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <span className="absolute top-5 left-5 bg-[#FAF9F6] text-[#1A1A1A] px-4 py-2 rounded-full text-[10px] uppercase tracking-wider">
                Everyday Favourites
              </span>

              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    Lifestyle
                  </h3>
                  <p className="text-xs text-white/75 mt-2">
                    Made for your everyday.
                  </p>
                </div>

                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#A3B19B] transition">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </article>

          {/* Collection 5 */}
          <article className="group">
            <div className="relative h-[380px] rounded-[20px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
                alt="Trending collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <span className="absolute top-5 left-5 bg-[#FAF9F6] text-[#1A1A1A] px-4 py-2 rounded-full text-[10px] uppercase tracking-wider">
                Popular Picks
              </span>

              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    Trending Now
                  </h3>
                  <p className="text-xs text-white/75 mt-2">
                    What's catching everyone's eye.
                  </p>
                </div>

                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#A3B19B] transition">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </article>

          {/* Collection 6 */}
          <article className="group">
            <div className="relative h-[380px] rounded-[20px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900"
                alt="New arrivals collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <span className="absolute top-5 left-5 bg-[#FAF9F6] text-[#1A1A1A] px-4 py-2 rounded-full text-[10px] uppercase tracking-wider">
                Just Arrived
              </span>

              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    New Arrivals
                  </h3>
                  <p className="text-xs text-white/75 mt-2">
                    Fresh finds, fresh inspiration.
                  </p>
                </div>

                <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#A3B19B] transition">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* Brand Message */}
      <section className="px-5 md:px-12 lg:px-20 pb-24">
        <div className="relative overflow-hidden bg-[#1A1A1A] rounded-[28px] px-8 md:px-16 py-16 md:py-20">

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs tracking-[3px] uppercase text-[#A3B19B] font-semibold">
              A Thoughtful Selection
            </span>

            <h2 className="font-display text-4xl md:text-6xl text-[#FAF9F6] font-semibold leading-tight tracking-tight mt-6">
              Good design.
              <br />
              Great quality.
              <br />
              <span className="text-[#A3B19B]">Everyday value.</span>
            </h2>

            <p className="text-[#B9B4AC] text-sm leading-7 mt-6 max-w-lg">
              We bring together products that balance style, functionality,
              and value. Explore our store and find something that feels
              just right for you.
            </p>

            <a
              href="/main/shop"
              className="inline-flex items-center gap-7 bg-[#A3B19B] text-[#1A1A1A] px-7 py-4 rounded-full text-sm font-semibold mt-9 hover:bg-[#FAF9F6] transition"
            >
              Shop All Products
              <MoveRight size={18} />
            </a>
          </div>

          <div className="absolute right-[-100px] top-[-130px] w-[400px] h-[400px] border border-white/10 rounded-full" />
          <div className="absolute right-[-20px] bottom-[-220px] w-[450px] h-[450px] border border-white/10 rounded-full" />
        </div>
      </section>

    </main>
  );
};

export default Collections;
