import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home</h1>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="about">Take me to about</Link>
      </button>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="profile">Take me to Profile</Link>
      </button>
    </>
  );
}
