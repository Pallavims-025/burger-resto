export default function TopBanner() {
  return (
    <div className="bg-violet-100 dark:bg-black min-h-[100px]">
      <div className="max-w-[1400px] mx-auto bg-white dark:bg-black rounded-[20px]">

       
        <div className="relative">
          <img
            src="https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg"
            className="w-full h-[200px] md:h-[350px] lg:h-[500px] object-cover"
            alt="Header"
          />

         
          <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>

          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 bg-black/40 dark:bg-black/70 px-6 py-4 rounded-2xl text-center">
            <h2 className="text-2xl md:text-4xl font-serif text-white">
              Restaurant Food Blogs
            </h2>
            <h3 className="text-lg md:text-2xl font-serif text-gray-200 dark:text-gray-300">
              Home -- Food -- Blogs
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}