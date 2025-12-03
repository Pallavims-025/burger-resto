"use client";
import Footer from "../../Components/Footer";
import TopBanner from "../../Components/tb2";
import { useState, useEffect } from "react";

export default function Pages() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  
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
    <div className="bg-violet-100 dark:bg-black">

     
      <div className="bg-white dark:bg-black fixed top-0 left-0 w-full h-[90px] flex items-center justify-between px-5 md:px-10 z-50 border-b border-gray-300 dark:border-gray-800">

        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7YXQ3kJQQ9OCITtBTul-N-9imcmmXUwGp0pFnhPZohf0xzlaf"
          alt="Burger"
          className="h-[70px] w-[150px] rounded-md"
        />

        <div className="hidden md:flex gap-8 font-bold text-gray-900 dark:text-white text-lg">
          <a href="/home">Home</a>
          <a href="/about">Pages</a>
          <a href="/menu">Menu</a>
          <a href="/shop">Shops</a>
          <a href="/blogs">Blogs</a>
        </div>

        <div className="hidden md:flex items-center gap-4">

          <img
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
            alt="Cart"
            className="h-[45px] w-[45px] rounded-md"
          />

          <button className="bg-red-600 text-white px-5 py-3 rounded-full font-bold hover:bg-red-700">
            Register Now
          </button>

         
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-full text-sm"
          >
            {theme === "dark" ? " " : " "}
          </button>

        </div>

        
        <div className="md:hidden flex items-center gap-3">

          
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded"
          >
            {theme === "dark" ? "" : ""}
          </button>

          <button
            className="text-gray-900 dark:text-white text-4xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

     
      {open && (
        <div className="md:hidden bg-white dark:bg-black text-gray-900 dark:text-white w-full px-5 py-4 space-y-3 mt-[90px] animate-slideDown">
          <a href="/home" className="block">Home</a>
          <a href="/about" className="block">Pages</a>
          <a href="/menu" className="block">Menu</a>
          <a href="/shop" className="block">Shops</a>
          <a href="/blogs" className="block">Blogs</a>

          <button className="bg-red-600 w-full text-white py-3 rounded-full font-bold mt-3">
            Register Now
          </button>
        </div>
      )}

      
      <div className="pt-[5px]"></div>

      
      <TopBanner />

      
      <section className="text-gray-900 dark:text-white py-10 px-5 md:px-20">
        <div className="text-center mb-10">
          <h3 className="uppercase tracking-widest text-xl font-bold flex justify-center items-center gap-2">
            <span className="h-[2px] w-8 bg-current"></span>
            -- Our Trusted 8k Happy Partner --
            <span className="h-[2px] w-8 bg-current"></span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
            <img src="https://seba24bd.com/wp-content/uploads/2024/11/logo-design-for-restaurants-930x620-1-300x300.jpg" className="rounded-2xl w-[120px] h-[120px] object-cover mx-auto" />
            <img src="https://static.vecteezy.com/system/resources/thumbnails/014/394/940/small_2x/vintage-retro-badge-emblem-restaurant-and-cafe-logo-design-linear-style-vector.jpg" className="rounded-2xl w-[120px] h-[120px] object-cover mx-auto" />
            <img src="https://www.creativefabrica.com/wp-content/uploads/2020/04/25/Vintage-restaurant-logo-and-badge-logo-Graphics-3951692-1.jpg" className="rounded-2xl w-[120px] h-[120px] object-cover mx-auto" />
            <img src="https://cdn.vectorstock.com/i/preview-1x/81/18/vintage-restaurant-logo-and-badge-vector-30898118.jpg" className="rounded-2xl w-[120px] h-[120px] object-cover mx-auto" />
            <img src="https://designtoday.net.in/wp-content/uploads/2024/07/Logo-Design-Services-1024x714.jpg" className="rounded-2xl w-[120px] h-[120px] object-cover mx-auto" />
          </div>
        </div>
      </section>

      
      <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-16 px-5">

        <h3 className="text-center text-sm uppercase tracking-widest">
          *** MASTER CHEFS ***
        </h3>

        <h1 className="text-center text-4xl md:text-5xl mt-3 font-bold">
          Meet Our Special Chefs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-10 place-items-center">

          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmfKA7GSYpZ1k4G-OycjpFWvIYZwfGvshzA&s"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-3 left-0 w-full bg-gray-700 dark:bg-gray-900 bg-opacity-90 text-center py-4">
              <p className="font-semibold">ALEXENDER PETLOO</p>
              <p className="text-sm">ASSISTANT CHEF</p>
            </div>
          </div>

          
          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px]">
            <img
              src="https://media.istockphoto.com/id/2030133420/photo/happy-black-cook-serving-a-meal-in-the-kitchen-in-restaurant-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=FD82J5GsVYSB9BzPCpc0qSXa_lbHIm-8LHI-tpGkviE="
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-3 left-0 w-full bg-gray-700 dark:bg-gray-900 bg-opacity-90 text-center py-4">
              <p className="font-semibold">ALEXENDER PETLOO</p>
              <p className="text-sm">ASSISTANT CHEF</p>
            </div>
          </div>

         
          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px]">
            <img
              src="https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208326.jpg"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-3 left-0 w-full bg-gray-700 dark:bg-gray-900 bg-opacity-90 text-center py-4">
              <p className="font-semibold">ALEXENDER PETLOO</p>
              <p className="text-sm">ASSISTANT CHEF</p>
            </div>
          </div>

        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-10 place-items-center">

          
          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmfKA7GSYpZ1k4G-OycjpFWvIYZwfGvshzA&s"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-3 left-0 w-full bg-gray-700 dark:bg-gray-900 bg-opacity-90 text-center py-4">
              <p className="font-semibold">ALEXENDER PETLOO</p>
              <p className="text-sm">ASSISTANT CHEF</p>
            </div>
          </div>

          
          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px]">
            <img
              src="https://media.istockphoto.com/id/2030133420/photo/happy-black-cook-serving-a-meal-in-the-kitchen-in-restaurant-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=FD82J5GsVYSB9BzPCpc0qSXa_lbHIm-8LHI-tpGkviE="
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-3 left-0 w-full bg-gray-700 dark:bg-gray-900 bg-opacity-90 text-center py-4">
              <p className="font-semibold">ALEXENDER PETLOO</p>
              <p className="text-sm">ASSISTANT CHEF</p>
            </div>
          </div>

          
          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px]">
            <img
              src="https://img.freepik.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208326.jpg"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute bottom-3 left-0 w-full bg-gray-700 dark:bg-gray-900 bg-opacity-90 text-center py-4">
              <p className="font-semibold">ALEXENDER PETLOO</p>
              <p className="text-sm">ASSISTANT CHEF</p>
            </div>
          </div>

        </div>

        <Footer />
      </section>
    </div>
  );
}