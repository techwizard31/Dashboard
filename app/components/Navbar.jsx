"use client";
import React from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Notification from "../../public/notificationbell.svg";
import Messages from "../../public/message.svg";
import { userdata } from "../data";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row p-4 w-full justify-between lg:px-10 sm:px-6 items-center">
      <div className="flex flex-row w-[20%] relative items-center min-w-[300px] gap-4">
      <div
        className="flex flex-col lg:hidden gap-1 w-9"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`h-[0.2rem] w-7 bg-gray-400 ${
            open ? "rotate-45 translate-y-0" : ""
          }`}
        />
        <div
          className={`h-[0.2rem] w-7 bg-gray-400 ${
            open ? "-rotate-45 -translate-y-[0.388rem]" : ""
          }`}
        />
        <div
          className={`h-[0.2rem] w-7 bg-gray-400 ${open ? "hidden" : ""}`}
        />
      </div>
        <input
          type="text"
          name="Search"
          placeholder="Search"
          id=""
          className="w-full h-11 ps-4 bg-slate-100 text-gray-400 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
      </div>
      <div className="flex flex-row lg:gap-8 sm:gap-4 items-center">
        <Image src={Notification} className="w-8 h-8 cursor-pointer" />
        <Image src={Messages} className="w-8 h-8 cursor-pointer" />
        <div
          className="flex flex-row items-center gap-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={userdata.image}
            alt="image"
            className="w-9 h-9 rounded-full"
          />
          <p className="font-poppins sm:hidden lg:block">
            {userdata.FirstName}
          </p>
          <BsChevronDown
            className={`text-gray-600 w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
