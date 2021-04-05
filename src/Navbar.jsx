import React from "react";
import { Link } from "react-router-dom";

function NavItem({ children: item }) {
  return (
    <div className="px-4 py-2 rounded-md cursor-pointer hover:bg-black dark:hover:bg-white hover:bg-opacity-10">
      {item}
    </div>
  );
}

function Navbar({ children: navItems }) {
  return (
    <nav className="flex flex-row items-center justify-between pl-2 pr-6 text-white border-b-2 shadow bg-orange dark:bg-transparent border-orange">

      {/* Brand */}
      <Link to="/">
        <div className="sr-only">Home</div>
        <svg className="p-3 w-14 h-14 dark:text-orange" xmlns="http://www.w3.org/2000/svg" aria-label="Hacker News" role="img" viewBox="0 0 512 512">
          <path fill="currentColor" d="M124 91h51l81 162 81-164h51L276 293v136h-40V293z" />
        </svg>
      </Link>

      {/* Nav links */}
      <div className="flex flex-row space-x-1 sm:space-x-3">
        {navItems}
      </div>
    </nav>
  );
}

export {
  Navbar,
  NavItem
};