import React from "react";
import Carousal from './components/carousal'

function App() {
  const images = [
    "https://via.placeholder.com/800x400/ff5733/fff",
    "https://via.placeholder.com/800x400/33ff57/fff",
    "https://via.placeholder.com/800x400/5733ff/fff",
  ];

  return (
    <>
     <Carousal images={images}/>
    </>
  )
}

export default App
