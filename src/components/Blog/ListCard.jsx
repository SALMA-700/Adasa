import React from 'react'
import { Link } from 'react-router-dom'
export default function ListCard({post}) {
    const arabicDate = new Date(post.date).toLocaleDateString("ar-EG", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
  return (
    <>
    <section className="mx-auto max-w-7xl px-6 py-2 ">
 
  <div key={post.id}>
                    <Link
                      to={`detailes/${post.id}`}
                      dir="rtl"
                      className="group duration-500  flex flex-col gap-5  bg-[#161616] pe-6 ps-0 py-0 hover:border-amber-600 hover:border  rounded-base shadow-xs   md:flex-row md:max-w-full"
                    >
                      <div className="img relative overflow-hidden rounded-s-2xl">
                       
                        <img
                          className="object-cover w-full rounded-s-base h-80 md:h-80 md:w-full mb-0 md:mb-0 transition-transform duration-500 group-hover:scale-110"
                          src={post.image}
                          alt={post.title}
                        />
                      </div>
                      <div className="flex flex-col justify-between md:p-6  leading-normal">
                        <div className="read flex gap-2 my-3">
                          <Link
                            to="/"
                            className="bg-[#60210C]   flex  items-center border border-amber-700 text-orange-500 text-sm  font-medium px-3 py-0.5 rounded-3xl"
                          >
                            <span>{post.category}</span>
                          </Link>{" "}
                          <p className="text-gray-400 text-sm"><i className='fa-solid fa-clock'></i> {post.readTime}</p>
                          <p className="text-gray-400 text-sm"><i className='fa-solid fa-calendar'></i> {arabicDate}</p>
                        </div>
                        <h5 className="mb-1 text-2xl font-bold tracking-tight text-white">
                          {post.title}
                        </h5>
                        <p className="mb-6 text-gray-400">{post.excerpt}</p>

                        <div className="card-footer flex justify-between">
                          <div dir="rtl" className="flex items-center gap-2.5">
                            <div className="img relative">
                              <span className="bottom-0 right-8.5 absolute  w-3 h-3 border bg-orange-500  rounded-full"></span>
                              <img
                                className="w-12 h-12 rounded-full border-2 border-gray-700"
                                src={post.author.avatar}
                                alt={post.author.name}
                              />
                            </div>
                            <div className="font-medium text-white">
                              <div>{post.author.name}</div>
                              <div className="text-sm font-normal text-gray-400">
                                {post.date}
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
</section>
    </>
  )
}
