import React from 'react'
import img1 from "../../assets/photo-1472099645785-5658abf4ff4e.jpg"
import img2 from "../../assets/photo-1504257432389-52343af06ae3.jpg"
import img3 from "../../assets/photo-1500648767791-00dcc994a43e.jpg"
export default function Form() {
  return (
    <>
  

    <section className=" py-24 px-5  bg-radial-[at_50%_-110%]  bg-gradient to-60% from-2%  to-[#0a0a0a] from-orange-700">
       
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#171717] px-6 py-16 text-center shadow-xl">

        {/* Icon */}
        <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-2xl bg-orange-500">
          <i className="fa-regular fa-envelope text-3xl text-white"></i>
        </div>

        <h2
          dir="rtl"
          className="mt-8 text-5xl font-black text-white"
        >
          اشترك في{" "}
          <span className="text-orange-500 ">نشرتنا الإخبارية</span>
        </h2>

        <p
          dir="rtl"
          className="mx-auto mt-5  text-xl text-gray-400"
        >
          احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
        </p>

        <div className="mt-10 flex flex-col-reverse items-center justify-center gap-4 md:flex-row">

          <button className="h-16 rounded-2xl bg-orange-500 px-12 text-lg font-bold text-white transition hover:bg-orange-600">
            اشترك الآن
          </button>

          <input
            dir="rtl"
            type="email"
            placeholder="ادخل بريدك الإلكتروني"
            className="h-16 w-full max-w-xl rounded-2xl border border-white/10 bg-[#0e0e0e] px-6 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-5 text-gray-500 md:flex-row">

          

        <span>إلغاء الاشتراك في أي وقت</span>
          <span>بدون إزعاج</span>
       <span>
            انضم لـ <span className="font-bold text-white">10,000+</span> مصور
          </span>
 <div className="flex -space-x-3">
            <img
              src={img1}
              className="h-12 w-12 rounded-full border-2 border-[#171717]"
            />
            <img
              src={img2}
              className="h-12 w-12 rounded-full border-2 border-[#171717]"
            />
            <img
              src={img3}
              className="h-12 w-12 rounded-full border-2 border-[#171717]"
            />
          </div>
        </div>
      </div>
    </section>
 
    </>
  )
}
