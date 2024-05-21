import React from 'react'

function NavBar() {
  return (
    <div>
        <div class="bg-black text-white flex justify-between items-center p-2">
    <div class="flex space-x-4">
      <a href="/" class="hover:text-zinc-400">
        REQUEST INFO
      </a>
      <span>|</span>
      <a href="/" class="hover:text-zinc-400">
        VISIT
      </a>
      <span>|</span>
      <a href="/" class="hover:text-zinc-400">
        APPLY
      </a>
      <span>|</span>
      <a href="/" class="hover:text-zinc-400">
        GIVE
      </a>
    </div>
    <div class="flex space-x-4 items-center">
      <a href="/" class="hover:text-zinc-400">
        <img aria-hidden="true" alt="search" src="https://placehold.co/20x20" />
      </a>
      <a href="/" class="hover:text-zinc-400">
        FIND INFO FOR
      </a>
      <span>|</span>
      <a href="/" class="hover:text-zinc-400">
        QUICK LINKS
      </a>
    </div>
  </div>
  </div>
  )
}

export default NavBar