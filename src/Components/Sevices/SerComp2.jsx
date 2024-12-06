import React from "react";
import Comp2 from "./Comp2";
import b1 from '../../assets/HomeImg/b1.jpeg'
const services = [
  { 
    title: "Welding Works", 
    description: "Expert welding services for industrial projects.",
    image: b1 
  },
  { 
    title: "General Building", 
    description: "Comprehensive building services for all your needs.",
    image: b1
  },
  { 
    title: "Construction Build", 
    description: "Construction build begins with transforming ideas into detailed plans.",
    image:b1 
  },
  { 
    title: "Interior Design", 
    description: "Creative interior design solutions for any space.",
    image: b1
  },
  { 
    title: "Mechanical Works", 
    description: "High-quality mechanical works for various applications.",
    image: b1
  },
  { 
    title: "Factory Design", 
    description: "Efficient factory design for optimized production flow.",
    image: b1
  }
];

const SerComp2 = () => {
  return (
    <div>
      <div className="relative max-w-[120em] mx-auto">
        {/* Background Image Section */}
        <div className="relative">
          <img
            src="https://picsum.photos/1920/600"
            alt="City skyline with buildings covered in fog"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-start pl-10 md:pl-24 lg:pl-44 ">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#00215b]">
              Achievement
            </h1>
            <p className="text-lg text-gray-700 mt-2">Home / Achievement</p>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="absolute -bottom-10 md:right-20 right-3 w-4/6 sm:w-2/6 md:w-2/6 bg-white shadow-lg p-6 border-t-4 border-blue-900 rounded-md">
          <div className="pt-2">
            <p className="text-gray-500">Call Us Today</p>
            <p className="text-2xl font-bold text-blue-900">+ 1634 7638 654</p>
          </div>
        </div>
      </div>

      <Comp2 />

      <div className="container mt-28 mx-auto max-w-[110em] md:pl-[5em] lg:pl-[7em]  p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg transform transition duration-300 group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-center p-4">
                <h2 className="text-white text-2xl font-bold mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-white font-semibold flex items-center"
                >
                  Read More <span className="ml-2">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SerComp2;
