import * as React from "react";
import board from "../assets/board.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";

interface Props {}
export const Faq: React.FC<Props> = () => {
  const [first, setFirst] = React.useState<boolean>(true);
  const [second, setSecond] = React.useState<boolean>(false);
  const [third, setThird] = React.useState<boolean>(false);
  const [fourth, setFourth] = React.useState<boolean>(false);
  const [fifth, setFifth] = React.useState<boolean>(false);

  //transitions

  /**first */
  const firstTransition = useTransition(first, null, {
    from: { opacity: 0, transform: "translateY(-10%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%%)" },
  });

  /**second */
  const secondTransition = useTransition(second, null, {
    from: { opacity: 0, transform: "translateY(-10%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%%)" },
  });

  /**first */
  const thirdTransition = useTransition(third, null, {
    from: { opacity: 0, transform: "translateY(-10%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%%)" },
  });

  /**first */
  const fourthTransition = useTransition(fourth, null, {
    from: { opacity: 0, transform: "translateY(-10%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%%)" },
  });

  /**first */
  const fifthTransition = useTransition(fifth, null, {
    from: { opacity: 0, transform: "translateY(-10%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%%)" },
  });

  return (
    <div className="mt-16 mb-12 text-center">
      <h2 style={{ color: "#1a3660" }} className="text-3xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="flex w-full">
        <div className="hidden md:block md:w-1/2">
          <span>
            <img src={board} alt="" />
          </span>
        </div>

        {/**questions */}
        <div className="sm:w-full md:w-1/2 mt-12 px-8 py-6 text-center">
          <div
            style={{ backgroundColor: "#4dbbbd" }}
            className="mb-3 rounded-lg"
          >
            <h2
              onClick={() => {
                setFirst(true);
                setSecond(false);
                setThird(false);
                setFourth(false);
                setFifth(false);
              }}
              className="font-semibold text-white py-3 sm:text-xs md:text-xl md:flex justify-between cursor-pointer"
            >
              <span className="md:mr-12 sm:px-4 md:px-8">
                How does it work?
              </span>
              <span className="px-8 hidden md:block">
                <FontAwesomeIcon size="lg" icon={faAngleDown} />
              </span>
            </h2>
            <div className={first ? "block" : "hidden"}>
              {firstTransition.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.p
                      key={key}
                      style={props}
                      className="px-12 py-12 text-gray-100 shadow-lg rounded-lg"
                    >
                      Our platform analyses and compares trips posted by
                      thousands of drivers to find the perfect one for you
                    </animated.p>
                  )
              )}
            </div>
          </div>
          <div
            style={{ backgroundColor: "#4dbbbd" }}
            className="mb-3 rounded-lg"
          >
            <h2
              onClick={() => {
                setFirst(false);
                setSecond(true);
                setThird(false);
                setFourth(false);
                setFifth(false);
              }}
              className="font-semibold text-white py-3 sm:text-xs md:text-xl md:flex justify-between cursor-pointer"
            >
              <span className="md:mr-12 sm:px-4 md:px-8">
                Where will I meet the driver?
              </span>
              <span className="px-8 hidden md:block">
                <FontAwesomeIcon size="lg" icon={faAngleDown} />
              </span>
            </h2>
            <div className={second ? "block transition" : "hidden"}>
              {secondTransition.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.p
                      style={props}
                      key={key}
                      className="px-12 py-12 text-gray-100 shadow-lg rounded-lg"
                    >
                      You will meet the driver on the agreed meeting point.
                      After you have been matched, the driver will call you.
                    </animated.p>
                  )
              )}
            </div>
          </div>

          <div
            style={{ backgroundColor: "#4dbbbd" }}
            className="mb-3 rounded-lg"
          >
            <h2
              onClick={() => {
                setFirst(false);
                setSecond(false);
                setThird(true);
                setFourth(false);
                setFifth(false);
              }}
              className="font-semibold text-white py-3 sm:text-xs md:text-xl md:flex justify-between cursor-pointer"
            >
              <span className="md:mr-12 sm:px-4 md:px-8">
                How much does it cost?
              </span>
              <span className="px-8 hidden md:block">
                <FontAwesomeIcon size="lg" icon={faAngleDown} />
              </span>
            </h2>
            <div className={third ? "block transition" : "hidden"}>
              {thirdTransition.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.p
                      style={props}
                      key={key}
                      className="px-12 py-12 text-gray-100 shadow-lg rounded-lg"
                    >
                      It will be a flat rate per kilometre and an estimated cost
                      of your journey will be displayed on your screen before
                      the request for the trip is made.
                    </animated.p>
                  )
              )}
            </div>
          </div>

          <div
            style={{ backgroundColor: "#4dbbbd" }}
            className="mb-3 rounded-lg"
          >
            <h2
              onClick={() => {
                setFirst(false);
                setSecond(false);
                setThird(false);
                setFourth(true);
                setFifth(false);
              }}
              className="font-semibold text-white py-3 sm:text-xs md:text-xl md:flex justify-between cursor-pointer"
            >
              <span className="md:mr-12 sm:px-4 md:px-8">How do I pay?</span>
              <span className="px-8 hidden md:block">
                <FontAwesomeIcon size="lg" icon={faAngleDown} />
              </span>
            </h2>
            <div className={fourth ? "block transition" : "hidden"}>
              {fourthTransition.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.p
                      style={props}
                      key={key}
                      className="px-12 py-12 text-gray-100 shadow-lg rounded-lg"
                    >
                      You can pay by cash, MTN Mobile Money or Airtel Money.
                    </animated.p>
                  )
              )}
            </div>
          </div>

          <div
            style={{ backgroundColor: "#4dbbbd" }}
            className="mb-3 rounded-lg"
          >
            <h2
              onClick={() => {
                setFirst(false);
                setSecond(false);
                setThird(false);
                setFourth(false);
                setFifth(true);
              }}
              className="font-semibold text-white py-3 sm:text-xs md:text-xl md:flex justify-between cursor-pointer"
            >
              <span className="md:mr-12 sm:px-4 md:px-8">
                How do I ensure my safety?
              </span>
              <span className="px-8 hidden md:block">
                <FontAwesomeIcon size="lg" icon={faAngleDown} />
              </span>
            </h2>
            <div className={fifth ? "block transition" : "hidden"}>
              {fifthTransition.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.p
                      style={props}
                      key={key}
                      className="px-12 py-12 text-gray-100 shadow-lg rounded-lg"
                    >
                      We advise you to travel with only approved drivers and
                      cars. Do not use any car which you never ordered for.
                      Always cross-check the car and driver details. They should
                      be the same as those in our system. Agree to meet with the
                      driver in public spaces
                    </animated.p>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
