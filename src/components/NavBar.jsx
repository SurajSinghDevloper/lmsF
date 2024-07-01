import React from "react";

function NavBar() {
  return (
    <div>
      <div className="bg-black text-white p-2">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="flex justify-center md:justify-start space-x-2 md:space-x-4">
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
          <div className="flex justify-center md:justify-end space-x-2 md:space-x-4 items-center">
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
    </div>
  );
}

export default NavBar;
