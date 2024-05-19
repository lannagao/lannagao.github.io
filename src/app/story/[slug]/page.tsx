'use client' // This is a client component 👈🏽

import Image from "next/image";
import MenuBar from "../../MenuBar";
import blogs from "../../../blogs.json";
import Blog1 from '../../../blogs/1.mdx';


export default function Page({ params }: { params: { slug: string } }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);
  const title = blog ? blog.title : "";
  const id = blog ? blog.id : "";

  return (
    <main className="flex min-h-screen flex-col p-12 ">
      <MenuBar currentPage="story" />
      <div className="flex flex-col items-start justify-top p-12 ">
        <h1 className="text-4xl pb-6">{title}</h1>
        <Blog1 />
      </div>
    </main>
  );
}
