import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function AuthForm() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-gradient-to-b from-red-700 to-red-900 text-white p-8 md:w-1/3">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <img
              src="https://placehold.co/24x24"
              alt="search"
              undefinedhidden="true"
            />
            <p>
              Discover, compare, shortlist your preferred schools, and much
              more.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src="https://placehold.co/24x24"
              alt="form"
              undefinedhidden="true"
            />
            <p>Apply to multiple schools using a common application form.</p>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src="https://placehold.co/24x24"
              alt="calendar"
              undefinedhidden="true"
            />
            <p>
              Stay up to date with admissions, fees structures, facilities and
              much more.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <img
              src="https://placehold.co/24x24"
              alt="counseling"
              undefinedhidden="true"
            />
            <p>
              Lakhs of parents trust us for our industry-leading free counseling
              services.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-8 md:w-2/3">
        <div className="flex justify-end w-full">
          <button className="text-blue-500 border-b-2 border-blue-500 mr-4">
            Sign up
          </button>
          <button className="text-zinc-500">Log in</button>
        </div>
        <h2 className="text-2xl font-bold mt-8">Sign Up to Continue</h2>
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="+91"
            className="border p-2 rounded-l-lg"
          />
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="border p-2 rounded-r-lg flex-grow"
          />
        </div>
        <button className="bg-zinc-800 text-white py-2 px-4 rounded-lg mt-4">
          Sign Up
        </button>
        <div className="flex items-center mt-4">
          <hr className="flex-grow border-t border-zinc-300" />
          <span className="px-2 text-zinc-500">OR</span>
          <hr className="flex-grow border-t border-zinc-300" />
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="bg-white p-2 rounded-full shadow">
            <FaWhatsapp className="h-12 w-12" />
          </button>
          <button className="bg-white p-2 rounded-full shadow">
            <FaGoogle className="h-12 w-12" />
          </button>
          <button className="bg-white p-2 rounded-full shadow">
            <MdOutlineMarkEmailRead className="h-12 w-12" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
