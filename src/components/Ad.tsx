import Image from 'next/image'
import React from 'react'

const Ad = ({size} : {size: "sm" | "md" | "lg"}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
      {/* TOP */}
      <div className='flex items-center justify-between text-gray-500 font-medium'>
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16}/>
      </div>
      {/* BOTTOM */}
      <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
        <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
        <Image src="https://cdn.shopify.com/s/files/1/0278/4565/6649/files/WhatsApp_Image_2024-05-21_at_01.14.17.webp?v=1716235348" alt="" fill className='rounded-lg object-cover'/>
        </div>

        <div className='flex items-center gap-4 '>
        <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/8/89/2024_ICC_Men%27s_T20_World_Cup_logo.svg/330px-2024_ICC_Men%27s_T20_World_Cup_logo.svg.png" alt=""  width={24} height={24} className='rounded-full w-6 h-6 object-cover'/>
        <span className='text-blue-500 font-medium '>T20 World Cup 2024</span>
        </div>
        <p className={size === "sm" ? "text-sx" : "text-sm"}>{size === "sm" ? "The 2024 ICC Men's T20 World Cup was the ninth edition of the ICC Men's T20 World Cup." : size === "md" ? "The 2024 ICC Men's T20 World Cup was the ninth edition of the ICC Men's T20 World Cup. It was co-hosted by the West Indies and the United States" : "The 2024 ICC Men's T20 World Cup was the ninth edition of the ICC Men's T20 World Cup. It was co-hosted by the West Indies and the United States from 1 to 29 June 2024"}</p>
        <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn More</button>
      </div>
    </div>
  )
}

export default Ad