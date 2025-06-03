import React from "react";

import currency from "../assets/images/image-currency.jpg";
import restaurant from "../assets/images/image-restaurant.jpg";
import plane from "../assets/images/image-plane.jpg";
import confetti from "../assets/images/image-confetti.jpg";

// [image, author, title, description]
const articles = [
  [
    currency,
    "Claire Robinson",
    "Receive money in any currency with no fees",
    `The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...`,
  ],
  [
    restaurant,
    "Wilson Hutton",
    "Treat yourself without worrying about money",
    "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  ],
  [
    plane,
    "Wilson Hutton",
    "Take your Easybank card wherever you go",
    `We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...`,
  ],
  [
    confetti,
    "Claire Robinson",
    "Our invite-only Beta accounts are now live!",
    `After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...`,
  ],
];

const Articles = () => {
  return (
    <div className="flex flex-col gap-12 lg:flex-row">
      {articles.map((article, index) => (
        <a
          key={index}
          href={`/articles/${index}`}
          aria-label={`Read article: ${article[2]}`}
          className="block"
        >
          <div className="overflow-hidden rounded-md bg-white shadow-md">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={article[0]}
                alt={article[2]}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-2 p-4">
              <div>
                <small className="text-gray-blue-dark">By {article[1]}</small>
              </div>
              <h3 className="text-dark-blue text-xl font-semibold">
                {article[2]}
              </h3>
              <p className="text-gray-blue-dark">{article[3]}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export const ArticlesSection = () => {
  return (
    <section className="bg-light-gray">
      <div className="space-y-12 px-4 py-20 lg:py-30">
        <h3 className="text-dark-blue text-center text-4xl font-semibold lg:text-start">
          Latest Articles
        </h3>
        <Articles />
      </div>
    </section>
  );
};
