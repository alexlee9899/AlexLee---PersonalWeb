"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative w-full bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          ALEX LEE
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200
             text-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200
             text-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        {navbarOpen ? (
          <MenuOverlay className="md:hidden" links={navLinks} />
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
