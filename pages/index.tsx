import Image from 'next/image';
import React from 'react';
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { Inter } from 'next/font/google';
import FeedCard from '@/components/feedcards';


const inter = Inter({ subsets: ['latin'] })

interface TwitterSideButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSideButton[] = [
  {
    title: 'Home',
    icon : <BiHomeCircle/>
  },
  {
    title: 'Explore',
    icon: <BiHash/>,
  },
  {
    title: 'Notifications',
    icon: <BsBell/>
  },
  {
    title: 'Messages',
    icon: <BsEnvelope/>
  },
  { 
    title: 'Bookmarks',
    icon: <BsBookmark/>
  },
  { 
    title: 'Twitter Blue',
    icon: <BiMoney/>
  },
  {
    title: 'Profile',
    icon: <BiUser/>
  }
]

export default function Home() {
  return (
    <div>
      <div className='grid grid-cols-12 h-screen w-screen px-56'>
        <div className='col-span-2 pt-8'>
          <BsTwitter className='text-4xl h-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer'/>
          <ul className='mt-4 text-1xl pr-4'>
            {sidebarMenuItems.map((item) => 
              <li
                className='flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-4 py-2 w-fit cursor-pointer mt-2' 
                key={item.title}
              >
                <span>{item.title}</span>
                <span>{item.icon}</span>
              </li>
            )}
          </ul>
          <div className=' mt-5 px-3'>
            <button className='bg-[#1d9bf0] py-2 px-4 rounded-full w-full'>Tweet</button>
          </div>
        </div>
        <div className='col-span-7 border-r-[1px] border-l-[1px] overflow-scroll border-gray-600'>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className='col-span-3'></div>
      </div>
    </div>
  )
}
