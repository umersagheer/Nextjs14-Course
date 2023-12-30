import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen bg-gray-900 flex flex-col justify-center items-center text-3xl font-bold text-white">
      Not Found
      <p className="text-5xl">There is nothing here</p>
      <p className="text-3xl text-green-400">Custom not-found Page</p>
      <Link href="/">
        <Button text="Go Home" />
      </Link>
    </div>
  );
};

export default NotFound;
