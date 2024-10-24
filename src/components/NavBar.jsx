import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Workshops", target: "#workshops" },
    { id: 2, text: "Store", target: "#process" },
    { id: 1, text: "About", target: "#about" },
  ];

  return (
    <div className="bg-transparent flex justify-between items-center h-24 w-full mx-auto px-4 text-gray-rustic">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-gray-rustic">
        <a href="/">Cerava</a>
      </h1>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li key={item.id} className="m-6">
            <a href={item.target}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r  bg-black/30 backdrop-blur-sm ease-in-out duration-500 z-10 text-center align-middle pt-12"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        {/* <h1 className="w-full text-3xl font-bold text-white">
          <a href="/">Cerava</a>
        </h1> */}

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li key={item.id} className="m-4">
            <a href={item.target}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
