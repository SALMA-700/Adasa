import React from "react";
// import bg1 from "../../assets/card1.jpg"
import { Link } from "react-router-dom";
import blogs from "../../posts.json";
import { useEffect, useState } from "react";
export default function Selected() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    setBlog(blogs.posts);
  }, []);
  return (
    <>
      <div className="selected-articl  bg-[#0A0A0A]">
        <div className="container my-10 py-12 ">
          <div className="header text-white flex justify-between items-center">
            <button className="btn bg-orange-500 p-3 group hover:-translate-y-1.5 duration-500 rounded-2xl">
              <i className="fa-solid fa-angle-left group-hover:-translate-x-1.5 duration-500 "></i>{" "}
              عرض الكل
            </button>
            <div dir="rtl" className="head ">
              <Link
                to="#"
                className="bg-[#60210C]   flex w-25 items-center border border-amber-700 text-orange-500 text-sm  font-medium px-1 py-0.5 rounded-3xl"
              >
                <span className="inline-block mx-1 w-2 h-2 bg-warning rounded-full"></span>

                <span className="w-2 mx-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span>مميز</span>
              </Link>
              <h2 className="text-6xl font-bold my-5">مقالات مختارة</h2>
              <p className="text-gray-400 text-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
          </div>
          <div className="cards">
            {blog.map(
              ({
                id,
                image,
                title,
                excerpt,
                date,
                category,
                readTime,
                author,
              }) =>
                id <= 3 && (
                  <div key={id}>
                    <Link
                      to="/"
                      dir="rtl"
                      className="group duration-500  flex flex-col gap-5  bg-[#161616] pe-6 ps-0 py-0 hover:border-amber-600 hover:border  rounded-base shadow-xs my-7  md:flex-row md:max-w-full"
                    >
                      <div className="img relative overflow-hidden rounded-s-2xl">
                        <span className="bg-linear-to-r z-10 from-amber-600 to-amber-400 text-sm font-medium text-white text-center p-0.5  ring-inset  rounded-2xl px-2 absolute -translate-y-1/2 translate-x-1/2 left-auto top-6 right-10">
                          {" "}
                          <i className="fa-solid fa-star text-2xs"></i>مميز{" "}
                        </span>
                        <img
                          className="object-cover w-full rounded-s-base h-80 md:h-80 md:w-full mb-0 md:mb-0 transition-transform duration-500 group-hover:scale-110"
                          src={image}
                          alt={title}
                        />
                      </div>
                      <div className="flex flex-col justify-between md:p-6  leading-normal">
                        <div className="read flex gap-2 my-3">
                          <Link
                            to="/"
                            className="bg-[#60210C]   flex  items-center border border-amber-700 text-orange-500 text-sm  font-medium px-1 py-0.5 rounded-3xl"
                          >
                            <span>{category}</span>
                          </Link>{" "}
                          <p className="text-gray-400 text-sm">{readTime}</p>
                        </div>
                        <h5 className="mb-1 text-2xl font-bold tracking-tight text-white">
                          {title}
                        </h5>
                        <p className="mb-6 text-gray-400">{excerpt}</p>

                        <div className="card-footer flex justify-between">
                          <div dir="rtl" className="flex items-center gap-2.5">
                            <div className="img relative">
                              <span className="bottom-0 right-8.5 absolute  w-3 h-3 border bg-orange-500  rounded-full"></span>
                              <img
                                className="w-12 h-12 rounded-full border-2 border-gray-700"
                                src={author.avatar}
                                alt={author.name}
                              />
                            </div>
                            <div className="font-medium text-white">
                              <div>{author.name}</div>
                              <div className="text-sm font-normal text-gray-400">
                                {date}
                              </div>
                            </div>
                          </div>

                          <div>
                            <Link
                              to="#"
                              className="inline-flex items-center w-auto text-orange-400 group   focus:ring-4 shadow-xs font-medium leading-5 text-sm px-4 py-2.5 focus:outline-none"
                            >
                              <span className="group-hover:translate-x-2 duration-500">
                                {" "}
                                اقرا المقال{" "}
                              </span>
                              <i className="fa-solid fa-arrow-left  mx-2"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
