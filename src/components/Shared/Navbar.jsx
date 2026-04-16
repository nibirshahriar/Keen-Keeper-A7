import React, { useState } from "react";
import MyNavLink from "./MyNavLink";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow relative">
      <div className="w-full flex justify-between items-center px-4 md:px-10 py-3">
        <h2 className="text-lg font-semibold text-gray-800">
          <span className="font-bold">Keen</span>
          <span className="font-bold text-green-800">Keeper</span>
        </h2>
        <ul className="hidden md:flex items-center gap-3 text-sm">
          <li>
            <MyNavLink to="/">
              <span className="flex items-center gap-2">
                <FaHome />
                Home
              </span>
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/timeline">
              <span className="flex items-center gap-2">
                <RiTimeLine />
                Timeline
              </span>
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/stats">
              <span className="flex items-center gap-2">
                <GoGraph />
                Stats
              </span>
            </MyNavLink>
          </li>
        </ul>
        <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col gap-3 px-4 pb-4 text-sm bg-white shadow">
          <li onClick={() => setOpen(false)}>
            <MyNavLink to="/">
              <span className="flex items-center gap-2">
                <FaHome />
                Home
              </span>
            </MyNavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <MyNavLink to="/timeline">
              <span className="flex items-center gap-2">
                <RiTimeLine />
                Timeline
              </span>
            </MyNavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <MyNavLink to="/stats">
              <span className="flex items-center gap-2">
                <GoGraph />
                Stats
              </span>
            </MyNavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
