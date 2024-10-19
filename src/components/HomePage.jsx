import gsap from 'gsap'
import React, { useEffect } from 'react'

export default function HomePage({setIsClicked}) {
  useEffect(()=>{
gsap.to("#homeItems",{opacity:1,stagger:0.3,y:-2})
  },[])
  gsap
  return (
    <div className='w-full h-screen relative overflow-hidden'>
        <img src="/backhq.webp" alt="background" className='w-full h-80 scale-[3] -top-12 rotate-180 object-cover  absolute -z-10' />
        <div className='  z-50 mt-64 flex flex-col justify-center items-center '>
            <h1 id='homeItems' className=' capitalize tracking-wide font-extrabold font-sans text-3xl opacity-0'>cafe harmony</h1>
            <p id='homeItems' className='pt-6 pb-2 font-medium opacity-0'>کافه هارمونی</p>
            <p id='homeItems' className=' w-52 text-center font-medium text-xs opacity-0'>آدرس: یاسوج، ترمینال قدیم(خیابان ساحلی)، خیابان شهید یزدان پناه، پلاک 31</p>
            <button id='homeItems' className='bg-customBlack text-white/80 w-72 h-10 rounded-3xl font-bold mt-10 tracking-wider text-lg opacity-0' onClick={
                ()=>setIsClicked(true)}>
                دیدن منو
            </button>
            <img id='homeItems' src="/logo.png" alt="logo" className='mt-5 w-20 pb-3 opacity-0' />
        </div>
        <h3 className=' font-serif flex justify-center items-center absolute bottom-0 text-xs opacity-30 left-1/2 -translate-x-1/2'>created by cafechi team</h3>
    </div>
  )
}
