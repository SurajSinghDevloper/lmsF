import React from 'react'
import schoolIcon from '../assets/school-building.jpg'

function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-zinc-900 text-white dark:text-white py-6">
    <div className="container mx-auto text-center">
      <div className="mb-4">
        <img src={schoolIcon} alt="University Logo" className="mx-auto mb-2 w-16 h-16"/>
        <h1 className="text-2xl font-semibold">Saint Xavier University</h1>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="text-white dark:text-white">
          <img src="https://placehold.co/24x24" alt="Facebook" className="inline-block"/>
        </a>
        <a href="#" className="text-white dark:text-white">
          <img src="https://placehold.co/24x24" alt="Twitter" className="inline-block"/>
        </a>
        <a href="#" className="text-white dark:text-white">
          <img src="https://placehold.co/24x24" alt="Instagram" className="inline-block"/>
        </a>
      </div>
      <div className="text-sm">
        <p>3700 W. 103rd Street, Chicago, IL 60655 | 844-468-6798 (844-GOTO-SXU) | <a href="#" className="underline">Contact Us</a> | <a href="#" className="underline">Campus Maps</a> | <a href="#" className="underline">Emergency Info</a></p>
      </div>
    </div>
  </footer>
  )
}

export default Footer