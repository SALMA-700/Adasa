import React from "react";
import { NavLink , Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className=" fixed py-1 w-full z-20 top-0 start-0 border-b  bg-[#161616]">
        <div
          dir="rtl"
          className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <div className="flex   md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <span className="md:hover:border transition-all md:hover:border-[#717171] rounded-2xl mx-3 flex items-center justify-center p-3">
              <i className="fa-solid sm:hidden md:block  fa-search text-[#717171]"></i>
            </span>
            <button
              type="button"
              className="text-white hover:-translate-y-0.5 translate-0.5 transition-all bg-amber-600 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-12 rounded-4xl text-l px-8 py-0 focus:outline-none"
            >
              ابدا القراءة
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
          
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-10 w-13" alt="logo" />

            <span className="mx-3 self-center text-xl text-white mb-0 text-heading font-semibold whitespace-nowrap">
              عدسة <br />{" "}
              <span className="text-amber-500 text-2xs mt-0">
                عالم التصوير الفوتوغرافي
              </span>
            </span>
          </Link>
          <div
            className="items-center justify-between  hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-3 py-2 mt-4 border-[#3e3e3e] font-medium border-[1px]  rounded-4xl bg-[#161616] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  ">
              <li className="mx-1">
                <NavLink
                  to="/"
                  className="block py-2 px-3  text-gray-400 rounded-4xl md:bg-transparent md:hover:text-white"
                  aria-current="page"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li className="mx-1">
                <NavLink
                  to="blog"
                  className="block py-2 px-3 text-gray-400 rounded-4xl hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-white  md:dark:hover:bg-transparent"
                >
                  المدونة
                </NavLink>
              </li>
              <li className="mx-1">
                <NavLink
                  to="who"
                  className="block py-2 px-3 text-gray-400 rounded-4xl hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-white  md:dark:hover:bg-transparent"
                >
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
