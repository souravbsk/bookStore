import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import homeLottie from "../../assets/HomeLottie.json";

const Home = () => {
  return (
    <section className="container">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-7">
        <div className="flex-1 space-y-6">
          <span className="bg-yellow-400 text-sm font-medium px-3 rounded-full">
            ON SALE!
          </span>
          <h1 className="md:text-5xl text-3xl font-semibold">
            A reader lives a thousand lives{" "}
            <span className="text-blue-500">before he dies</span>
          </h1>
          <p>
            Books are a uniquely portable magic. Books serve to show a man that
            those original thoughts of his aren’t very new after all. The man
            who does not read good books is no better than the man who can’t.
          </p>
          <div className="flex items-center gap-2">
            <Link to="/books">
              <button className="bg-blue-400 hover:bg-blue-600 duration-150 transition-all text-white font-medium text-base flex items-center gap-2 px-6 py-3 rounded-md">
                <span>Visit Store</span>
                <ShoppingCartIcon className="w-6 h-6"></ShoppingCartIcon>
              </button>
            </Link>
            <Link className="text-lg font-medium hover:text-blue-600 text-slate-600">
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Lottie animationData={homeLottie} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Home;
