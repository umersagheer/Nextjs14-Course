import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <h1>This is about Page</h1>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="/">Take me to home</Link>
      </button>
    </>
  );
};

export default About;
