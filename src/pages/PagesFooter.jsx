import React from "react";

const PagesFooter = () => {
  return (
    <footer className="bg-white rounded-lg p-4 shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <span className="text-sm text-gray-500 text-center md:text-left dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-center md:justify-end items-center mt-3 md:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">
          <li className="mr-4">
            <a href="/" className="hover:underline">
              About
            </a>
          </li>
          <li className="mr-4">
            <a href="/" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li className="mr-4">
            <a href="/" className="hover:underline">
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default PagesFooter;
