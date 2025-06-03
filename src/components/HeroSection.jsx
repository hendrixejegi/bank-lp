import React from "react";
import { useIsMobile } from "../lib/hooks";
import { InviteButton } from "./NavBar";

import mockups from "../assets/images/image-mockups.png";

export function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section
      data-mobile={isMobile}
      className="bg-light-gray hero-image-container"
    >
      <div className="flex-col items-center justify-between pb-20 lg:flex-row-reverse lg:py-40">
        <div className="overflow-hidden lg:absolute lg:top-0 lg:right-0 lg:translate-x-9/50">
          <img
            src={mockups}
            alt="Three smartphones displaying various app interfaces side by side on a neutral background."
            className="-mt-34 p-4 lg:-mt-10 lg:p-0"
          />
        </div>
        <div className="space-y-8 p-4 text-center lg:mr-auto lg:max-w-[430px] lg:text-start">
          <h1 className="text-dark-blue text-4xl font-semibold">
            Next generation digital banking
          </h1>
          <p className="text-dark text-gray-blue-dark">
            Take your financial life online. Your Easybank. account will be a
            one-stop shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <InviteButton styles="flex mx-auto" />
        </div>
      </div>
    </section>
  );
}
