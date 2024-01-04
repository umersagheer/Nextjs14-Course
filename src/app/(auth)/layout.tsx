"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavArray = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthRoutesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex gap-4 p-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white">
        {NavArray.map((link, index) => {
          const path = pathname.startsWith(link.href);

          return (
            <>
              <Link
                href={link.href}
                key={index}
                className={`${
                  path ? "text-emerald-300 font-bold" : ""
                } text-lg font-semibold`}
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
