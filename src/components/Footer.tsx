import * as React from "react";

// stores
import appstore from "../assets/appstore.webp";
import playstore from "../assets/playstore.webp";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

interface Props {}
export const Footer: React.FC<Props> = () => {
  return (
    <div style={{ backgroundColor: "#1a3660" }} className="py-12">
      <h3 className="text-white px-6 text-center font-semibold text-2xl">
        Available on PlayStore and coming soon AppStore.
      </h3>
      {/** playstore & appstore */}
      <div className="flex justify-center">
        <div>
          <img
            className="h-32 w-32 object-contain"
            src={playstore}
            alt="playstore"
          />
        </div>

        <div>
          <img
            className="h-32 w-32 object-contain"
            src={appstore}
            alt="appstore"
          />
        </div>
      </div>
      {/** social links */}
      <div className="flex justify-center">
        <span className="mr-8">
          <a href="https://twitter.com/share_safari">
            <FontAwesomeIcon size="2x" color="white" icon={faTwitter} />
          </a>
        </span>
        <span className="mr-8">
          <a href="https://www.instagram.com/safarishareapp">
            <FontAwesomeIcon size="2x" color="white" icon={faInstagram} />
          </a>
        </span>
        <span className="mr-8">
          <a href="https://www.facebook.com/safarishareapp/">
            <FontAwesomeIcon size="2x" color="white" icon={faFacebook} />
          </a>
        </span>
      </div>
      {/** official page */}
      <h3 className="text-gray-500 px-6 mt-3 text-center font-semibold text-sm">
        official page{" "}
        <a className="text-white" href="https://safarishare.co">
          www.safarishare.co
        </a>
      </h3>
      {/** safari share */}
      <div className="md:flex justify-center text-center text-gray-300 mt-12 py-8 px-8">
        <div className="mr-6">
          <h4>© 2021 SafariShare is a product of Voyage Technologies Ltd</h4>
        </div>

        <div className="mr-6 hidden md:block">
          <span>|</span>
        </div>

        <div className="sm:mt-12 md:mt-0">
          <h4 className="text-gray-500">
            re-created by{" "}
            <a className="text-white" href="http://www.samsonemes.me">
              samsonemes
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
