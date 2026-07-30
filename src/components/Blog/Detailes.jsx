import React, { useEffect, useState } from "react";
import blogs from "../../posts.json";
import { Link } from "react-router-dom";
export default function Detailes({post:{image , title ,date ,category , readTime , content ,author , tags ,excerpt}}) {
  

  return (
    <>
    <div dir="rtl" className="min-h-screen bg-[#0b0b0d]  text-gray-200">
      <div className="relative h-[420px] w-full overflow-hidden sm:h-[480px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

        <div className="absolute top-6 left-4 flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs text-gray-300 backdrop-blur sm:left-6">
         <Link to="home"> <i className="fa-solid fa-house" /></Link>
          <i className="fa-solid fa-chevron-left text-[10px] opacity-60" />
          <Link to="blog">المدونة</Link>
          <i className="fa-solid fa-chevron-left text-[10px] opacity-60" />
          <span className="font-semibold text-orange-400">{category}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-8 sm:px-6">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-300">
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
              <i className="fa-regular fa-calendar text-orange-400" />
            {date}
              </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur">
              <i className="fa-regular fa-clock text-orange-400" />
              {readTime}
            </span>
            <span className="rounded-full bg-orange-500 px-3 py-1.5 font-semibold text-white">
              {category}
            </span>
          </div>

          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
         {title}
          </h1>

          <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/5 p-3 backdrop-blur w-fit">
            <img
              src={author.avatar}
              alt={author.name}
              className="h-11 w-11 rounded-full object-cover ring-2 ring-orange-500/50"
            />
            <div className="text-right leading-tight">
              <p className="text-sm font-bold text-white">{author.name}</p>
              <p className="text-xs text-gray-400">{author.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================== المحتوى ============================== */}
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          {/* ---------- العمود الرئيسي ---------- */}
          <article className="min-w-0 space-y-10">
            <blockquote className="rounded-2xl border border-orange-500/40 bg-orange-500/5 px-6 py-5 text-lg font-semibold text-orange-300">
              {excerpt}  </blockquote>

            <p className="text-[15px] leading-8 text-gray-300">
           {content.join("\n")}  </p>
            <div  title="">
              <p>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-orange-500 text-white">
                <i className="fa-solid fa-tag text-sm" />
              </span>
              <span className="ml-2 text-sm font-semibold text-gray-400">الوسوم</span>
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-sm font-semibold text-gray-300">شارك المقال</span>
              <div className="flex items-center gap-3">
                <button className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-orange-500 hover:text-white">
                  <i className="fa-solid fa-link" />
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-orange-500 hover:text-white">
                  <i className="fa-brands fa-whatsapp" />
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-orange-500 hover:text-white">
                  <i className="fa-brands fa-linkedin-in" />
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-gray-300 transition hover:bg-orange-500 hover:text-white">
                  <i className="fa-brands fa-x-twitter" />
                </button>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <img
                src={author.avatar}
                alt={author.name}
                className="h-16 w-16 flex-none rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold text-orange-400">كاتب المقال</p>
                <p className="mt-1 font-bold text-white">
                   {author.name} <span className="font-normal text-gray-400">— {author.role}</span>
                </p>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                  الفوتوغرافي.
                </p>
              </div>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:h-fit space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-white">محتويات المقال</h3>
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-orange-500 text-white">
                  <i className="fa-solid fa-list" />
                </span>
              </div>
              <nav className="space-y-1">
                {content.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <span className="grid h-6 w-6 flex-none place-items-center rounded-md bg-white/10 text-xs text-gray-300">
                      {item.n}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <div className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-lg bg-orange-500 text-white">
                  <i className="fa-regular fa-calendar" />
                </div>
                <p className="text-sm font-bold text-white"> {date}</p>
                <p className="text-[11px] text-gray-500">تاريخ النشر</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <div className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-lg bg-orange-500 text-white">
                  <i className="fa-regular fa-clock" />
                </div>
                <p className="text-sm font-bold text-white"> {readTime}</p>
                <p className="text-[11px] text-gray-500">وقت القراءة</p>
              </div>
            </div>

            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-b from-orange-500/10 to-transparent p-5 text-center">
              <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-xl bg-orange-500 text-white">
                <i className="fa-solid fa-envelope" />
              </div>
              <p className="font-bold text-white">لا تفوّت جديدنا</p>
              <p className="mt-1 text-sm text-gray-400">
                اشترك للحصول على أحدث المقالات
              </p>
              <button className="mt-4 w-full rounded-full bg-orange-500 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
                تصفح المزيد
              </button>
            </div>
          </aside>
        </div>

        <section className="mt-16 border-t border-white/10 pt-10">
          <div className="mb-6 flex items-center justify-between">
            <Link
          
              to="blog"
              className="flex items-center gap-2 text-sm text-orange-400 transition hover:text-orange-300"
            >
              عرض الكل
              <i className="fa-solid fa-arrow-left text-xs" />
            </Link>
            <div className="flex items-center gap-2 text-right">
              <div>
                <h3 className="font-bold text-white">مقالات قد تعجبك</h3>
                <p className="text-xs text-gray-500">استكشف المزيد من المحتوى المميز</p>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500 text-white">
                <i className="fa-regular fa-images" />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((post) => (
              post.id<=4&&<article
                key={post.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-orange-500/40"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                    بورتريه
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="mb-3 font-bold leading-snug text-white">
                    {post.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.time}</span>
                    <span className="flex items-center gap-2">
                      {post.author}
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

    </div></>
  );
}
