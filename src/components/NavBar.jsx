import { useState } from "react";
import clsx from "clsx";

import logo from "../assets/images/logo.svg";

// label, link
const links = [
  ["Home", "/home"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Blog", "/blog"],
  ["Careers", "/careers"],
];

export const NavBar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header className="flex justify-between h-(--hdr-height) px-8 sticky z-50 items-center">
      <div>
        <img src={logo} alt="Easy Bank logo" />
      </div>

      <div className="fixed right-8 lg:hidden">
        <button
          className="nav-toggle nav-open"
          data-state={isToggled ? "open" : "closed"}
          onClick={toggleMenu}
        ></button>
      </div>

      <nav className="h-full">
        <div
          className={clsx(
            "bg-gray-blue-dark top-[var(--hdr-height)] h-full left-0 w-full p-8 lg:relative lg:p-0 lg:bg-transparent lg:inset-auto lg:block",
            isToggled ? "fixed" : "hidden"
          )}
        >
          <ul className="flex flex-col bg-white rounded-md p-4 lg:flex-row lg:p-0 lg:h-full gap-2">
            {links.map((link, index) => (
              <li key={index} className="w-full lg:h-full">
                <a
                  href={link[1]}
                  className="relative h-full  text-dark-blue lg:text-gray-blue-dark/60 lg:hover:text-gray-blue-dark text-center w-full flex items-center justify-center p-2 font-semibold lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:bg-linear-to-r lg:after:from-lime-green lg:after:to-bright-cyan lg:after:scale-x-0 lg:after-hidden lg:hover:after:block lg:hover:after:scale-x-100 lg:after:transition-transform lg:after:duration-300"
                >
                  <span>{link[0]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="hidden bg-linear-to-r from-lime-green to-bright-cyan rounded-full lg:flex lg:items-center overflow-hidden hover:scale-105 transition-transform duration:150">
        <a
          href="/request-invite"
          className="text-white inline-block py-2 px-4 font-semibold"
        >
          Request Invite
        </a>
      </div>
    </header>
  );
};
