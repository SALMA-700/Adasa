export default function CardAuthor({author}) {
  return (
    <>
         <div className="bg-neutral-900 border group border-gray-800 hover:border-orange-500 rounded-2xl px-6 py-10 flex flex-col items-center gap-4 transition">
            <div className="relative">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-600 group-hover:border-orange-500 duration-200 "
              />
              <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center border-2 border-neutral-900">
                <i className="fa-solid fa-check text-white text-xs" />
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white text-lg font-bold">{author.name} </span>
              <span className="text-orange-500 text-sm">{author.role} </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-neutral-800 text-gray-500 hover:bg-sky-600 hover:text-white transition-colors flex items-center justify-center">
                <i className="fa-brands fa-linkedin-in" />
              </span>
              <span className="w-9 h-9 rounded-lg bg-neutral-800 text-gray-500 hover:bg-neutral-600 hover:text-white transition-colors flex items-center justify-center">
                <i className="fa-brands fa-github" />
              </span>
              <span className="w-9 h-9 rounded-lg bg-neutral-800 text-gray-500 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center">
                <i className="fa-brands fa-x-twitter" />
              </span>
            </div>
          </div>
    
    </>
  )
}
