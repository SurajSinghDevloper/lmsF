import React from 'react';

function NavTwo() {
  return (
    <nav className="bg-zinc-700 text-white p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="https://placehold.co/50x50" alt="School Logo" className="h-10 w-10 mr-3" />
          <div>
            <h1 className="text-xl font-bold">SaintXavier</h1>
            <p className="text-sm">UNIVERSITY</p>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
          <li className="mb-2 md:mb-0">
            <a href="/addmission" className="hover:text-zinc-400">
              Admission
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a href="/" className="hover:text-zinc-400">
              Academics
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a href="/" className="hover:text-zinc-400">
              Tuition & Aid
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a href="/" className="hover:text-zinc-400">
              Student Life
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a href="/" className="hover:text-zinc-400">
              Student Success
            </a>
          </li>
          <li className="mb-2 md:mb-0">
            <a href="/" className="hover:text-zinc-400">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTwo;
