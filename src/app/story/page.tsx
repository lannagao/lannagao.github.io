'use client' // This is a client component 👈🏽

import Image from "next/image";
import MenuBar from "../MenuBar";
import blogs from "../../blogs.json";
import { useRouter } from 'next/navigation'
import Blog1 from '../../../blogs/1.mdx';


export default function Page() {
  const router = useRouter();

  const items = blogs.map((blog) => {
    const short = blog.short + '......';


    return (
      <div className="flex flex-col items-start justify-top p-12">
        <button className="cursor-pointer pb-5 text-3xl underline-offset-8 decoration-2 no-underline hover:underline" type="button" onClick={() => router.push(`/story/${blog.slug}`)}>
          {blog.title}
        </button>
        <p className="pl-4">{short}</p>
        <button className="cursor-pointer italic no-underline hover:underline pt-2" type="button" onClick={() => router.push(`/story/${blog.slug}`)}>
          Read more... →
        </button>
      </div>
    )
  });



  return (
    <main className="flex min-h-screen flex-col items-center justify-top p-12 ">
      <MenuBar currentPage="story" />
      <div className="w-8/12">
        {items}
      </div>
    </main>
  );
}
