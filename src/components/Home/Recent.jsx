import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../posts.json";
import { useState } from "react";
import { useEffect } from "react";

export default function Recent() {
    
      const [blog, setBlog] = useState([])
    useEffect(() => {
      setBlog(blogs.posts);
  }, []);
//   onClick={()=>{<Detailes post={post}/>}} key={post.id}
  return (
    <>
      <div className="selected-articl  bg-[#0A0A0A]">
        <div className="container my-10 py-12 ">
          <div className="header text-white flex justify-between items-center">
            <Link to="blog" className="btn text-orange-500 p-3 group  duration-500 rounded-2xl">
              <i className="fa-solid fa-arrow-left group-hover:-translate-x-1.5 duration-500 "></i>{" "}
        عرض جميع المقالات
            </Link>
            <div dir="rtl" className="head ">
              <Link
                to="#"
                className="bg-[#60210C]   flex w-25 items-center border border-amber-700 text-orange-500 text-sm  font-medium px-1 py-0.5 rounded-3xl"
              >
                <span className="inline-block mx-1 w-2 h-2 bg-warning rounded-full"></span>

                <span className="w-2 mx-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span>الأحدث</span>
              </Link>
              <h2 className="text-6xl font-bold my-5">أحدث المقالات</h2>
              <p className="text-gray-400 text-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
          </div>
          <div className="grid  my-8  gap-8 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3">
              {blog.map((post) => (
                post.id<=3&&<Link to="detailes">
                <div 
            className="overflow-hidden h-full  rounded-2xl bg-[#161616] border border-white/5 group transition-all duration-300 hover:-translate-y-2 hover:border-orange-400"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-5 right-5 rounded-full bg-[#242424] px-5 py-2 text-sm font-medium text-white">
                {post.category}
              </span>
            </div>
            <div dir="rtl" className="p-7">
              <div className="mb-5 flex items-center   gap-3 text-sm text-[#8B8B8B]">
          <i className="fa-regular fa-clock"></i>
                <span>{post.readTime}</span>
                <span>{post.date}</span>
                
              </div>
              {/* Title */}
              <h2 className=" text-xl font-bold leading-snug text-white transition-colors group-hover:text-orange-400">
                {post.title}
              </h2>
              {/* Description */}
              <p className="mt-5  leading-4 text-[#9A9A9A]">
                {post.excerpt}
              </p>
              <div className="my-7 h-px bg-white/10"></div>
              {/* Footer */}
              <div dir="ltr" className="flex items-center justify-between">
                <button className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-500 text-orange-500 transition duration-300  group-hover:bg-orange-500  group-hover:text-white">
                  <i className="fa-solid fa-chevron-left  text-xs"></i>
                </button>
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <h4 className="font-bold text-white">
                      {post.author.name}
                    </h4>
                    <p className="text-sm text-[#8B8B8B]">
                      {post.author.role}
                    </p>
                  </div>
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
          </Link>
          ))}
            </div>
        </div>
      </div>
    </>
  );
}
