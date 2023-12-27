"use client";

import { useRouter } from "next/navigation";
import React from "react";

const FirstBlog = () => {
  const router = useRouter();

  return (
    <>
      <h1 className="text-2xl font-bold text-blue-700">First Blog</h1>
      <button
        className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80"
        onClick={() => router.back()}
      >
        <p>Take me to Blogs</p>
      </button>
    </>
  );
};

export default FirstBlog;
