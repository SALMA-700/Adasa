import React from 'react'
import "../../mainsection.css"
import blogs from "../../posts.json";
import CardAuthor from './CardAuthor';

export default function Who() {
   const stats = [
    { icon: "fa-solid fa-book-open", value: "+15", label: "تصنيف" },
    { icon: "fa-solid fa-feather-pointed", value: "+50", label: "كاتب خبير" },
    { icon: "fa-solid fa-newspaper", value: "+500", label: "مقالة منشورة" },
    { icon: "fa-solid fa-users", value: "+2مليون", label: "قارئ شهرياً" },
  ];
  console.log(blogs);
  
  return (
    <>
    <section className="hero">
        <div className="overlay"></div>

        <div className="content pt-10">
           <section dir="rtl" className="w-full py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
         <div className="flex items-center gap-2 bg-orange/10 border border-orange-500/40 rounded-full px-5 py-2 mb-8">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-orange-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          </span>
          <span className="text-orange-400 font-bold tracking-tighter text-sm">من نحن</span>
          
        </div>
 
        <h2 className="text-4xl md:text-5xl tracking-tighter font-extrabold  mb-6">
          <span className="text-white tracking-tighter">مهمتنا هي </span>
          <span className="text-orange-500 tracking-tighter">الإعلام والإلهام</span>
        </h2>
 
        <p className="text-gray-400 text-lg tracking-tighter  mb-14">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية
          لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من
          خلال محتوى عالي الجودة.
        </p>
 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-neutral-900/70 border border-neutral-800 rounded-2xl px-6 py-8 flex flex-col items-center gap-3"
            >
              <i className={`${stat.icon} text-orange-500 text-2xl`} />
              <span className="text-[#FA911C] text-2xl font-extrabold">{stat.value}</span>
              <span className="text-gray-400 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
 
      </div>
    </section>
        </div>
      </section>
        <section dir="rtl" className="w-full bg-[#111111] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
 
        <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-extrabold mb-4">
          <span className="w-1 h-7 bg-gradient-to-t  from-orange-500 to-amber-400 rounded-full" />
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            قيمنا
          </span>
          <span className="w-1 h-7 bg-gradient-to-b  from-orange-500 to-amber-400 rounded-full" />
        </h2>
 
        <p className="text-gray-400 text-lg mb-14">
          المبادئ التي توجه كل ما نقوم بإنشائه
        </p>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div className="bg-neutral-900/70 hover:border-orange-400 duration-150 group hover:bg-orange/5 border border-neutral-800 rounded-2xl px-6 py-10 flex flex-col items-center gap-4">
            <i className="fa-solid fa-arrows-rotate text-orange-500 text-3xl" />
            <span className="text-white text-lg font-bold group-hover:text-orange-500 duration-200">دائماً محدث</span>
            <span className="text-gray-400 text-sm">أحدث الاتجاهات وأفضل الممارسات</span>
          </div>
 
          <div className="bg-neutral-900/70  hover:border-orange-400 duration-150 group hover:bg-orange/5 border border-neutral-800 rounded-2xl px-6 py-10 flex flex-col items-center gap-4">
            <i className="fa-solid fa-handshake text-orange-500 text-3xl" />
            <span className="text-white text-lg font-bold group-hover:text-orange-500 duration-200">المجتمع</span>
            <span className="text-gray-400 text-sm">تعلم مع آلاف المصورين</span>
          </div>
 
          <div className="bg-neutral-900/70  hover:border-orange-400 duration-150 group hover:bg-orange/5 border border-neutral-800 rounded-2xl px-6 py-10 flex flex-col items-center gap-4">
            <i className="fa-solid fa-bolt text-orange-500 text-3xl" />
            <span className="text-white text-lg font-bold group-hover:text-orange-500 duration-200">تركيز عملي</span>
            <span className="text-gray-400 text-sm">أمثلة واقعية يمكنك تطبيقها اليوم</span>
          </div>
 
          <div className="bg-neutral-900/70  hover:border-orange-400 duration-150 group hover:bg-orange/5 border border-neutral-800 rounded-2xl px-6 py-10 flex flex-col items-center gap-4">
            <i className="fa-solid fa-bullseye text-orange-500 text-3xl" />
            <span className="text-white text-lg font-bold group-hover:text-orange-500 duration-200">الجودة أولاً</span>
            <span className="text-gray-400 text-sm">محتوى مدروس ومكتوب بخبرة</span>
          </div>
 
        </div>
      </div>
    </section>
      
       <section dir="rtl" className="w-full bg-[#0A0A0A] px-6 py-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
         <div className="flex items-center gap-2 border bg-orange/10 border-orange-500/40 rounded-full px-5 py-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-orange-500" />
          <span className="text-orange-400 font-bold text-sm">فريقنا</span>
          
        </div>
 
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-4">
          تعرف على كتابنا
        </h2>

        <p className="text-gray-400 text-lg mb-14">
          فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {blogs.posts.map((post) => (
            <CardAuthor key={post.id} author={post.author} />
          ))}
          
        </div>
      </div>
    </section> 
        <section dir="rtl" className="w-full px-6 py-4  bg-gradient-to-br from-orange-700 via-orange-500 to-amber-400 font-sans">
      <div className="max-w-6xl mx-auto rounded-3xl px-8 py-16 flex flex-col items-center text-center">
 
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6">
          لديك أسئلة؟ دعنا نتحدث!
        </h2>
 
        <p className="text-white/90 text-lg leading-loose  mb-10">
          نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء
          التحية، لا تتردد في التواصل.
        </p>
 
        <div className="flex items-center gap-4">
         
          <button className="bg-black text-white font-bold rounded-xl px-8 py-4 flex items-center gap-2 hover:bg-neutral-800 transition">
            <span>تواصل معنا</span>
            <i className="fa-solid fa-envelope" />
          </button>
          <button className="border-2 border-white text-white font-bold rounded-xl px-8 py-4 hover:bg-white hover:text-black transition">
            تصفح المقالات
          </button>
 
        </div>
 
      </div>
    </section>
      
      </>

      
  )
}
