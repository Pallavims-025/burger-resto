export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12 px-8 md:px-20 rounded-b-[20px] border-t border-gray-700 dark:border-gray-800">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 dark:border-gray-800 pb-10">

        <div>
          <h2 className="text-white dark:text-white font-semibold text-lg mb-4">About Us</h2>
          <p className="text-sm">
            Enjoy the best food experience with us. Great ambience and great taste.
          </p>
        </div>

        <div>
          <h2 className="text-white dark:text-white font-semibold text-lg mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li>Company Profile</li>
            <li>About</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white dark:text-white font-semibold text-lg mb-4">Contact Info</h2>
          <ul className="space-y-2 text-sm">
            <li>123 5th Street, Office 375</li>
            <li>Berlin, D2 21562</li>
            <li>+123 456 97826</li>
            <li>food@menu.com</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white dark:text-white font-semibold text-lg mb-4">Newsletter</h2>
          <p className="text-sm mb-3">Get the latest updates and offers.</p>

          <button className="bg-yellow-600 hover:bg-green-600 text-black dark:text-white dark:bg-yellow-700 dark:hover:bg-green-700 py-2 px-5 rounded-md font-bold transition">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center text-white dark:text-gray-300 mt-8 text-sm">
        © 2025 Menu Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
}