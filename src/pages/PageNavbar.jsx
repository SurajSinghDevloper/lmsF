import React from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { GrSearch } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logoutAction } from "../Redux/Actions/LoginAction";

const PageNavbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <nav className="bg-zinc-300 dark:bg-[rgb(113 113 122 / 52%)] p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4 md:space-x-8">
        <FaBarsProgress className="w-10 h-10 text-white" />
        <a href="/" className="text-zinc-800 dark:text-zinc-200 flex items-center gap-3">
          <HiOutlineHome size={20} />
          <span className="hidden md:inline-block">Home</span>
        </a>
        <a href="/" className="text-zinc-800 dark:text-zinc-200 flex items-center gap-3">
          <GrSearch size={20} />
          <span className="hidden md:inline-block">Explore</span>
        </a>
        <a href="/" className="text-zinc-700 dark:text-zinc-200 flex items-center gap-3">
          <LuMessageSquare size={20} />
          <span className="hidden md:inline-block">About</span>
        </a>
        <a href="/" className="text-zinc-700 dark:text-zinc-200 flex items-center gap-3">
          <MdOutlineConnectWithoutContact size={20} />
          <span className="hidden md:inline-block">Contact</span>
        </a>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2"
      >
        <span>&larr;</span>
        <span>Log Out</span>
      </button>
    </nav>
  );
};

export default PageNavbar;
