import React from 'react'
import { Link } from 'react-router-dom'

export default function GridCard({post}) {
  return (
    <>
<Link to={`detailes/${post.id}`}>
      <div 
  className="overflow-hidden rounded-2xl bg-[#161616] border border-white/5 group transition-all h-full duration-300 hover:-translate-y-2 hover:border-orange-400"
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
    <h2 className=" text-3xl font-bold leading-snug text-white transition-colors group-hover:text-orange-400">
      {post.title}
    </h2>
    {/* Description */}
    <p className="mt-5  leading-8 text-[#9A9A9A]">
      {post.excerpt}
    </p>
    <div className="my-7 h-px bg-white/10"></div>
    {/* Footer */}
    <div dir="ltr" className="flex items-center justify-between">
      <button className="flex h-14 w-14 items-center justify-center rounded-full border border-orange-500 text-orange-500 transition duration-300  group-hover:bg-orange-500  group-hover:text-white">
        <i className="fa-solid fa-chevron-left "></i>
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
          className="h-14 w-14 rounded-full object-cover border-2 border-white/10"
        />
      </div>
    </div>
  </div>
</div>
</Link>
    </>
  )
}
