import * as React from "react";
import "../styles/features.css";

//icons
import route from "../assets/route.svg";
import travel from "../assets/travel.svg";
import shield from "../assets/shield.svg";
import destination from "../assets/destination.svg";

interface Props {}
export const Features: React.FC<Props> = () => {
  return (
    <div className="mt-16 mb-12 text-center">
      <h2 style={{ color: "#1a3660" }} className="text-3xl font-bold mt-24">
        Features
      </h2>
      <p className="mt-12 text-gray-400 px-6">
        We offer a cost-effective and convenient alternative to travel by
        connecting you with other travelers taking the same route
      </p>

      <div className="mt-32 md:flex justify-around m-16 mb-20">
        <div className="cards py-8 px-8 hover:text-white rounded-3xl mr-3">
          <div className="flex justify-center mb-4">
            <span>
              <img className="h-24 w-24" src={route} alt="" />
            </span>
          </div>
          <div className="md:px-12">
            <h2 className="font-bold text-lg mt-4 mb-4">Smart</h2>
            <p className="text-gray-500 font-light">
              Our app intelligently matches drivers to passengers taking the
              same route
            </p>
          </div>
        </div>

        <div className="cards py-8 px-8 hover:text-white rounded-3xl mr-3">
          <div className="flex justify-center mb-4">
            <span>
              <img className="h-24 w-24" src={destination} alt="" />
            </span>
          </div>
          <div className="md:px-12">
            <h2 className="font-bold text-lg mt-4 mb-4">Simple</h2>
            <p className="text-gray-500 font-light">
              Enter your location and destination. Select your driver and book a
              seat.
            </p>
          </div>
        </div>

        <div className="cards py-8 px-8 hover:text-white rounded-3xl mr-3">
          <div className="flex justify-center mb-4">
            <span>
              <img className="h-24 w-24" src={travel} alt="" />
            </span>
          </div>
          <div className="md:px-12">
            <h2 className="font-bold text-lg mt-4 mb-4">Convenient</h2>
            <p className="text-gray-500 font-light">
              Get to your destination without going to the park through the
              congested city
            </p>
          </div>
        </div>

        <div className="cards py-8 px-8 hover:text-white rounded-3xl">
          <div className="flex justify-center mb-4">
            <span>
              <img className="h-24 w-24" src={shield} alt="" />
            </span>
          </div>
          <div className="md:px-12">
            <h2 className="font-bold text-lg mt-4 mb-4">Secure</h2>
            <p className="text-gray-500 font-light">
              Every member’s account is verified with their phone number and ID
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
