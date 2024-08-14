import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left side with logo and Overview */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/ws82fqp/logo-1.png"
            alt="Logo"
            className="h-8"
          />
          {/* <span className="text-xl font-semibold text-indigo-600 ">
            ON<span className="text-black">Course</span>
          </span> */}
        </div>
        <a href="#" className="text-lg font-medium text-blue-600">
          Overview
        </a>
      </div>

      {/* Search bar */}
      <div className="flex-grow mx-8 ml-80">
        <div className="relative">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full p-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CiSearch />
          </div>
        </div>
      </div>

      {/* Right side with notification icon and profile */}
      <div className="flex items-center space-x-4">
        <button className="relative">
          <IoIosNotificationsOutline className="text-2xl text-blue-500" />
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGQ9o4MYsp-hFfFHep9wx33Pv2Mdo0jZmig&s"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <span className="grid grid-cols-1 font-medium text-gray-700">
              Alexa Calen
            </span>

            <small>Student</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
