import React from "react";
import { useState } from "react";

const Carousal = ({ images }) => {
  const [active, setActive] = useState(0);

  const previousSlide = () => {
    setActive((prevIndex) => {
     return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
  };

  const nextSlide = () => {
    setActive((prevIndex) => {
     return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
  };
  return (
    <>
      <button onClick={previousSlide}>&lt;</button>
      <img src={images[active]} alt={`slide ${active}`}></img>
      <button onClick={nextSlide}>&gt;</button>
    </>
  );
};

export default Carousal;
