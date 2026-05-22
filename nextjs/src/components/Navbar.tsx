"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full text-gray-700 bg-cream/90 backdrop-blur-md sticky top-0 z-100 border-b border-yellow-100">
      <div className="flex flex-col max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between py-4 md:py-5">
          <div className="flex flex-row items-center">
            <div className="relative">
              <Link
                href="/"
                className="text-lg relative pl-5 z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
                onClick={() => setOpen(false)}
              >
                Scaffolding
              </Link>
              <Image
                className="h-11 w-auto z-40 absolute -top-2 -left-3"
                src="/img/logo.png"
                alt="777 Scaffolding logo"
                width={44}
                height={44}
              />
            </div>
          </div>

          <button
            className="rounded-xl md:hidden focus:outline-none focus:shadow-outline border border-yellow-200 bg-white/70 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {!open ? (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`${
            open
              ? "max-h-60 opacity-100 translate-y-0 mt-1 mb-4 p-2"
              : "max-h-0 opacity-0 -translate-y-2"
          } grow overflow-hidden transition-all duration-300 md:max-h-none md:opacity-100 md:translate-y-0 md:mt-0 md:mb-0 md:p-0 flex flex-col gap-1 md:gap-2 md:items-center md:flex md:justify-end md:flex-row bg-white/80 md:bg-transparent rounded-2xl md:rounded-none border border-yellow-100 md:border-0 shadow-sm md:shadow-none`}
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`text-center px-3 py-2 text-sm rounded-lg focus:outline-none focus:shadow-outline transition-colors ${
              pathname === "/"
                ? "bg-white text-yellow-600 shadow-sm"
                : "bg-transparent hover:text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setOpen(false)}
            className={`text-center px-3 py-2 text-sm rounded-lg focus:outline-none focus:shadow-outline transition-colors ${
              pathname === "/products"
                ? "bg-white text-yellow-600 shadow-sm"
                : "bg-transparent hover:text-gray-900"
            }`}
          >
            Products
          </Link>
          <a
            className="brand-button px-6 md:px-8 py-3 text-sm text-center"
            href="https://wa.me/+60182728777?text=Rent%20Scaffolding"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Whatsapp Now
          </a>
        </nav>
      </div>
    </div>
  );
}
