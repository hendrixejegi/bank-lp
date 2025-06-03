import { useState } from "react";
import clsx from "clsx";
import { cn } from "../lib/utils";
import { useIsMobile, useScrolled } from "../lib/hooks";

import logo from "../assets/images/logo.svg";

// label, link
const links = [
  ["Home", "/home"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Blog", "/blog"],
  ["Careers", "/careers"],
];

export const InviteButton = ({ styles = "" }) => {
  return (
    <div
      className={cn(
        "from-lime-green to-bright-cyan duration:150 hidden w-full max-w-40 items-center justify-center overflow-hidden rounded-full bg-linear-to-r transition-transform hover:scale-105 lg:flex",
        styles,
      )}
    >
      <a
        href="/request-invite"
        className="relative inline-block border-4 border-transparent px-4 py-2 text-center font-semibold text-white focus:top-0 focus:left-0 focus:h-full focus:w-full focus:rounded-full focus:border-4 focus:before:absolute focus:before:content-['']"
        role="button"
      >
        Request Invite
      </a>
    </div>
  );
};

export const NavBar = () => {
  const isMobile = useIsMobile();

  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled);
  };

  const isScrolled = useScrolled();

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 bg-white",
        isScrolled ? "shadow-md" : "",
      )}
    >
      <div className="flex h-(--hdr-height) items-center justify-between px-4">
        <div>
          <img src={logo} alt="Easy Bank logo" />
        </div>
        <div className="fixed top-10 right-8 -translate-y-1/2 lg:hidden">
          <button
            className="nav-toggle nav-open"
            data-state={isToggled ? "open" : "closed"}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isToggled}
            aria-controls="primary-nav"
          ></button>
        </div>
        <nav className="h-full" aria-label="Main navigation">
          <div
            className={clsx(
              "top-[var(--hdr-height)] left-0 h-full w-full p-8 lg:relative lg:inset-auto lg:block lg:bg-transparent lg:p-0",
              isToggled
                ? "from-dark-blue/70 fixed bg-linear-to-b to-white/0"
                : "hidden",
            )}
          >
            <ul
              id="primary-nav"
              data-state={isToggled ? "open" : "closed"}
              aria-hidden={!isToggled && isMobile ? "true" : "false"}
              role="menubar"
              aria-label="Main navigation"
              className="flex flex-col gap-2 rounded-md bg-white p-4 lg:h-full lg:flex-row lg:p-0"
            >
              {links.map((link, index) => (
                <li key={index} className="w-full lg:h-full" role="menuitem">
                  <a
                    href={link[1]}
                    className="text-dark-blue lg:text-gray-blue-dark lg:hover:text-dark-blue lg:after:from-lime-green lg:after:to-bright-cyan lg:after-hidden relative flex h-full w-full items-center justify-center p-2 text-center font-semibold lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:h-1 lg:after:w-full lg:after:scale-x-0 lg:after:bg-linear-to-r lg:after:transition-transform lg:after:duration-300 lg:after:content-[''] lg:hover:after:block lg:hover:after:scale-x-100"
                  >
                    <span>{link[0]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <InviteButton />
      </div>
    </header>
  );
};
