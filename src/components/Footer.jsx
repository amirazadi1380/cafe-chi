import React from 'react'
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <div className='w-full h-16 '>
        <div className='flex justify-center pt-3 items-center space-x-2'>
            <FiInstagram className='text-5xl'/>
            <p className='text-xl font-medium'>@Harmony.cafe.ysj</p>
        </div>
    </div>
  )
}
