import React from "react";

import banking from "../assets/images/icon-online.svg";
import budgeting from "../assets/images/icon-budgeting.svg";
import boarding from "../assets/images/icon-onboarding.svg";
import api from "../assets/images/icon-api.svg";

// [icon, title, description]
const features = [
  [
    banking,
    "Online Banking",
    "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  ],
  [
    budgeting,
    "Simple Budgeting",
    `See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.`,
  ],
  [
    boarding,
    "Fast Onboarding",
    `We don't do branches. Open your account in minutes online and start taking control of your finances right away.`,
  ],
  [
    api,
    "Open API",
    "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  ],
];

const Features = () => {
  return (
    <div className="flex flex-col gap-12 text-center lg:flex-row lg:text-start">
      {features.map((feature, index) => (
        <div key={index} className="space-y-4">
          <div aria-hidden="true">
            <img
              src={feature[0]}
              alt={feature[1]}
              className="mx-auto lg:mx-0"
            />
          </div>
          <h3 className="text-dark-blue text-xl font-semibold">{feature[1]}</h3>
          <p className="text-gray-blue-dark">{feature[2]}</p>
        </div>
      ))}
    </div>
  );
};

console.log(Features);

export const FeatureSection = () => {
  return (
    <section className="bg-gray-blue-light">
      <div className="flex flex-col items-center gap-12 p-4 py-20 lg:items-start lg:py-30">
        <div className="space-y-4 text-center lg:max-w-xl lg:text-start">
          <h2 className="text-dark-blue text-4xl font-semibold">
            Why choose EasyBank?
          </h2>
          <p className="text-gray-blue-dark">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <Features />
      </div>
    </section>
  );
};
