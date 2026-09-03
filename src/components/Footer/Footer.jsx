import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <>

     <footer className="relative overflow-hidden bg-[#0b0b0b] text-white border-t border-[#2a2a2a]">
  <div className="footer-glow" />
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">
     <div dir="rtl">
        <h3 className="footer-title ">
          ابقى على اطلاع
        </h3>
        <p className="text-gray-400 text-sm mt-8 mb-6">
          اشترك للحصول على أحدث المقالات
          والتحديثات.
        </p>
        <input type="email" placeholder="أدخل بريدك الإلكتروني" className="w-full rounded-2xl bg-[#151515] border border-[#2d2d2d] px-5 py-4 outline-none focus:border-orange-500  focus:outline-0 ring-0" />
        <button className="mt-5 w-full cursor-pointer rounded-2xl bg-orange-500 py-4 font-bold hover:bg-orange-600 duration-300">
          اشترك
        </button>
      </div> 
      <div dir="rtl">
        <h3 className="footer-title">التصنيفات </h3>
        <ul className="space-y-3 text-gray-400 mt-8">
          <li className='text-sm'><i className='fa-solid fa-arrow-left '></i>إضاءة </li>
          <li className='text-sm'> <i className='fa-solid fa-arrow-left '></i>بورتريه</li>
          <li className='text-sm'><i className='fa-solid fa-arrow-left '></i>مناظر طبيعية </li>
          <li className='text-sm'> <i className='fa-solid fa-arrow-left '></i>تقنيات</li>
        </ul>
      </div>
      <div dir="rtl">
        <h3 className="footer-title">استكشف</h3>
        <ul className="space-y-3 text-gray-400 mt-8">
          <li className='text-sm transition-all' > <i className='fa-solid fa-arrow-left '></i> الرئيسية</li>
          <li className='text-sm'><i className='fa-solid fa-arrow-left '></i>المدونة</li>
          <li className='text-sm'><i className='fa-solid fa-arrow-left '></i>  من نحن </li>
        </ul>
      </div>
      
      <div dir="rtl">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-orange-500  shadow-md shadow-amber-700 sh flex items-center justify-center text-xl font-bold">
            ع
          </div>
          <h2 className="text-3xl font-bold">
            عدسة
          </h2>
        </div>
        <p className="text-gray-400 leading-7 text-sm">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك
          معكم أسرار المحترفين ونصائح عملية لتطوير
          مهاراتكم.
        </p>
        <div className="flex gap-4 mt-8">
          <a className="icon cursor-pointer">
            <i className='fa-brands fa-x'></i></a>
          <a className="icon cursor-pointer">
            <i className='fa-brands fa-github'></i></a>
          <a className="icon cursor-pointer">
            <i className='fa-brands fa-linkedin'></i></a>
          <a className="icon cursor-pointer">
            <i className='fa-brands fa-facebook'></i></a>
        </div>
      </div>
    </div>
  </div>
  <div className="relative z-10 border-t border-[#2a2a2a]">
    <div className="max-w-7xl mx-auto px-6 py-7 flex md:flex-row flex-col justify-between gap-4">
      <div className="flex gap-10 text-gray-400">
        <span>شروط الخدمة</span>
        <span>سياسة الخصوصية</span>
        
      </div>
      <p className="text-gray-500">
        © 2026 عدسة. صنع بكل
        <span className="text-orange-500 mx-2">❤</span>
        جميع الحقوق محفوظة.
      </p>
    </div>
  </div>
</footer>

  

    </>
  )
}
