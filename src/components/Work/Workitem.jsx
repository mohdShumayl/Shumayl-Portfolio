import Image from "next/image"
import Link from "next/link"
import { FiArrowDownRight } from "react-icons/fi"
import { Badge } from '../ui/badge'
import { useState } from "react"

const Workitem = ({ href, categoty, img, title, desc, techStack }) => {
  const [isHovered, setIsHovered] = useState(false)
  const techArray = techStack ? techStack.split('|').map(t => t.trim()) : []

  return (
    <div 
      className="group relative flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card */}
      <Link href={href} className="group block relative">
        <div className="w-full h-[300px] rounded-[30px] overflow-hidden relative bg-[#f4f4f4] shadow-lg transition-transform duration-500 group-hover:scale-105">
          
          {/* Badge */}
          <Badge className='bg-primary text-base absolute top-6 left-6 z-30 capitalize'>{categoty}</Badge>

          {/* Image */}
          <Image
            alt={title}
            src={img}
            fill
            priority
            quality={100}
            className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110 blur-sm' : 'scale-100'}`}
          />

          {/* Overlay panel on hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm text-white flex flex-col justify-center items-center p-6 rounded-[30px] transition-all duration-300">
              {desc && <p className="text-sm text-gray-200 font-semibold mb-2 text-center">{desc}</p>}
              {techArray.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-1">
                  {techArray.map((tech, index) => (
                    <Badge key={index} className="bg-gray-200 text-gray-800 text-xs">{tech}</Badge>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Title + Arrow */}
        <div className="flex items-center justify-between mt-3">
          <h3 className="h3">{title}</h3>
          <button className="bg-slate-400 text-white rounded-full w-[48px] h-[48px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
            <FiArrowDownRight className="text-2xl"/>
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Workitem
