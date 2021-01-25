import * as React from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

interface Props {}
export const App: React.FC<Props> = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
