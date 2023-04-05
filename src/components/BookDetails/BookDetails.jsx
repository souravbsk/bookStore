import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  console.log(book);
  const [isTextHide, setTextHide] = useState(false);
  const navigate = useNavigate();
  const {
    url,
    year,
    title,
    subtitle,
    rating,
    publisher,
    price,
    language,
    image,
    desc,
    authors,
  } = book;

  const handleBackToPage = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <div className=" md:px-24 flex flex-col md:flex-row  justify-center border rounded-md ">
        <figure className="w-full h-full flex-1">
          <img className="w-full h-full" src={image} alt="" />
        </figure>
        <div className="flex-1 py-10 md:py-20 px-5 flex flex-col ">
          <div>
            <span className="bg-yellow-400 text-sm text-slate-700  font-medium  rounded-2xl px-4">
              BRAND NEW
            </span>
            <h2 className="text-xl md:text-5xl mb-3 font-bold">{title}</h2>

            <div className="space-y-1">
              <p className="text-sm text-slate-800">Authors: {authors}</p>
              <p className="text-sm text-slate-800">Publisher: {publisher}</p>
              <p className="text-sm text-slate-800">language: {language}</p>
              <p className="text-sm text-slate-800">Year: {year}</p>
              <p className="text-sm text-slate-800">Rating: {rating}</p>
            </div>
          </div>
          <div className="space-y-4 flex-1 mt-5">
            <p className="text-slate-600">
              {isTextHide ? desc : desc.slice(0, 100) + "..."}{" "}
              <span
                className="text-blue-600 font-semibold cursor-pointer"
                onClick={() => setTextHide(!isTextHide)}
              >
                Read more
              </span>
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <button className="bg-blue-400 hover:bg-blue-600 transition-all duration-300 px-6 py-2 font-medium text-white rounded   text-">
                <Link target="_blank" to={url}>
                  {" "}
                  Buy Now
                </Link>
              </button>
              <p className="text-lg font-bold text-slate-700">Price:{price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          onClick={handleBackToPage}
          className="bg-blue-400 hover:bg-blue-600 duration-300 transition-all px-4 py-2 rounded-md text-white font-semibold"
        >
          Back To Shop
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
