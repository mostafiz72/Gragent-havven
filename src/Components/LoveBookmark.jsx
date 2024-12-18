import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";

export default function LoveBookmark({ readyBook }) {
    const { product_url, product_title, description, price} = readyBook;
 
  return (
    <>
        <div className="love-bookmark bg-gray-100 gap-5 container mx-auto rounded-lg p-6 justify-between flex items-center my-5">
            <div className='flex items-start gap-5'>
                <div className=' w-32 h-[100px]'><img className=' rounded-md w-full h-full object-cover' src={product_url} alt="" /></div>
              <div>
                <h3 className=' text-xl font-bold'>{product_title}</h3>
                <p className=' tex-lg font-semibold my-2'>{description}</p>
                <p className=' tex-lg font-semibold'>Price: {price}</p>
              </div>
            </div>
         </div>
    </>
  )
}
