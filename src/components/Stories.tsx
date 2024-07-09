import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-sm scrollbar-hide'>
      <div className='flex gap-8 w-max'>
        {/* story */}
        <div className='flex flex-col gap-2 items-center cursor-pointer'>
          <Image src="https://im.rediff.com/cricket/2021/jan/30jay-shah.JPG?w=670&h=900" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span>Jay Shah</span>
        </div>
        {/* story */}
        <div className='flex flex-col gap-2 items-center cursor-pointer'>
          <Image src="https://im.rediff.com/cricket/2021/jan/30jay-shah.JPG?w=670&h=900" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span>Jay Shah</span>
        </div>
      {/* story */}
      <div className='flex flex-col gap-2 items-center cursor-pointer'>
          <Image src="https://im.rediff.com/cricket/2021/jan/30jay-shah.JPG?w=670&h=900" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span>Jay Shah</span>
        </div>
      {/* story */}
      <div className='flex flex-col gap-2 items-center cursor-pointer'>
          <Image src="https://im.rediff.com/cricket/2021/jan/30jay-shah.JPG?w=670&h=900" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span>Jay Shah</span>
        </div>
      {/* story */}
      <div className='flex flex-col gap-2 items-center cursor-pointer'>
          <Image src="https://im.rediff.com/cricket/2021/jan/30jay-shah.JPG?w=670&h=900" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span>Jay Shah</span>
        </div>
      {/* story */}
      <div className='flex flex-col gap-2 items-center cursor-pointer'>
          <Image src="https://im.rediff.com/cricket/2021/jan/30jay-shah.JPG?w=670&h=900" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
          <span>Jay Shah</span>
        </div>
      
      </div>
    </div>
  )
}

export default Stories