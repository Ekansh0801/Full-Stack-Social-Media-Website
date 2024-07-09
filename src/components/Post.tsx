import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/* USER */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="https://pbs.twimg.com/profile_images/1692077157512785920/z9C1zW17_400x400.jpg" alt="" width={40} height={40} className='w-10 h-10 rounded-full'/>
                <span className='font-medium'>BCCI</span>
            </div>
            <Image src="/more.png" alt="" width={16} height={16}/>
        </div>
        {/* DESC */}
        <div className='flex flex-col gap-4'>
          <div className='w-full min-h-96 relative'>
          <Image src="https://c.ndtvimg.com/2024-07/snujg7h_rohit-sharma-afp_625x300_01_July_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675" alt='' fill className='object-cover rounded-md'/>
          </div>
          <p>Team India finally break a 11-year jinx to call themselves champions again! A show of stellar dominance with a clear blueprint of intent, sprinkled with a selfless skipper and a talismanic bowling attack who can dig you out of hell or high water. Sometimes, all you can do as opponents is sit back, clap off the champions and say ‘Well deserved!’</p>
        </div>
        {/* INTERACTION */}
        <div className='flex items-center justify-between text-sm my-4'>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image src="/like.png" className='cursor-pointer' alt="" width={16} height={16}/>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 <span className='hidden md:inline'> Likes</span></span>
                </div>
                <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image src="/comment.png" className='cursor-pointer' alt="" width={16} height={16}/>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 <span className='hidden md:inline'> Comments</span></span>
                </div>
            </div>
            <div className=''>
            <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                <Image src="/share.png" className='cursor-pointer' alt="" width={16} height={16}/>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>123 <span className='hidden md:inline'> Shares</span></span>
                </div>
            </div>
        </div>
        <Comments/>
    </div>
  )
}

export default Post