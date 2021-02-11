import React, { useState } from "react";
import "./App.css";
import {
  Top,
  Header,
  Banner,
  MainBody,
  Footer,
  MenuSidebar,
} from "./component";

function App() {
  const [slider, setSlider] = useState(false);

  const handleToggle = () => {
    setSlider(!slider);
  };
  return (
    <div className="app">
      <Top />
      <MenuSidebar toggle={handleToggle} isSlide={slider} />
      <Header toggle={handleToggle} />
     
      <Banner />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
