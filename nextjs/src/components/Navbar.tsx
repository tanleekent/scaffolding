"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-gray-700 bg-cream">
      <div className="flex flex-col max-w-7xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between py-6">
          <div className="flex flex-row items-center">
            <div className="relative md:mt-8">
              <Link
                href="/"
                className="text-lg relative pl-5 z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
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
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
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
            open ? "h-auto scale-y-100" : "h-0 scale-y-0 md:h-auto md:scale-y-100"
          } flex flex-col grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 overflow-hidden`}
        >
          <Link
            href="/products"
            className="text-center px-2 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline"
          >
            Products
          </Link>
          <a
            className="px-10 py-3 mt-2 text-sm text-center bg-yellow-500 text-white rounded-full md:mt-8 md:ml-4"
            href="https://wa.me/+60182728777?text=Rent%20Scaffolding"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp Now
          </a>
        </nav>
      </div>
    </div>
  );
}
