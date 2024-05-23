const PageNavbar = () => {
  return (
    <nav className="bg-zinc-100 dark:bg-zinc-400 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          src="https://placehold.co/40x40"
          alt="logo"
          className="w-10 h-10"
        />
        <a href="/" className="text-zinc-800 dark:text-zinc-300">
          Explore
        </a>
        <a href="/" className="text-zinc-700 dark:text-zinc-300">
          About
        </a>
        <a href="/" className="text-zinc-700 dark:text-zinc-300">
          Contact
        </a>
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
        <span>&larr;</span>
        <span>Log-OUT</span>
      </button>
    </nav>
  );
};

export default PageNavbar;
