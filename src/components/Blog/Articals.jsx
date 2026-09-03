import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import blogs from "../../posts.json";
import Detailes from "./Detailes"
import GridCard from "./GridCard";
import ListCard from "./ListCard";


export default function Artiacls() {
  
      const [blog, setBlog] = useState([])
    useEffect(() => {
      setBlog(blogs.posts);
  }, []);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("جميع المقالات");
  const [view, setView] = useState("grid")
  const filteredPosts =activeCategory === "جميع المقالات"? blog: blog.filter((post) => post.category === activeCategory);
  return (
    <>
    
    <section className="hero ">
        <div className="overlay"></div>

        <div className="content  mt-40 text-center">
             <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/40 bg-[#1a1410] px-6 py-3 text-orange-500">
      <span className="font-semibold">
        مدونتنا
      </span>
      <i className="fa-regular fa-newspaper"></i>
      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
      
    </div>
    <h1 className="mt-8 text-6xl font-black leading-tight text-white">
      استكشف{" "}
      <span className="text-orange-500">
        مقالاتنا
      </span>
    </h1>
    <p className="mt-6 text-2xl text-gray-400">
      اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
    </p>
    <div className="mt-10 flex justify-center gap-3">

      <span className="indicator active"></span>
      <span className="indicator"></span>
      <span className="indicator"></span>

    </div>
        </div>
      </section>
      
    
      <div  className="min-h-screen bg-[#0a0a0a] font-[system-ui] text-white" >
        <header className="border-b border-white/5 px-6 py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8">
            <nav className="flex flex-wrap items-center gap-2">
    <ul className="flex gap-3 flex-wrap">
  <li>
    <button
      onClick={() => setActiveCategory("جميع المقالات")}
      className={`rounded-2xl px-4 py-3 transition
      ${
        activeCategory === "جميع المقالات"
          ? "bg-linear-to-r from-orange-400 text-white to-[#F85000] "
          : "bg-[#161616] text-[#4B4B4B]"
      }`}
    >
      جميع المقالات
    </button>
  </li>
  {blogs.categories.map((item) => (
    <li key={item.name}>
      <button
        onClick={() => setActiveCategory(item.name)}
        className={`rounded-2xl px-4 py-3 transition
        ${
          activeCategory === item.name
            ? " bg-linear-to-r from-orange-400 text-white to-[#F85000]"
            : "bg-[#161616] text-[#4B4B4B]"
        }`}
      >
        {item.name}
      </button>
    </li>
  ))}
</ul>
            </nav>
<div className="search  sm:w-full md:w-30 lg:w-60" >
  <div>
  <div className="relative">
    <div className="absolute inset-y-0  flex items-center ps-3 pointer-events-none">
<i className="fa-solid fa-search text-[#4B4B4B]"></i>    </div>
    <input type="search" value={search}
  onChange={(e) => setSearch(e.target.value)} dir="rtl" id="input-group-1" className="block w-full ps-9 pe-3 py-2.5 bg-[#161616] border  text-[#4B4B4B] text-sm rounded-2xl focus:border-orange-400 focus:ring-0 focus:border shadow-xs placeholder:text-[#4B4B4B]" placeholder= "ابحث فى المقالات" />
  </div>
</div>
  </div>              
            </div>
        </header>
        <main className="mx-auto  px-3 pb-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/5 px-6 py-8">
  {/* Buttons */}
  <div className="flex items-center gap-1 rounded-2xl bg-[#161616] p-1">

  <button
    onClick={() => setView("list")}
    className={`rounded-xl p-4 transition ${
      view === "list"
        ? "bg-orange-500 text-white"
        : "text-gray-500 hover:text-white"
    }`}
  >
    <i className="fa-solid fa-list"></i>
  </button>

  <button
    onClick={() => setView("grid")}
    className={`rounded-xl p-4 transition ${
      view === "grid"
        ? "bg-orange-500 text-white"
        : "text-gray-500 hover:text-white"
    }`}
  >
    <i className="fa-solid fa-grip"></i>
  </button>

</div>
  <span dir="rtl" className="text-lg flex text-gray-400">
    عرض{" "}
    <span className="font-bold text-white">
      {filteredPosts.length}
    </span>{" "}
    مقال
    {filteredPosts.length > 1 && "ات"}
    {activeCategory !== "جميع المقالات" && (
      <div  dir="rtl" className="flex">
        {" "}
        فى {" "}
        <span className="font-semibold text-orange-400">
          {activeCategory}
        </span>
      </div>
    )}
  </span>

</div>
  <div className="grid  gap-8 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3">
   

    {view === "grid" &&

  filteredPosts.map(post => (
    <GridCard key={post.id} post={post} />
  ))
}
</div>
  <div className="grid  gap-1  sm:grid-cols-1  ">

{view === "list" &&
  filteredPosts.map(post => (
    <ListCard key={post.id} post={post} />
  ))
}
 </div>   
   


  
</main>
      </div>
  </>);
}
