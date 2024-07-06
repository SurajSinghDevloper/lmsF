import React from "react";
import { LuMenuSquare } from "react-icons/lu";
import { IoBook } from "react-icons/io5";
import { FaRegAddressBook } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";


function HomeFeature() {
  return (
    <div className="text-center py-8">
      <h2 className="text-xl font-bold text-teal-800 mb-4">FEATURED LINKS</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full shadow-md p-4">
            <LuMenuSquare className="w-12 h-12" />
          </div>
          <p className="mt-2 text-sm text-red-700">Majors and Programs</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full shadow-md p-4">
            <IoBook className="w-12 h-12" />{" "}
          </div>
          <p className="mt-2 text-sm text-red-700">Academic Catalog</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full shadow-md p-4">
            <FaRegAddressBook className="w-12 h-12" />
          </div>
          <p className="mt-2 text-sm text-red-700">
            Faculty and Staff Directory
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full shadow-md p-4">
            <FaCalendarAlt className="w-12 h-12" />
          </div>
          <p className="mt-2 text-sm text-red-700">Calendar of Events</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full shadow-md p-4">
            <FaMapMarked className="w-12 h-12" />
          </div>
          <p className="mt-2 text-sm text-red-700">Campus Maps</p>
        </div>
        <div className="flex flex-col items-center">

          <Link to={"/authentication"} className="mt-2 text-sm text-red-700">
            <span>
              <div className="bg-white rounded-full shadow-md p-4">
                <IoMdExit className="w-12 h-12" />
              </div>
            </span>
            My  Portal
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeFeature;
