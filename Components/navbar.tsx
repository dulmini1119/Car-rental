"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" shadow-sm border-b-[1px] px-4 py-3 md:px-8">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Image src="/globe.svg" alt="logo" width={50} height={50} />
        </div>


        <div className="hidden md:flex gap-5 items-center">
          <Link href="/" className="hover:bg-gray-500 px-3 py-2 rounded hover:text-white cursor-pointer">
            Home
          </Link>
          <Link href="/history" className="hover:bg-gray-500 px-3 py-2 rounded hover:text-white cursor-pointer">
            History
          </Link>
          <Link href="/contact" className="hover:bg-gray-500 px-3 py-2 rounded hover:text-white cursor-pointer">
            Contact Us
          </Link>
          <UserButton />
        </div>

        <div className="md:hidden flex items-center">
          <UserButton />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-2">
          <Link href="/" className="hover:bg-gray-500 px-3 py-2 rounded hover:text-white cursor-pointer">
            Home
          </Link>
          <Link href="/history" className="hover:bg-gray-500 px-3 py-2 rounded hover:text-white cursor-pointer">
            History
          </Link>
          <Link href="/contact" className="hover:bg-gray-500 px-3 py-2 rounded hover:text-white cursor-pointer">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

