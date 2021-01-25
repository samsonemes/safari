import * as React from "react";

interface Props {}
export const HowItWorks: React.FC<Props> = () => {
  return (
    <div className="bg-gray-100 mt-3 text-center">
      <h2 style={{ color: "#1a3660" }} className="text-3xl font-bold py-16">
        How It Works
      </h2>

      <div className="flex justify-evenly">
        <div className="text-lg md:flex justify-between">
          <div>
            <ol className="py-8 px-12">
              <h3
                style={{ color: "#1a3660" }}
                className="text-2xl font-bold mb-16 text-left"
              >
                For Traveler
              </h3>
              <li className="md:flex btns">
                <div className="text-2xl md:mr-8 font-light border rounded-full border-green-400 md:px-5 md:py-5 btn">
                  01
                </div>
                <div className="text-xl text-gray-500 font-semibold mt-3">
                  Enter your location and destination
                </div>
              </li>
              <li className="md:flex mt-6 btns">
                <div className="text-2xl md:mr-8 font-light border rounded-full border-green-400 md:px-5 md:py-5 btn">
                  02
                </div>
                <div className="text-xl text-gray-500 font-semibold mt-3">
                  Select a driver and book your seat
                </div>
              </li>

              <li className="md:flex mt-6 btns">
                <div className="text-2xl md:mr-8 font-light border rounded-full border-green-400 md:px-5 md:py-5 btn">
                  03
                </div>
                <div className="text-xl text-gray-500 font-semibold mt-3">
                  Get picked up and dropped off along your route
                </div>
              </li>
            </ol>
          </div>

          <div>
            <ol className="py-8 px-12">
              <h3
                style={{ color: "#1a3660" }}
                className="text-2xl font-bold mb-16 text-left"
              >
                For Driver
              </h3>
              <li className="md:flex btns">
                <div className="text-2xl md:mr-8 font-light border rounded-full border-green-400 md:px-5 md:py-5 btn">
                  01
                </div>
                <div className="text-xl text-gray-500 font-semibold mt-3">
                  Post your trip ahead of time
                </div>
              </li>
              <li className="md:flex mt-6 btns">
                <div className="text-2xl md:mr-8 font-light border rounded-full border-green-400 md:px-5 md:py-5 btn">
                  02
                </div>
                <div className="text-xl text-gray-500 font-semibold mt-3">
                  Accept requests from people you want to travel with
                </div>
              </li>

              <li className="md:flex mt-6 btns">
                <div className="text-2xl md:mr-8 font-light border rounded-full border-green-400 md:px-5 md:py-5 btn">
                  03
                </div>
                <div className="text-xl text-gray-500 font-semibold mt-3">
                  Pick up, drop off and get paid
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
