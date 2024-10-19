import gsap from 'gsap'
import React, { useEffect } from 'react'

export default function Headers() {
    useEffect(()=>{
        gsap.to("#headerItem",{opacity:1,stagger:0.2})
    },[])
    return (
        <div id='headerItem' className='flex  w-full h-52 flex-col space-y-5 pt-5 opacity-0'>
            <div  className='flex justify-center items-center space-x-5 font-extralight text-lg pr-10 '>
                <img
                    src="/cup1.png"
                    alt="cup1"
                    className='w-11 h-16'
                />
                <p className='px-5  pl-3 opacity-80 font-bold text-sm'>روزتون بخیر، مرسی که هارمونی رو انتخاب کردین</p>
            </div>
            <div  className='flex  justify-center items-center space-x-5 text-base pl-12 '>
                <h1 className='font-bold text-3xl'>امروز چی میلتون میکشه؟</h1>
                <img src="/cup2.png" alt="cup2" className=' w-16 h-16 mb-5 -rotate-12' />
            </div>
        </div>
    )
}
