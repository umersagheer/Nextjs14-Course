import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold text-blue-700 mb-5">Welcome Home</h1>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="about">about</Link>
      </button>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="profile">Profile</Link>
      </button>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="blog">Blogs</Link>
      </button>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="products">Products</Link>
      </button>
      <button className="border bg-green-500 px-3 py-1 rounded-md m-2 hover:bg-green-400/80">
        <Link href="login">Login</Link>
      </button>
      <button className="border bg-indigo-500 px-3 py-1 rounded-md m-2 hover:bg-indigo-400/80">
        <Link href="register">Registration</Link>
      </button>
      <button className="border bg-blue-500 px-3 py-1 rounded-md m-2 hover:bg-blue-400/80">
        <Link href="forgot-password"> Forgot-password</Link>
      </button>
    </>
  );
}
