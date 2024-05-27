import React from "react";

function NavBar() {
  return (
    <div>
      <div className="bg-black text-white flex justify-between items-center p-2">
        <div className="flex space-x-4">
          <a href="/" className="hover:text-zinc-400">
            REQUEST INFO
          </a>
          <span>|</span>
          <a href="/" className="hover:text-zinc-400">
            VISIT
          </a>
          <span>|</span>
          <a href="/" className="hover:text-zinc-400">
            APPLY
          </a>
          <span>|</span>
          <a href="/" className="hover:text-zinc-400">
            GIVE
          </a>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="/" className="hover:text-zinc-400">
            <img
              aria-hidden="true"
              alt="search"
              src="https://placehold.co/20x20"
            />
          </a>
          <a href="/" className="hover:text-zinc-400">
            FIND INFO FOR
          </a>
          <span>|</span>
          <a href="/" className="hover:text-zinc-400">
            QUICK LINKS
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
