import React from "react";
import "../../mainsection.css";
import "./Home.css";
// import bg1 from "../../assets/card1.jpg"
// import { Link } from "react-router-dom";
// import blogs from  "../../posts.json"
// import { useEffect, useState } from "react";
import Selected from "./Selected";
import CategoryGrid from "./CategoryGrid";
import Form from "./Form";
import Recent from "./Recent";

export default function Home() {

  return (
    <>
      <section className="hero ">
        <div className="overlay"></div>

        <div className="content mt-40">
          <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-16">
                <div className="inline-flex items-center gap-3  my-5 rounded-full border border-orange-500/40 bg-[#1a1410] px-6 py-3 text-orange-500">
      <span className="font-semibold">
        مرحباً بك في عدسة
      </span>
      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
      <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
      
    </div>
              <h1 className="mb-6 text-7xl font-bold tracking-tighter text-white md:text-6xl lg:text-8xl">
                اكتشف<span className="text-orange-400"> فن <br />
                </span>
                التصوير الفوتوغرافي
              </h1>
              <p className="mb-8  font-normal text-[#A1A1A1] md:text-2xl">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br />
                التصوير.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 md:space-x-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center text-white border-2 border-[#ffffff0d] hover:bg-[#3b2311] hover:border-orange-500 transition-all hover:text-orange-500  shadow-xs font-medium rounded-4xl text-base px-5 py-3 "
                >
                  اعرف المزيد
                  <i className="fa-solid fa-info-circle ms-3"></i>
                </button>
                <button
                  type="button"
                  className="text-white group main-btn bg-orange-500 relative hover:-translate-y-0.5 transition-all duration-500  rounded-4xl text-base px-6 py-5 "
                >
                  <i className="fa-solid fa-arrow-left group-hover:-translate-x-1   transition-all" />
                  استكشف المقالات
                </button>
              </div>
              <div className="card-box  flex flex-wrap justify-center gap-4 max-w-screen-2xl mx-auto px-35   mt-10">
                <div className="card w-[48%] sm:w-full md:w-[18%] bg-[#141414] rounded-3xl py-6 px-15 opacity-80 hover:scale-105 transition-all">
                  <i className=" text-orange-500 text-2xl fa-solid fa-pen-nib"></i>
                  <h3 className="text-orange-400 text-2xl ">6</h3>
                  <p className="text-[#A1A1A1]">كاتب</p>
                </div>
                <div className="card w-[48%] sm:w-full md:w-[18%] bg-[#141414] rounded-3xl py-6 px-15 opacity-80 hover:scale-105 transition-all">
                  <i className=" text-orange-500 fa-solid text-2xl fa-folder-open"></i>
                  <h3 className="text-orange-400 text-2xl">4</h3>
                  <p className="text-[#A1A1A1]">تصنيفات</p>
                </div>
                <div className="card w-[48%] sm:w-full md:w-[18%] bg-[#141414] rounded-3xl py-6 px-10 opacity-80 hover:scale-105 transition-all">
                  <i className=" text-orange-500 text-2xl fa-solid fa-users"></i>
                  <h3
                    dir="rtl"
                    className="text-orange-400 text-2xl flex items-center justify-center gap-1"
                  >
                    <span>+10</span>
                    <span>الف</span>
                  </h3>
                  <p className="text-[#A1A1A1]">قارئ</p>
                </div>
                <div className="card w-[48%] sm:w-full md:w-[18%] bg-[#141414] rounded-3xl py-6 px-15 opacity-80 hover:scale-105 transition-all">
                  <i className=" text-orange-500 text-2xl fa-solid fa-newspaper"></i>
                  <h3 className="text-orange-400 text-2xl">50+</h3>
                  <p className="text-[#A1A1A1]">مقالة</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Selected/>
      <CategoryGrid/>
       <Recent/>
      <Form/>
    </>
  );
}
