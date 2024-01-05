"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavArray = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthRoutesLayout = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <>
      <nav className="flex w-full gap-4 p-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white">
        <div className="">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-md text-black p-1 text-sm"
          />
        </div>
        {NavArray.map((link, index) => {
          const path = pathname.startsWith(link.href);

          return (
            <>
              <Link
                href={link.href}
                key={index}
                className={`${
                  path ? "text-emerald-300 font-bold" : ""
                } text-lg font-semibold hover:text-emerald-300`}
              >
                {link.name}
              </Link>
            </>
          );
        })}
      </nav>
      {children}
    </>
  );
};

export default AuthRoutesLayout;
