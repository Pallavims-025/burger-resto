"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "../../Components/Footer";

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored || (prefersDark ? "dark" : "light");
    setTheme(initial);
    if (document.documentElement) {
      document.documentElement.classList.toggle("dark", initial === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (document.documentElement) {
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
    }
  };

  return (
    <div className="bg-violet-100 dark:bg-black min-h-screen">
      <div className="item max-w-[1400px] mx-auto bg-white dark:bg-black rounded-[20px] flex flex-col">

        <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-8 h-[80px]">

            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7YXQ3kJQQ9OCITtBTul-N-9imcmmXUwGp0pFnhPZohf0xzlaf"
              alt="Logo"
              className="h-[64px] w-[140px] rounded-md object-cover"
            />

            <nav className="hidden md:flex items-center gap-8 text-gray-900 dark:text-white font-semibold">
              <a href="/home" className="hover:text-red-500">Home</a>
              <a href="/about" className="hover:text-red-500">Pages</a>
              <a href="/menu" className="hover:text-red-500">Menu</a>
              <a href="/shop" className="hover:text-red-500">Shops</a>
              <a href="/blogs" className="hover:text-red-500">Blogs</a>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <img
                src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
                alt="Cart"
                className="h-[44px] w-[44px] rounded-full object-cover"
              />
              <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700">
                Register Now
              </button>
              <button
                onClick={toggleTheme}
                className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-2 px-3 rounded-full text-sm font-semibold"
              >
                {theme === "dark" ? "" : " "}
              </button>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-1 px-2 rounded text-xs"
              >
                {theme === "dark" ? "" : ""}
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-6 py-4 space-y-4">
              <a href="/home" className="block text-gray-900 dark:text-white hover:text-red-500">Home</a>
              <a href="/about" className="block text-gray-900 dark:text-white hover:text-red-500">Pages</a>
              <a href="/menu" className="block text-gray-900 dark:text-white hover:text-red-500">Menu</a>
              <a href="/shop" className="block text-gray-900 dark:text-white hover:text-red-500">Shops</a>
              <a href="/blogs" className="block text-gray-900 dark:text-white hover:text-red-500">Blogs</a>
              <button className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700">Register Now</button>
            </div>
          )}
        </header>

        <main className="w-full pt-[100px] pb-16">

          <section className="relative w-full">
            <img
              src="https://img.freepik.com/premium-photo/chicken-burger-street-food-style-dark-background_918874-20.jpg"
              alt="Hero"
              className="w-full h-[350px] md:h-[650px] object-cover rounded-b-[20px]"
            />

            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkJKXf3DfCK2v2swZI2Rq_vThDdilo-90I5W4NxIJVNdzxKRfQ"
              alt="Overlay"
              className="hidden md:block absolute top-[180px] left-12 w-[360px] rounded-md object-cover shadow-lg"
            />
          </section>

          <section className="bg-white dark:bg-[#121212] text-gray-900 dark:text-white py-12 md:py-20 px-4 md:px-20 mt-8 rounded-lg">
            <div className="text-center mb-10">
              <h3 className="text-red-500 uppercase tracking-widest font-semibold inline-flex items-center gap-3">
                <span className="h-[1px] w-8 bg-red-500"></span>
                About Us
                <span className="h-[1px] w-8 bg-red-500"></span>
              </h3>
              <h1 className="text-2xl md:text-5xl font-bold mt-3 leading-tight">
                The best burgers offer a <br /> combination of tastes.
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXky05V7yLpXTLuP3JUMQ375X2ukUO2hvhVr-275ZzYjcHoyuf"
                alt="Burger"
                className="rounded-[16px] w-full h-[450px] object-cover"
              />

              <div className="flex flex-col justify-between">
                <div className="bg-red-600 rounded-[12px] p-8 text-center text-white">
                  <h2 className="text-5xl font-bold">18+</h2>
                  <p className="text-lg font-medium mt-2">Types Of Burger</p>
                </div>

                <img
                  src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="
                  className="rounded-[12px] w-full h-[240px] mt-6 object-cover"
                />
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  New had happen unable uneasy. Drawings can followed improved out sociable not.
                </p>

                <div className="space-y-4">
                  <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Online Food Delivery</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Excellence projecting is devonshire dispatched remarkably.
                    </p>
                  </div>

                  <div className="border border-gray-300 dark:border-gray-700 p-4 rounded">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Authentic Food</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Regularity projecting is devonshire dispatched remarkably.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 px-4 md:px-10">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3">
                <div className="border-t border-red-600 w-16"></div>
                <h2 className="text-red-600 text-lg font-bold tracking-widest">OUR SPECIAL</h2>
                <div className="border-t border-red-600 w-16"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

              <div className="text-center bg-gray-100 dark:bg-[#0b0b0b] rounded-2xl p-4">
                <img src="https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg" alt="Burger" className="rounded-xl w-full h-[220px] object-cover" />
                <p className="mt-3 text-gray-900 dark:text-white font-semibold text-lg">Classic Double Burger</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                  The original and the best-known burger to date
                </p>
                <button className="mt-4 bg-red-600 text-white hover:bg-white hover:text-black font-bold py-2 px-6 rounded-full hover:bg-red-700">
                  Order Now
                </button>
              </div>

              <div className="text-center bg-gray-100 dark:bg-[#0b0b0b] rounded-2xl p-4">
                <img src="https://img.freepik.com/free-photo/delicious-cheeseburger-with-fresh-toppings_9975-24757.jpg" alt="Burger" className="rounded-xl w-full h-[220px] object-cover" />
                <p className="mt-3 text-gray-900 dark:text-white font-semibold text-lg">Classic Cheese Burger</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                  The original and the best-known burger to date
                </p>
                <button className="mt-4 bg-red-600 text-white hover:bg-white hover:text-black font-bold py-2 px-6 rounded-full hover:bg-red-700">
                  Order Now
                </button>
              </div>

              <div className="text-center bg-gray-100 dark:bg-[#0b0b0b] rounded-2xl p-4">
                <img src="https://tyummies.com/cdn/shop/files/Wagyu-Burger-single.jpg?v=1696103808" alt="Burger" className="rounded-xl w-full h-[220px] object-cover" />
                <p className="mt-3 text-gray-900 dark:text-white font-semibold text-lg">Smash Burger</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                  The original and the best-known burger to date
                </p>
                <button className="mt-4 bg-red-600 text-white hover:bg-white hover:text-black font-bold py-2 px-6 rounded-full hover:bg-red-700">
                  Order Now
                </button>
              </div>

              <div className="text-center bg-gray-100 dark:bg-[#0b0b0b] rounded-2xl p-4">
                <img src="https://www.kitchensanctuary.com/wp-content/uploads/2019/05/Cheesy-Veggie-Burger-Square-1200.jpg" alt="Burger" className="rounded-xl w-full h-[220px] object-cover" />
                <p className="mt-3 text-gray-900 dark:text-white font-semibold text-lg">Turkey Chicken Burger</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                  The original and the best-known burger to date
                </p>
                <button className="mt-4 bg-red-600 text-white hover:bg-white hover:text-black font-bold py-2 px-6 rounded-full hover:bg-red-700">
                  Order Now
                </button>
              </div>

            </div>
          </section>

          <section className="mt-12 px-4 md:px-10">
            <div className="bg-white dark:bg-black text-gray-900 dark:text-white rounded-lg p-6 border border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src="https://thumbs.dreamstime.com/b/delicious-burger-special-offer-advertisement-mouthwatering-burger-star-promotional-image-set-against-vibrant-407069718.jpg"
                  alt="Offer"
                  className="rounded-lg w-full h-[380px] object-cover"
                />
                <img
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-banner-display-ads-design-template-de3bb854b3eb64b3b9ca7144ce05b142_screen.jpg"
                  className="rounded-lg w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mt-12 px-4 md:px-10">
            <div className="text-center mb-6">
              <h1 className="text-red-600">---------POPULAR MENU----------</h1>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
                <span className="text-red-600">Latest Food Items</span>
              </h2>
            </div>

            <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-4 scrollbar-hide">
              <div className="min-w-[250px] bg-gray-100 dark:bg-[#111] rounded-2xl p-4 text-center hover:scale-105 transition flex-shrink-10">
                <img src="https://www.shutterstock.com/image-photo/double-chicken-burger-isolated-on-600nw-1923966728.jpg" alt="Burger" className="w-52 h-44 mx-auto mb-4 rounded-xl object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Classic Chicken</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Ricotta/goat cheese/beetroot</p>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <span className="inline-block mt-3 text-xs bg-red-500 px-3 py-1 rounded-full text-white">$35</span>
                  <button className="bg-red-600 text-white hover:bg-white hover:text-black font-bold py-1 px-3 rounded-full">Order</button>
                </div>
              </div>
              <div className="min-w-[250px] bg-gray-100 dark:bg-[#111] rounded-2xl p-4 text-center hover:scale-105 transition flex-shrink-0">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2cvYFW-XJki_OTmIztEk0I-iy4zlJJKIkw&s" alt="Burger" className="w-52 h-44 mx-auto mb-4 rounded-xl object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cheese Burger</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Atlantic/chips/salad</p>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <span className="inline-block mt-3 text-xs bg-red-500 px-3 py-1 rounded-full text-white">$42</span>
                  <button className="bg-red-600 text-white hover:bg-white hover:text-black font-bold py-1 px-3 rounded-full">Order</button>
                </div>
              </div>
              <div className="min-w-[250px] bg-gray-100 dark:bg-[#111] rounded-2xl p-4 text-center hover:scale-105 transition flex-shrink-0">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3TBX_bxY9jwlxgvsEMEKTj_b8PMLAFoaGw&s" alt="Pizza" className="w-52 h-44 mx-auto mb-4 rounded-xl object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Pepperoni Pizza</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Ricotta/goat cheese/beetroot</p>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <span className="inline-block mt-3 text-xs bg-red-500 px-3 py-1 rounded-full text-white">$29</span>
                  <button className="bg-red-600 text-white hover:bg-white hover:text-black font-bold py-1 px-3 rounded-full">Order</button>
                </div>
              </div>
              <div className="min-w-[250px] bg-gray-100 dark:bg-[#111] rounded-2xl p-4 text-center hover:scale-105 transition flex-shrink-0">
                <img src="https://img.freepik.com/premium-photo/italian-pizza-margherita-black-background_356194-1114.jpg" alt="Pizza" className="w-52 h-44 mx-auto mb-4 rounded-xl object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Margherita Pizza</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Tartare/chips/salad</p>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <span className="inline-block mt-3 text-xs bg-red-500 px-3 py-1 rounded-full text-white">$15</span>
                  <button className="bg-red-600 text-white hover:bg-white hover:text-black font-bold py-1 px-3 rounded-full">Order</button>
                </div>
              </div>
            </div>

            <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-4 scrollbar-hide mt-6">
              <div className="min-w-[250px] bg-gray-100 dark:bg-[#111] rounded-2xl p-4 text-center hover:scale-105 transition flex-shrink-0">
                <img src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246066.jpg" alt="Food" className="w-52 h-44 mx-auto mb-4 rounded-xl object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Classic Chicken</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Ricotta/goat cheese/beetroot</p>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <span className="inline-block mt-3 text-xs bg-red-500 px-3 py-1 rounded-full text-white">$35</span>
                  <button className="bg-red-600 text-white hover:bg-white hover:text-black font-bold py-1 px-3 rounded-full">Order</button>
                </div>
              </div>
              <div className="min-w-[250px] bg-gray-100 dark:bg-[#111] rounded-2xl p-4 text-center hover:scale-105 transition flex-shrink-0">
                <img src="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=" alt="Pizza" className="w-52 h-44 mx-auto mb-4 rounded-xl object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cheese Pizza</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Tartare/chips/salad</p>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <span className="inline-block mt-3 text-xs bg-red-500 px-3 py-1 rounded-full text-white">$42</span>
                  <button className="bg-red-600 text-white hover:bg-white hover:text-black font-bold py-1 px-3 rounded-full">Order</button>
                </div>
              </div>
              <div className="min-w-[250px] bg-gray-100 dark:bg-[#111] rounded-2xl p-4 text-center hover:scale-105 transition flex-shrink-0">
                <img src="https://thumbs.dreamstime.com/b/grill-chicken-legs-grilled-chicken-legs-bbq-sesame-parsley-tomato-95526623.jpg" alt="Chicken" className="w-52 h-44 mx-auto mb-4 rounded-xl object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Grilled Chicken</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Atlantic/salad/tartare</p>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <span className="inline-block mt-3 text-xs bg-red-500 px-3 py-1 rounded-full text-white">$29</span>
                  <button className="bg-red-600 text-white hover:bg-white hover:text-black font-bold py-1 px-3 rounded-full">Order</button>
                </div>
              </div>
              <div className="min-w-[250px] bg-gray-100 dark:bg-[#111] rounded-2xl p-4 text-center hover:scale-105 transition flex-shrink-0">
                <img src="https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw=" alt="Pizza" className="w-52 h-44 mx-auto mb-4 rounded-xl object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tikka Masala Pizza</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Cheesy/spicy marinade</p>
                <div className="mt-3 flex items-center justify-center gap-4">
                  <span className="inline-block mt-3 text-xs bg-red-500 px-3 py-1 rounded-full text-white">$15</span>
                  <button className="bg-red-600 text-white hover:bg-white hover:text-black font-bold py-1 px-3 rounded-full">Order</button>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12 px-4 md:px-10">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://thumbs.dreamstime.com/b/delicious-cheeseburger-fresh-toppings-pickles-wooden-table-against-black-background-mouthwatering-features-juicy-383862075.jpg"
                alt="Combo banner"
                className="w-full h-[420px] md:h-[650px] object-cover rounded-lg"
              />

              <div className="absolute left-6 md:left-20 bottom-8 md:bottom-16 text-white max-w-lg">
                <h3 className="text-xl font-semibold bg-black/50 inline-block px-3 py-1 rounded">
                  SPECIAL COMBO
                </h3>
                <h2 className="text-3xl md:text-6xl font-bold mt-3">
                  Burger And Sea Fish Curry Combo
                </h2>
                <p className="mt-3 text-sm md:text-base text-white/90">
                  Continue indulged speaking the was out horrible for domestic position.
                </p>
                <button className="mt-4 bg-red-600 hover:bg-white hover:text-black text-white font-bold px-6 py-3 rounded-full">
                  Accept This Deal
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer/>
      </div>
    </div>
  );
}