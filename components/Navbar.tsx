"use client";
import { NAV_LINKS } from "@/constants";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiX, FiMenu } from "react-icons/fi"; // Added FiMenu for hamburger icon

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // State to toggle sidebar

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-950 h-[70px] flex items-center justify-between px-4">
      <Link href={"/"}>
        <Image src="/logofinal.png" alt="logo" width={100} height={100} className="mt-2 ml-8"/>
      </Link>

      {/* Desktop Menu Links */}
      <ul className="hidden lg:flex lg:items-center lg:justify-center h-full gap-12 text-white flex-1">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <FiMenu
          className="text-white text-3xl cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-90 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-3/4 sm:w-1/2`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-white text-lg font-semibold">Menu</h2>
          <FiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Sidebar Menu Links */}
        <ul className="flex flex-col items-center pl-6">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-white text-lg py-2 hover:text-yellow-300"
              onClick={toggleSidebar} // Close sidebar after clicking a link
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
