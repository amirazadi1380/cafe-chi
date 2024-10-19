import React, { useEffect, useRef } from 'react'
import { menu } from '../data/index'
import gsap from 'gsap'

export default function Categories({selectedCategoryID,setSelectedCategoryID}) {
  const categoryItem = useRef(null)
  useEffect(()=>{
    gsap.to(categoryItem.current,{opacity:1,stagger:0.2,delay:0.8})
},[])
  return (
    <div ref={categoryItem} className=' h-24 flex justify-start lg:justify-center items-center  overflow-x-auto whitespace-nowrap hide-scrollbar px-2 opacity-0'>
        {menu.map(item => (
            <button onClick={()=>{
                setSelectedCategoryID(item.id)
            }} 
              key={item.id} 
              className={`${selectedCategoryID == item.id ? 'bg-customBlack text-white duration-300 ease-in-out' : 'text-black/80 duration-300 ease-in-out'} text-[11px] font-bold  px-6 h-7 flex justify-center items-center rounded-full mx-2 tracking`}>
              {item.category}
            </button>
        ))}
    </div>
  )
}
