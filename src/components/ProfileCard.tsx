import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
        <div className='h-20 relative'>
            <Image src="https://pbs.twimg.com/media/FxUmdQ-aYAAzleQ.jpg" alt="" fill className='rounded-md object-cover'/>
            <Image src="https://im.rediff.com/cricket/2021/jan/30jay-shah.JPG?w=670&h=900" alt="" width={48} height={48} className='rounded-full w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'/>
        </div>
        <div className='h-20 flex flex-col gap-2 items-center'>
            <span className='font-semibold'>Jay Shah</span>
            <div className='flex items-center gap-4'>
                <div className='flex'>
                <Image src="https://im.rediff.com/cricket/2021/jan/30jay-shah.JPG?w=670&h=900" alt="" width={12} height={12} className='rounded-full w-3 h-3 '/>
                <Image src="https://im.rediff.com/cricket/2021/jan/30jay-shah.JPG?w=670&h=900" alt="" width={12} height={12} className='rounded-full w-3 h-3 '/>
                <Image src="https://im.rediff.com/cricket/2021/jan/30jay-shah.JPG?w=670&h=900" alt="" width={12} height={12} className='rounded-full w-3 h-3 '/>
                </div>
                <span>500 followers</span>
            </div>

            <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
        </div>
    </div>
  )
}

export default ProfileCard