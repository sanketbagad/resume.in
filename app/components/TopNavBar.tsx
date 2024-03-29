"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";

export const TopNavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const { userId } = useAuth();

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"/Resume.PNG"}
              width={16}
              height={16}
              alt="Resume.in"
              className="h-8 w-full"
              priority
            />
            <h1 className="text-xl whitespace-nowrap font-bold text-primary">
              Resume.in
            </h1>
          </div>
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {userId ? (
            <>
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
          <UserButton
          afterSignOutUrl="/"
          />
          </>
          ) : (
            <>
            <Link
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href="/sign-up"
            >
              Sign Up
            </Link>
            <Link
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href="/sign-in"
            >
              Sign In
            </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
