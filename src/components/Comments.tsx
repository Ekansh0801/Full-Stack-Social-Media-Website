import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div>
        {/* WRITE */}
        <div className='flex items-center gap-4'>
            <Image src="https://images.firstpost.com/uploads/2024/06/Virat-Kohli-Rohit-Sharma-T20-World-Cup-Final-Reuters-1200-2024-06-491cceac3f6f275b35d5b67809b1cbf4.jpg?im=Resize,width=720,aspect=fit,type=normal" alt="" width={32} height={32} className='w-8 h-8 rounded-full object-contain'/>
            <div className='flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                <input type='text' placeholder='Write a Comment...' className='bg-transparent outline-none flex-1'/>
                <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer"/>
            </div>
        </div>
        {/* COMMENTS */}
        <div className=' '>
            {/* COMMENT */}
            <div className='flex gap-4 justify-between mt-6 '>
                {/* AVATAR */}
                <Image src="https://images.firstpost.com/uploads/2024/06/Virat-Kohli-Rohit-Sharma-T20-World-Cup-Final-Reuters-1200-2024-06-491cceac3f6f275b35d5b67809b1cbf4.jpg?im=Resize,width=720,aspect=fit,type=normal" alt="" width={40} height={40} className='w-10 h-10 rounded-full object-contain'/>
                {/* DESC */}
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='font-medium'>Rohit Sharma</span>
                    <p>It is not what we did today, it is what we have been doing for the last 3-4 years. That's the the result that has come for us today.</p>
                    <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                        <div className='flex items-center gap-4'>
                        <Image src="/like.png" alt="" width={16} height={16} className='cursor-pointer w-4 h-4'/>
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>4518 Likes</span>
                        </div>
                        <div className=''>
                            Reply
                        </div>
                    </div>
                </div>
                {/* ICON */}
                <Image src="/more.png" alt="" width={16} height={16} className='cursor-pointer w-4 h-4'/>
            </div>
        </div>
    </div>
  )
}

export default Comments