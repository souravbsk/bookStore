import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import  Lottie from "lottie-react";
import bookLogo from "../../assets/booklogo.json";

const Header = () => {
  const [isActive, setActive] = useState(true);
  return (
    <div className=" bg-gray-200 shadow-xl sticky top-0 z-10 md:px-28 px-8 mx-auto py-3">
      <nav className=" relative md:flex-row gap-4 flex flex-col md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-slate-700 text-2xl flex items-center">
            <Lottie className="w-16 h-16" animationData={bookLogo} loop={true}></Lottie>
            B<span className="animate-pulse">o</span>okStore</h3>
          <button
            onClick={() => setActive(!isActive)}
            className="md:hidden cursor-pointer flex justify-end"
          >
            {isActive ? (
              <Bars3Icon className="w-8 h-8"></Bars3Icon>
            ) : (
              <XMarkIcon className="w-8 h-8"></XMarkIcon>
            )}
          </button>
        </div>

        <ul
          className={`flex py-4 justify-end w-full md:flex-row flex-col duration-300 z-20 absolute md:static md:items-center gap-4 ${
            isActive ? "-top-56" : "top-14 bg-slate-200 shadow-xl md:shadow-none"
          }`}
        >
          <li>
            <Link
              className="text-slate-700 font-medium text-base px-3 py-2"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-700 font-medium text-base px-3 py-2"
              to="/books"
            >
              Book
            </Link>
          </li>
          <li>
            <Link
              className="text-slate-700 font-medium text-base px-3 py-2"
              to="about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
