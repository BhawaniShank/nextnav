import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import b2 from "../../assets/HomeImg/buildcon.jpg";

const reviews = [
  {
    name: "Cheyenne Donin",
    role: "Visitor, Curator",
    image: b2,
    text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
  },
  {
    name: "Angel Bergson",
    role: "Visitor, Curator",
    image: b2,
    text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
  },
  {
    name: "Erin Baptista",
    role: "Visitor, Curator",
    image: b2,
    text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
  },
  {
    name: "John Kastom",
    role: "Visitor, Curator",
    image: b2,
    text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
  },
  {
    name: "Kale Dalson",
    role: "Visitor, Curator",
    image: b2,
    text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
  },
  {
    name: "Jake Matson",
    role: "Visitor, Curator",
    image: b2,
    text: "Contra exceeded our expectations in every way. From the initial planning stages to the final walkthrough, their dedication to quality was evident. Our dream home wouldn't have been possible without them."
  }
];

const SerComp1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dynamically set the number of cards to display based on screen size
  const cardsPerView = () => {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2; // md
    return 1; // sm
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - cardsPerView() : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView() >= reviews.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container max-w-[120em] mx-auto bg-[#273236] px-4 py-8 lg:py-16 relative">
      <div className="absolute w-full 2xl:max-h-[25em] h-[40vh] inset-0 top-0 -z-10 bg-[#283337]">
        <div className="absolute inset-0 flex justify-between max-w-[110em] mx-auto z-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-[1px] h-full opacity-20"></div>
          ))}
        </div>
      </div>

      <div className="text-white flex justify-center flex-col text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Reviews of Our <br /> Services
        </h1>
        <p className="text-base md:text-lg">
          Our clients are at the center of everything we do. We consider each
          project not just a construction endeavor, but a collaborative journey
          with you.
        </p>
      </div>

      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <button
          onClick={handlePrev}
          className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition duration-300"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="overflow-hidden w-full mx-4 relative">
          <div
            className="flex gap-2 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / cardsPerView())
              }%)`
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 bg-white flex-none w-full md:w-1/2 lg:w-1/3"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-400 mr-1"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm md:text-base mb-4">
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={review.image}
                    alt={`Profile picture of ${review.name}`}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-bold text-sm md:text-base">
                      {review.name}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition duration-300"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default SerComp1;
