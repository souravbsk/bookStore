import React from "react";
import errorLottie from "../../assets/404Error.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="container">
      <div>
        <Lottie
          className="md:w-8/12 mx-auto"
          animationData={errorLottie}
          loop={true}
        />
        ;
        <div className="text-center">
          <Link to="/" className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md">Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
