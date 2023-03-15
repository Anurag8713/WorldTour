import React from "react";
import css from "./index.css";



function Box(props) {
  return (
    <div className="box-container">
      <div>
      <a href="https://bahaihouseofworship.in/"><img src={props.img} className="box-image"></img></a>
      <h3 className="img-name">{props.name}</h3>
      <h4 className="img-place">{props.place}</h4>
      </div>
      
    </div>
  )
}


export default Box;