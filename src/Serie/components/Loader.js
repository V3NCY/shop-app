import React from "react";
import loaderSrc from "../assets/loader.gif";
import "../../index";

const Loader = (props) => (
  <div>
    <img alt="Loading Icon" className="loader" src={loaderSrc} />
  </div>
);

export default Loader;
