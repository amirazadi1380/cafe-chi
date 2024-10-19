import React, { useEffect, useState } from 'react'
import { menu } from '../data/index'
export default function Items({ selectedCategoryID }) {
    const [selectedItem, setSelectedItem] = useState()
    useEffect(() => {
        setSelectedItem(menu.find(item => item.id == selectedCategoryID).items)
    }, [selectedCategoryID])
    return (
        <div className=' bg-customBlack h-[1000px] lg:h-screen rounded-t-3xl overflow-y-auto hide-scrollbar py-5 '>
            <div className='flex flex-col items-center pt-10 space-y-3'>
                {selectedItem?.map(item =>
                    <div key={item.id} className='w-[350px] h-28 rounded-xl bg-customWhite flex justify-center items-center px-2 py-2'>
                        <div className=' w-1/5 h-full flex justify-start items-end pr-2'>
                            <h2 className=' bg-customBrown w-full text-white/80 h-11  text-center rounded-full flex justify-center items-center text-2xl'>{item.price}</h2>
                        </div>
                        <div className=' h-full w-2/4 text-right pr-5'>
                            <h1 className='text-xl'>{item.title}</h1>
                            <div className='flex flex-col'>
                                <span>دو عدد تخم مرغ نیمرو شده</span>
                                <span>{item.dorchin && item.dorchin}</span>
                            </div>
                        </div>
                        <div className=' w-1/4 h-full flex justify-end'>
                            <img src={item.src} alt="image" className='w-full object-cover rounded-lg h-24' />
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}
