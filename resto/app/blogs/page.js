"use client";
import Footer from "../../Components/Footer";
import TopBanner from "../../Components/tb4";
import { useState, useEffect } from "react";

export default function Menu() {
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
    <div className="bg-violet-100 dark:bg-black min-h-screen">

     
      <div className="bg-white dark:bg-black fixed top-0 left-0 w-full h-[90px] z-50 flex items-center justify-between px-5 md:px-10 border-b border-gray-300 dark:border-gray-800">

        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7YXQ3kJQQ9OCITtBTul-N-9imcmmXUwGp0pFnhPZohf0xzlaf"
          className="h-[70px] w-[150px] rounded-md"
        />

        
        <div className="hidden md:flex gap-8 text-gray-900 dark:text-white font-bold text-lg">
          <a href="/home">Home</a>
          <a href="/about">Pages</a>
          <a href="/menu">Menu</a>
          <a href="/shop">Shops</a>
          <a href="/blogs">Blogs</a>
        </div>

      
        <div className="hidden md:flex items-center gap-3">

          <img
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
            className="h-[40px] w-[40px]"
          />

          <button className="bg-red-600 px-5 py-2 rounded-full font-bold text-white">
            Register Now
          </button>

          
          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 rounded-full text-sm font-semibold"
          >
            {theme === "dark" ? " Light" : "Dark"}
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
        <div className="md:hidden bg-white dark:bg-black text-gray-900 dark:text-white w-full px-5 py-4 space-y-3 mt-[90px]">
          <a href="/home" className="block">Home</a>
          <a href="/about" className="block">Pages</a>
          <a href="/menu" className="block">Menu</a>
          <a href="/shop" className="block">Shops</a>
          <a href="/blogs" className="block">Blogs</a>

          <img
            src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
            className="h-[40px] w-[40px] mt-3"
          />

          <button className="bg-red-600 w-full py-2 rounded-full text-white font-bold">
            Register Now
          </button>
        </div>
      )}

      <TopBanner />

     
      <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-10 px-5 md:px-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {[
            {
              img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75",
              cat: "BY JOHN BAUS.BURGER, FOOD",
              title: "Picked up a brussels burger sprout.",
              date: "12 AUG",
            },
            {
              img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75",
              cat: "BY ADMIN.PIZZA, FOOD",
              title: "This prefabricated passive house highly",
              date: "13 AUG",
            },
            {
              img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3.jpg&w=1920&q=75",
              cat: "BY JOHN BAUS.BURGER, FOOD",
              title: "Overcame breeding point concern has.",
              date: "14 AUG",
            },
            {
              img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F4.jpg&w=1920&q=75",
              cat: "BY ISTIAK AHMED.PIZZA, FOOD",
              title: "Breeding point has terminate the hole.",
              date: "12 AUG",
            },
            {
              img: "https://media.gettyimages.com/id/1438213571/photo/new-business-agreement.jpg?s=612x612&w=gi&k=20&c=e_QRMP4MK5-qFdIv_DdbBSkhcASFJBktAUwWc6cnSsQ=",
              cat: "BY JOHN BAUS.BURGER, FOOD",
              title: "Picked up a brussels burger sprout.",
              date: "12 AUG",
            },
            {
              img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75",
              cat: "BY ADMIN.PIZZA, FOOD",
              title: "This prefabricated passive house highly",
              date: "13 AUG",
            },
            {
              img: "https://media.istockphoto.com/id/1043479218/photo/group-of-cheerful-business-people-having-fun-on-a-lunch.jpg?s=612x612&w=0&k=20&c=LfcYDMMypUxbYyeYCwA6-zB3uRITwqvFLnLZq-dCnAM=",
              cat: "BY JOHN BAUS.BURGER, FOOD",
              title: "Overcame breeding point concern has.",
              date: "14 AUG",
            },
            {
              img: "https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F4.jpg&w=1920&q=75",
              cat: "BY ISTIAK AHMED.PIZZA, FOOD",
              title: "Breeding point has terminate the hole.",
              date: "12 AUG",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="relative w-full h-[420px] sm:h-[480px] md:h-[500px] rounded-xl overflow-hidden"
            >

              <img src={b.img} className="w-full h-full object-cover" />

              
              <div className="absolute top-3 right-3 bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-3 text-center rounded-lg font-semibold">
                {b.date.replace(" ", "\n")}
              </div>

             
              <div className="absolute bottom-0 left-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white py-4 px-3 text-center">
                <p className="text-sm text-gray-700 dark:text-gray-300">{b.cat}</p>
                <p className="font-bold text-xl mt-1">{b.title}</p>
                <p className="text-orange-900 dark:text-orange-400 font-semibold mt-1">
                  READ MORE
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}