import React, { useState } from "react";
import {
  ShoppingCart,
  Package,
  LogOut,
  Menu,
  X,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../features/auth/state/authSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  let navigate = useNavigate();

  let dispatch = useDispatch();

  const navLinks = [
    { name: "Home", path: "/main" },
    { name: "Shop", path: "/main/shop" },
    { name: "Collections", path: "/main/collections" },
    { name: "About", path: "/main/about" },
  ];

  return (
    <>
      <header className="w-full bg-[#F4F1EA] text-[#1A1A1A] border-b border-[#A3B19B]/40 relative z-30">
        <nav className="max-w-[1500px] mx-auto px-5 md:px-10">
          <div className="h-[85px] flex items-center justify-between">
            {/* LOGO */}
            <a href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center">
                <ShoppingCart size={21} className="text-[#F4F1EA]" />
              </div>

              <div className="flex flex-col">
                <span className="text-[25px] font-extrabold tracking-[-1.5px] leading-none">
                  SkyMart
                </span>
                <span className="text-[9px] tracking-[3px] uppercase text-[#4A4540] mt-1">
                  Shop differently
                </span>
              </div>
            </a>

            {/* NAV LINKS */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="relative text-[13px] font-semibold text-[#4A4540] hover:text-[#1A1A1A] transition-colors duration-300 group"
                >
                  {link.name}

                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#A3B19B] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* CART BUTTON */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#A3B19B]/30 transition-all"
                aria-label="Open shopping cart"
              >
                <ShoppingCart size={21} strokeWidth={1.8} />

                <span className="absolute top-0 right-0 w-[17px] h-[17px] rounded-full bg-[#A3B19B] text-[#1A1A1A] text-[9px] font-bold flex items-center justify-center">
                  0
                </span>
              </button>

              {/* ORDERS */}
              <a
                href="/orders"
                className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full hover:bg-[#A3B19B]/25 transition-all"
              >
                <Package size={20} strokeWidth={1.8} />
                <span className="text-xs font-semibold">Orders</span>
              </a>

              {/* LOGOUT */}
              <button
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  navigate("/", { replace: true });
                  dispatch(removeUser());
                }}
                className="hidden sm:flex items-center gap-2 bg-[#1A1A1A] text-[#FAF9F6] px-5 py-3 rounded-full text-xs font-semibold hover:bg-[#A3B19B] hover:text-[#1A1A1A] transition-all duration-300"
              >
                <LogOut size={16} />
                Logout
              </button>

              {/* MOBILE MENU */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-[#A3B19B]/30"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="lg:hidden border-t border-[#A3B19B]/40 py-5">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-semibold text-[#4A4540] hover:bg-[#A3B19B]/25 hover:text-[#1A1A1A] transition-all"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="/orders"
                  className="px-4 py-3 flex items-center gap-3 text-sm font-semibold"
                >
                  <Package size={18} />
                  My Orders
                </a>

                <button
                  onClick={() => {
                    localStorage.removeItem("accessToken");
                    navigate("/", { replace: true });
                    dispatch(removeUser());
                  }}
                  className="mt-3 flex items-center justify-center gap-2 bg-[#1A1A1A] text-white py-3 rounded-xl text-sm font-semibold"
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* CART OVERLAY */}
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500 ${
          cartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* CART DRAWER */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full sm:max-w-[430px] bg-[#FAF9F6] shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CART HEADER */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#E7E3DB]">
          <div>
            <h2 className="font-display text-2xl font-semibold">Your Cart</h2>
            <p className="text-xs text-[#4A4540] mt-1">
              Your favourites, all in one place.
            </p>
          </div>

          <button
            onClick={() => setCartOpen(false)}
            className="w-10 h-10 rounded-full bg-[#F4F1EA] flex items-center justify-center hover:bg-[#A3B19B] transition"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* CART BODY */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <div className="w-24 h-24 rounded-full bg-[#F4F1EA] flex items-center justify-center">
            <ShoppingBag
              size={38}
              strokeWidth={1.3}
              className="text-[#84947D]"
            />
          </div>

          <h3 className="font-display text-xl font-semibold mt-7">
            Your cart is empty
          </h3>

          <p className="text-sm text-[#4A4540] leading-6 mt-3 max-w-[270px]">
            Looks like you haven't added anything to your cart yet. Let's find
            something you'll love.
          </p>

          <button
            onClick={() => setCartOpen(false)}
            className="mt-7 flex items-center gap-5 bg-[#1A1A1A] text-white px-7 py-4 rounded-full text-sm hover:bg-[#84947D] hover:text-[#1A1A1A] transition-all duration-300"
          >
            Continue Shopping
            <ArrowRight size={17} />
          </button>
        </div>

        {/* CART FOOTER */}
        <div className="border-t border-[#E7E3DB] px-6 py-5">
          <div className="flex items-center justify-between text-xs text-[#4A4540]">
            <span>Shopping at SkyMart</span>
            <span className="font-semibold text-[#1A1A1A]">
              Shop differently.
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
