import * as React from "react";
import { useTransition, animated } from "react-spring";

//location icon
import location from "../assets/location.svg";

//fontawesome
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {}
export const Navigation: React.FC<Props> = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const menuTransition = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  //screen
  const screen = (
    <div className="hidden md:block">
      <ul className="flex">
        <li className="mr-8 mt-2 text-sm cursor-pointer hover:text-blue-400">
          Home
        </li>
        <li className="mr-8 mt-2 text-sm cursor-pointer hover:text-blue-400">
          Features
        </li>
        <li className="mr-8 mt-2 text-sm cursor-pointer hover:text-blue-400">
          How it works
        </li>
        <li className="mr-8 mt-2 text-sm cursor-pointer hover:text-blue-400">
          Blog
        </li>
        <li className="mr-12 mt-2 text-sm cursor-pointer hover:text-blue-400">
          About Us
        </li>
      </ul>
    </div>
  );

  const mobile = (
    <div
      className="sm:block md:hidden z-20"
      onClick={() => setShowMenu(!showMenu)}
    >
      <div className="py-2 px-4">
        <span>
          <FontAwesomeIcon size="lg" icon={faBars} />
        </span>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <header className="w-full fixed z-10">
        <div
          style={{ backgroundColor: "#1a3660" }}
          className="text-white w-full flex justify-between py-6"
        >
          {/** logo */}
          <div>
            <div className="px-12 text-3xl flex">
              Saf
              <span>
                <img className="h-8 w-8" src={location} alt="location" />
              </span>
              ri
            </div>
          </div>

          {/** screen */}
          {screen}

          {/** mobile */}
          {mobile}
        </div>
      </header>
      {/** mobile slide */}
      <div className={showMenu ? "block" : "hidden"}>
        {menuTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                style={props}
                key={key}
                className="fixed z-20 shadow-lg top-0 left-0 w-2/3 h-full bg-white text-black"
              >
                <ul className="px-8 mt-24">
                  <li className="mr-8 mt-6 text-sm cursor-pointer hover:text-blue-400">
                    Home
                  </li>
                  <li className="mr-8 mt-8 text-sm cursor-pointer hover:text-blue-400">
                    Features
                  </li>
                  <li className="mr-8 mt-8 text-sm cursor-pointer hover:text-blue-400">
                    How it works
                  </li>
                  <li className="mr-8 mt-8 text-sm cursor-pointer hover:text-blue-400">
                    Blog
                  </li>
                  <li className="mr-12 mt-8 text-sm cursor-pointer hover:text-blue-400">
                    About Us
                  </li>
                </ul>
              </animated.div>
            )
        )}
      </div>
    </React.Fragment>
  );
};

export default Navigation;
