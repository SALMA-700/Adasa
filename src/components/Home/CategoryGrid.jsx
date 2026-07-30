import { useEffect ,useState } from "react";

import { Link } from "react-router-dom";
import blogs from  "../../posts.json"

export default function CategoryGrid() {
      const [blog, setBlog] = useState([])
    useEffect(() => {

    
      setBlog(blogs.categories);
    
  }, []);
  
let icons= [ "fa-gear","fa-user","fa-mountain-sun","fa-sliders", "fa-gear" ]
  return (
    <div
      dir="rtl"
      className=" w-full bg-[#111111] px-6 py-20"
    >
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold text-orange-400">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500/40" />
      <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            
          </span><span>التصنيفات</span>
          
        </div>

        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
          استكشف حسب الموضوع
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-gray-400">
          اعثر على محتوى مصمم حسب اهتماماتك
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {blog.map((cat, i) => (
            <div
              key={i}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[##0A0A0A] p-6 pt-5 text-right transition-all duration-400 hover:border-transparent  hover:-translate-y-1.5 hover:bg-gradient-to-br hover:from-orange-600 hover:to-amber-500 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="flex h-12 w-12 items-center  justify-center group-hover:bg-white/20 rounded-xl bg-orange-500/10  group-hover:from-orange-600 group-hover:to-orange-500 group-hover:text-white transition-colors duration-300  text-orange-600  ">
                  <i className={`fa-solid ${icons[i]}  text-lg`} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400 transition-colors duration-300 group-hover:text-white/80">
                    {cat.count} مقالة
                  </p>
                </div>
              </div>

              <div className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 scale-75 items-center justify-center rounded-full bg-white/20 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <i className="fa-solid fa-chevron-left text-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
