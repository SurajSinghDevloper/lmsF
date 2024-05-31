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
  }
  return (
    <nav className="bg-zinc-500 dark:bg-zinc-600 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <FaBarsProgress className="w-10 h-10 text-white" />
        <a href="/" className="text-zinc-800 dark:text-zinc-200 flex gap-3">
          <span>
            <HiOutlineHome size={20} />
          </span>{" "}
          Home
        </a>
        <a href="/" className="text-zinc-800 dark:text-zinc-200 flex gap-3">
          <span>
            <GrSearch size={20} />
          </span>
          Explore
        </a>
        <a href="/" className="text-zinc-700 dark:text-zinc-200 flex gap-3">
          <span>
            <LuMessageSquare size={20} />
          </span>
          About
        </a>
        <a href="/" className="text-zinc-700 dark:text-zinc-200 flex gap-3">
          <span>
            <MdOutlineConnectWithoutContact size={20} />
          </span>
          Contact
        </a>
      </div>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
        <span>&larr;</span>
        <span>Log-OUT</span>
      </button>
    </nav>
  );
};

export default PageNavbar;
