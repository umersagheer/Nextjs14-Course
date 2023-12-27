import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="/">Take me to Home</Link>
      </button>
    </>
  );
};

export default Profile;
