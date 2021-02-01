import * as React from "react";
import "../styles/hero.css";

//stores
import playstore from "../assets/playstore.webp";
import appstore from "../assets/appstore.webp";
import phone from "../assets/phone.webp";

interface Props {}
export const Hero: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <div className="bg-image bg-gradient w-full py-20 flex md:justify-between px-12">
        <div className="mt-44">
          <h3 style={{ color: "#4dbbbd" }} className="text-4xl font-extrabold">
            Travel with new friends
          </h3>
          <h3 style={{ color: "#4dbbbd" }} className="text-4xl font-extrabold">
            taking the same route
          </h3>

          <h4 className="text-white mt-6 font-thin">
            Available on Google Play and Coming to AppStore.
          </h4>
          <div className="flex">
            <span>
              <img
                className="h-32 w-32 object-contain"
                src={playstore}
                alt="playstore"
              />
            </span>
            <span>
              <img
                className="h-32 w-32 object-contain"
                src={appstore}
                alt="appstore"
              />
            </span>
          </div>
        </div>

        <div className="mt-24 hidden md:block">
          <span>
            <img
              style={{ width: "32rem", height: "32rem" }}
              className="object-contain"
              src={phone}
              alt="App"
            />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
