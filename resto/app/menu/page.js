"use client";
import Footer from "../../Components/Footer";
import TopBanner from "../../Components/topbanner";
import { useState, useEffect } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  };

  
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = stored || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <div className="bg-violet-100 dark:bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto bg-black dark:bg-black rounded-[20px]">

       
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-black z-50 border-b border-gray-300 dark:border-gray-800">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-8 h-[80px]">

           
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7YXQ3kJQQ9OCITtBTul-N-9imcmmXUwGp0pFnhPZohf0xzlaf"
              alt="Logo"
              className="h-[60px] w-[140px] rounded-md object-cover"
            />

            
            <nav className="hidden md:flex gap-8 text-gray-900 dark:text-white font-semibold">
              <a href="/home" className="hover:text-red-500">Home</a>
              <a href="/about" className="hover:text-red-500">Pages</a>
              <a href="/menu" className="hover:text-red-500">Menu</a>
              <a href="/shop" className="hover:text-red-500">Shops</a>
              <a href="/blogs" className="hover:text-red-500">Blogs</a>
            </nav>

           
            <div className="hidden md:flex items-center gap-4">
              <img
                src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
                className="h-[40px] w-[40px] rounded-full"
              />
              <button className="bg-red-600 px-4 py-2 rounded-full text-white font-bold hover:bg-red-700">
                Register Now
              </button>

              
              <button
                onClick={toggleTheme}
                className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-full text-sm font-semibold"
              >
                {theme === "dark" ? "" : ""}
              </button>
            </div>

           
            <div className="md:hidden flex items-center gap-3">

              <button
                onClick={toggleTheme}
                className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-1 rounded text-sm"
              >
                {theme === "dark" ? "" : ""}
              </button>

              <button
                onClick={() => setOpen(!open)}
                className="text-gray-900 dark:text-white text-3xl"
              >
                ☰
              </button>
            </div>
          </div>

         
          {open && (
            <div
              className={`
              md:hidden 
              bg-white dark:bg-black 
              text-gray-900 dark:text-white 
              px-6 py-4 space-y-4 transition-all duration-300 
              ${closing ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}
            `}
            >
              <a href="/home" onClick={handleClose} className="block hover:text-red-500">
                Home
              </a>

              <a href="/about" onClick={handleClose} className="block hover:text-red-500">
                Pages
              </a>

              <a href="/menu" onClick={handleClose} className="block hover:text-red-500">
                Menu
              </a>

              <a href="/shop" onClick={handleClose} className="block hover:text-red-500">
                Shops
              </a>

              <a href="/blogs" onClick={handleClose} className="block hover:text-red-500">
                Blogs
              </a>

              <button
                onClick={handleClose}
                className="w-full bg-red-600 py-2 rounded-full text-white font-bold mt-4 hover:bg-red-700"
              >
                Register Now
              </button>
            </div>
          )}
        </header>

       
        <main className="pt-[5px] pb-10">

          <TopBanner />

          
          <section className="py-12 px-4 md:px-20 text-gray-900 dark:text-white">
            <div className="text-center mb-10">
              <h3 className="uppercase tracking-widest font-semibold">
                -------- CATEGORY --------
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold mt-3">Choose Your Best Food</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <FoodCard
                img="https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg"
                title="Classic Double Burger"
                desc="Cooked ground meat"
              />

              <FoodCard
                img="https://img.freepik.com/free-photo/delicious-cheeseburger-with-fresh-toppings_9975-24757.jpg"
                title="Classic Cheese Burger"
                desc="Chicken with loaded cheese"
              />

              <FoodCard
                img="https://tyummies.com/cdn/shop/files/Wagyu-Burger-single.jpg?v=1696103808"
                title="Smash Burger"
                desc="Cheese, ham and pineapple"
              />

              <FoodCard
                img="https://www.kitchensanctuary.com/wp-content/uploads/2019/05/Cheesy-Veggie-Burger-Square-1200.jpg"
                title="Turkey Chicken Burger"
                desc="Creamy loaded"
              />
            </div>
          </section>

          
          <section className="py-16 px-4 md:px-20">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">

              <img
                src="https://img.freepik.com/premium-psd/delivery-courier-service-online-shopping-motorcycle-with-parcel-box-3d-rendering_51264-4103.jpg"
                className="w-full h-[350px] md:h-[550px] object-cover"
                alt="Delivery"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">

                <h2 className="text-3xl md:text-6xl font-bold text-white font-serif leading-tight drop-shadow-xl">
                  30 Minutes <span className="text-red-500">Delivery</span>
                </h2>

                <p className="mt-4 text-gray-200 dark:text-gray-300 text-lg md:text-2xl max-w-xl leading-relaxed drop-shadow-xl">
                  A relaxing and pleasant experience — fresh food delivered straight to
                  your doorstep within <span className="font-bold text-yellow-400">30 minutes</span>.
                </p>

                <button className="mt-8 bg-red-600 hover:bg-white hover:text-black transition font-bold text-lg px-8 py-3 rounded-full shadow-lg w-fit">
                  Order Now
                </button>

              </div>
            </div>
          </section>

          
          <section className="py-12 px-4 md:px-20 text-center text-gray-900 dark:text-white">
            <h2 className="text-3xl md:text-5xl font-bold">
              Reserve Your Favorite Private Table
            </h2>

            <p className="mt-2 text-gray-300 max-w-xl mx-auto">
              Enjoy a relaxing atmosphere with excellent food and drinks. Reserve now!
            </p>

            <form className="bg-gray-900 dark:bg-gray-800 p-6 mt-6 rounded-lg max-w-md mx-auto space-y-4 shadow-lg">
              <input className="w-full p-2 rounded bg-gray-800 dark:bg-gray-700 border border-gray-600" type="date" />
              <input className="w-full p-2 rounded bg-gray-800 dark:bg-gray-700 border border-gray-600" placeholder="Number of Persons" />
              <input className="w-full p-2 rounded bg-gray-800 dark:bg-gray-700 border border-gray-600" placeholder="Phone Number" />
              <button className="w-full bg-yellow-600 py-2 rounded font-bold hover:bg-yellow-700">
                Book A Table
              </button>
            </form>
          </section>

        </main>

        <Footer />

      </div>
    </div>
  );
}

function FoodCard({ img, title, desc }) {
  return (
    <div className="bg-gray-800 dark:bg-[#111] p-4 rounded-xl text-center">
      <img src={img} className="rounded-xl w-full h-[250px] md:h-[350px] object-cover" />
      <h3 className="mt-4 text-white text-xl font-semibold">{title}</h3>
      <p className="text-gray-300 dark:text-gray-400 mt-1">{desc}</p>

      <button className="mt-4 bg-red-600 py-2 px-6 rounded-full hover:bg-red-700 text-white font-bold">
        Order Now
      </button>
    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-red-600 p-3 rounded-xl shadow-md text-xl">{icon}</div>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}