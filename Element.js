import React from "react";
import Box from "./App";
import Css from "./index.css";

function Image() {
  return (
    <div className="Image-container">
       <Box
       name = "Taj Mahal"
       place = "Agra"
       img ="./images/Taj-mahal.jpg"
       
        />
       <Box 
        name = "Qutub Minar"
        place = "Delhi"
        img ="./images/qutab-minar.jpg"
       />
       <Box 
        name = "Lotus temple"
        place = "Agra"
        img ="./images/stringio.jpg"
       />
       <Box 
        name = "Bhurjkalifa"
        place = "Dubai"
        img ="./images/bhurj.jpg"
       />
    </div>
  )
}
export default Image;