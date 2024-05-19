"use client"; // This is a client component 👈🏽

import Image from "next/image";
//import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function MenuBar({ currentPage }: { currentPage: string }) {
  // create state of current page
  //const [currentPage, setCurrentPage] = useState("");
  const router = useRouter();

  //className={`flex flex-row items-center justify-between p-10 cursor-pointer ${currentPage === 'story' ? 'underline underline-offset-8' : ''}`}
  //onClick={() => setCurrentPage("story")}
  return (
    <div className='flex flex-col items-center justify-between'>
      <button className="cursor-pointer" type="button" onClick={() => router.push('/')}>
        <h1 className="text-6xl"> Lanna Gao </h1>
      </button>
      <div className="z-10 max-w-5xl items-center justify-between text-xl flex">
        <button className="p-10 cursor-pointer" type="button" onClick={() => router.push('/about')}>
          <span className={`underline-offset-8 ${currentPage === 'about' ? 'underline' : 'no-underline hover:underline'}`}>关于</span>
        </button>
        <button className={`p-10 cursor-pointer`} type="button" onClick={() => router.push('/story')}>
          <span className={`underline-offset-8 ${currentPage === 'story' ? 'underline' : 'no-underline hover:underline'}`}>故事</span>
        </button>
      </div>
    </div>
    
  );
}