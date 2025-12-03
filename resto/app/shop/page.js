"use client";
import Footer from "../../Components/Footer";
import TopBanner from "../../Components/tb3";
import { useState, useEffect } from "react";

export default function Shop() {
  const [open, setOpen] = useState(false);
  const [notify, setNotify] = useState(false);
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

  const handleAddToCart = () => {
    setNotify(true);
    setTimeout(() => setNotify(false), 2000);
  };

  return (
    <div className="bg-violet-100 dark:bg-black min-h-screen">

      
      <div className="bg-white dark:bg-black fixed top-0 left-0 w-full h-[90px] z-50 flex items-center justify-between px-5 md:px-10 border-b border-gray-300 dark:border-gray-800">

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

        
        <div className="hidden md:flex items-center gap-3">

          <img
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
            className="h-[40px] w-[40px] rounded-md"
          />

          <button className="bg-red-600 px-5 py-2 rounded-full text-white font-bold hover:bg-red-700">
            Register Now
          </button>

          
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-full text-sm"
          >
            {theme === "dark" ? "" : ""}
          </button>
        </div>

       
        <div className="md:hidden flex items-center gap-3">

          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded text-sm"
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
        <div className="md:hidden bg-white dark:bg-black text-gray-900 dark:text-white w-full px-5 py-4 space-y-4 mt-[90px]">

          <a href="/home" className="block">Home</a>
          <a href="/about" className="block">Pages</a>
          <a href="/menu" className="block">Menu</a>
          <a href="/shop" className="block">Shops</a>
          <a href="/blogs" className="block">Blogs</a>

          <img
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
            className="h-[40px] w-[40px] rounded-md mt-3"
          />

          <button className="bg-red-600 w-full py-2 rounded-full text-white font-bold mt-2">
            Register Now
          </button>
        </div>
      )}

      
      {notify && (
        <div className="fixed top-[100px] right-5 bg-green-600 text-white px-5 py-2 rounded-lg shadow-lg z-[999] transition-all duration-300">
          ✔ Added to cart!
        </div>
      )}

      <div className="pt-[5px]"></div>

      <TopBanner />

      
      <div className="w-full px-5 md:px-20 mt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-900 dark:text-white text-lg font-serif">
          Showing 1–8 of 20 results
        </p>

        <button className="border px-4 py-2 text-gray-900 dark:text-white rounded-lg mt-3 sm:mt-0">
          Sort by Latest
        </button>
      </div>

      
      <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-10 mt-10 px-5 md:px-20">

        <div className="flex items-center justify-center mb-10">
          <div className="border-t border-red-600 w-16"></div>
          <h2 className="text-red-600 px-6 text-xl font-bold tracking-widest">
            Make Your Choice
          </h2>
          <div className="border-t border-red-600 w-16"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">

          {[
            { img: "https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg", cat: "CREEMY,PIZZA", name: "Margherita Pizza" },
            { img: "https://cdn.pixabay.com/photo/2022/07/15/18/12/cheese-burger-7323674_640.jpg", cat: "CREEMY BURGER", name: "Margherita Burger" },
            { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkY5q6mkcDda5cC8-biU5_vtQmev06lvzpzwLPpL5iJyBbhHFo-Y94BMAbJX-QOOEnzjY&usqp=CAU", cat: "BEEF, STEAK", name: "Grilled Flank Steak" },
            { img: "https://cti.farziengineer.co/products/Chicken_Whole_in_BBQ__With_Skin_2-7a68e8a07a8a.jpg?auto=format&sharp=20&ixlib=react-9.3.0", cat: "BBQ, MEAT", name: "Barbeque Chicken" },
            { img: "https://img.freepik.com/free-photo/fried-spring-rolls-cutting-board_1150-17010.jpg?semt=ais_hybrid&w=740&q=80", cat: "FOOD, ROLL", name: "Vegetable Roll" },
            { img: "https://media.istockphoto.com/id/1224646193/photo/chicken-alfredo-parmesan-penne-pasta-with-spinach.jpg?s=612x612&w=0&k=20&c=LhSvdJnGqqMTvY0yJovdG0rPwji1g5wNAKUgLYqJBhw=", cat: "PASTA, SPICY", name: "Creamy Pasta" },
            { img: "https://media.istockphoto.com/id/1353181709/photo/two-large-shawarma-roll-with-chicken-and-vegetables-on-a-dark-textured-background-close-up.jpg?s=612x612&w=0&k=20&c=Ay-_Uzr8o5_KwjYK36nW0KzPJbcCebo7ScjKRgEr4r0=", cat: "MEAT, SHAWARMA", name: "Chicken Shawarma" },
            { img: "https://media.istockphoto.com/id/619637254/photo/two-fresh-submarine-sandwiches.jpg?s=612x612&w=0&k=20&c=5WtuqMq6eYFognGqc7wkGUspHxcKNWr-rV2rkAegM7g=", cat: "SANDWICH, CHICKEN", name: "Submarine Sandwich" }
          ].map((p) => (
            <div
              key={p.name}
              className="bg-[#1a1a1a] dark:bg-[#111] rounded-3xl p-4 w-[160px] sm:w-[200px] md:w-[230px] flex flex-col items-center border border-white/40 dark:border-gray-800 hover:border-yellow-400 transition"
            >

              <img
                src={p.img}
                className="rounded-[20px] w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[150px] object-cover"
              />

              <p className="mt-3 text-sm text-gray-300 dark:text-gray-400">{p.cat}</p>
              <p className="mt-2 text-lg font-semibold">{p.name}</p>
              <p className="mt-2 text-yellow-300 text-lg">$12.00</p>

              <button
                onClick={handleAddToCart}
                className="mt-3 px-5 py-1 bg-gray-700 dark:bg-gray-800 text-white rounded-full hover:bg-yellow-500 transition"
              >
                Add To Cart
              </button>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
}