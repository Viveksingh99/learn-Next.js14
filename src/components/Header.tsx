"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Profile",
      href: "/profile",
    },
    {
      name: "Product",
      href: "/product",
    },
    {
      name: "Docs",
      href: "/docs",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Register",
      href: "/register",
    },
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "ForgetPassword",
      href: "/forgetPassword",
    },
  ];

  const pathname = usePathname();
  return (
    <div className="flex flex-wrap gap-10">
      {navLinks.map((item, index) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            className={isActive ? "bg-white rounded-sm" : " text-black"}
            key={index}
            href={item.href}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
