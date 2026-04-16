import React from "react";
import MyNavLink from "./MyNavLink";
import { FaHome } from "react-icons/fa";
import { RiTimeLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="w-full flex justify-between items-center px-4 md:px-10 py-3">
        <h2 className="text-lg font-semibold text-gray-800">
          <span className="font-bold">Keen</span>
          <span className="font-bold text-green-800">Keeper</span>
        </h2>

        <ul className="flex items-center gap-3 text-sm">
          <li>
            <MyNavLink to="/">
              <span className="flex items-center gap-2">
                <FaHome className="text-base" />
                <span>Home</span>
              </span>
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/timeline">
              <span className="flex items-center gap-2">
                <RiTimeLine className="text-base" />
                <span>Timeline</span>
              </span>
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/stats">
              <span className="flex items-center gap-2">
                <GoGraph className="text-base" />
                <span>Stats</span>
              </span>
            </MyNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
