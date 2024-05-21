import React from "react";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";

function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-zinc-900 text-white dark:text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4 flex flex-row  space-x-5">
          <LuSchool className="h-16 w-16" />
          <div className="mt-6">
            <h1 className="text-2xl font-semibold">Saint Xavier University</h1>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-white dark:text-white">
            <FiFacebook className="h-12 w-12" />
          </a>
          <a href="#" className="text-white dark:text-white">
            <CiTwitter className="h-12 w-12" />
          </a>
          <a href="#" className="text-white dark:text-white">
            <FaInstagram className="h-12 w-12" />
          </a>
        </div>
        <div className="text-sm">
          <p>
            3700 W. 103rd Street, Chicago, IL 60655 | 844-468-6798
            (844-GOTO-SXU) |{" "}
            <a href="#" className="underline">
              Contact Us
            </a>{" "}
            |{" "}
            <a href="#" className="underline">
              Campus Maps
            </a>{" "}
            |{" "}
            <a href="#" className="underline">
              Emergency Info
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
