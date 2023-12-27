import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-blue-700">Blog</h1>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="/">Take me to Home</Link>
      </button>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="blog/first">Take me to First Blog</Link>
      </button>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="blog/second">Take me to Second Blog</Link>
      </button>
    </>
  );
};

export default BlogPage;
