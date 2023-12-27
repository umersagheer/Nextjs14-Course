"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const SecondBlog = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="text-2xl font-bold text-blue-700">Second Blog</h1>
      <button
        className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80"
        onClick={() => router.back()}
      >
        <p>Take me to Blogs</p>
      </button>
    </>
  );
};

export default SecondBlog;
