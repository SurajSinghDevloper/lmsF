import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiChevronDoubleRight } from "react-icons/hi2";
import auth from "../assets/Downpic.png";
import schoolImg from "../assets/schoolImgAuth.png";
import { PiSignInBold } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function AuthForm() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-gradient-to-b from-red-700 to-red-900 text-white p-8 md:w-1/4">
        <div className="flex justify-center mb-10">
          <img src={auth} alt="icon" className="h-40 w-40" />
        </div>
        <div className="space-y-8">
          <div className="flex flex-col-1 space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 text-l">
              Discover, compare, shortlist your preferred schools, and much
              more.
            </p>
          </div>
          <div className="flex flex-col-1 space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 text-l">
              Apply to multiple schools using a common application form.
            </p>
          </div>
          <div className="flex flex-col-1 space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 text-l">
              Stay up to date with admissions, fees structures, facilities and
              much more.
            </p>
          </div>
          <div className="flex flex-col-1 space-x-2">
            <HiChevronDoubleRight className="h-9 w-12" />
            <p className="font-semibold mt-1 text-l">
              Lakhs of parents trust us for our industry-leading free counseling
              services.
            </p>
          </div>
        </div>
        <div className="mt-2">
          <img src={schoolImg} alt="schollImg" />
          <div className="text-center mt-2">
            <p className="text-xl font-semibold text-white">
              Saint Xavier University
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  md:w-3/4">
        <div className="flex justify-end w-full mr-10 p-2">
          <button className="text-blue-600 border-2 border-black rounded-lg  p-2  mr-4 flex justify-center text-xl">
            <span>
              <AiOutlineUserAdd className="h-8 w-8" />
            </span>
            Sign up
          </button>
          <button className="text-green-800 border-2 border-black rounded-lg p-2  mr-4 flex justify-center text-xl">
            <span>
              <PiSignInBold className="h-8 w-8" />
            </span>
            Log in
          </button>
          <Link
            to={"/"}
            className="text-zinc-500 border-2 border-black rounded-lg p-2  mr-4 flex justify-center text-xl"
          >
            <span>
              <IoHomeOutline className="h-8 w-8" />
            </span>
            Home
          </Link>
        </div>
        <h2 className="text-3xl font-bold">Register to Continue</h2>
        <hr className="w-3/12" />
        <div className="w-2/3 mt-10 ">
          <div className="flex mt-4 space-x-4">
            <input
              type="text"
              placeholder="Your first name"
              className="border p-2 rounded-l-lg w-1/2"
            />
            <input
              type="text"
              placeholder="Your last name"
              className="border p-2 rounded-l-lg w-1/2"
            />
          </div>
          <div className="flex mt-4 space-x-4">
            <input
              type="email"
              placeholder="Your email"
              className="border p-2 rounded-l-lg w-1/2"
            />
            <input
              type="mobile"
              placeholder="Your mobile"
              className="border p-2 rounded-l-lg w-1/2"
            />
          </div>
          <div className="flex mt-4 space-x-4">
            <input
              type="date"
              placeholder="Your dob"
              className="border p-2 rounded-l-lg w-1/2"
            />
            <input
              type="password"
              placeholder="Your mobile"
              className="border p-2 rounded-l-lg w-1/2"
            />
          </div>
          <div className="flex mt-4 justify-center">
            <input
              type="text"
              placeholder="Your address"
              className="border p-2 rounded-l-lg w-4/5"
            />
          </div>
        </div>

        <button className="bg-zinc-800 text-white py-2 px-4 rounded-lg mt-10">
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
