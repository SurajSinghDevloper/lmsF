import React from 'react'

function NavTwo() {
  return (
    <nav className="bg-zinc-900 text-white p-4">
<div className="container mx-auto flex items-center justify-between">
  <div className="flex items-center">
    <img src="https://placehold.co/50x50" alt="School Logo" className="h-10 w-10 mr-3" />
    <div>
      <h1 className="text-xl font-bold">SaintXavier</h1>
      <p className="text-sm">UNIVERSITY</p>
    </div>
  </div>
  <ul className="flex space-x-6">
    <li>
      <a href="/" className="hover:text-zinc-400">
        Admission
      </a>
    </li>
    <li>
      <a href="/" className="hover:text-zinc-400">
        Academics
      </a>
    </li>
    <li>
      <a href="/" className="hover:text-zinc-400">
        Tuition & Aid
      </a>
    </li>
    <li>
      <a href="/" className="hover:text-zinc-400">
        Student Life
      </a>
    </li>
    <li>
      <a href="/" className="hover:text-zinc-400">
        Student Success
      </a>
    </li>
    <li>
      <a href="/" className="hover:text-zinc-400">
        Athletics
      </a>
    </li>
    <li>
      <a href="/" className="hover:text-zinc-400">
        About
      </a>
    </li>
  </ul>
</div>
</nav>
  )
}

export default NavTwo