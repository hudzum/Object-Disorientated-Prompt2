/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Cake = ({
  className,
  overlapGroupClassName,
  vectorClassName,
  vector = "/img/vector-585-13.svg",
  subtractClassName,
  subtract = "/img/subtract-13.svg",
  vectorClassNameOverride,
  img = "/img/vector-586-13.svg",
  ellipseClassName,
}) => {
  return (
    <div className={`w-[119px] h-[119px] bg-[#fff2da] rotate-[-33.36deg] ${className}`}>
      <div className={`relative w-[108px] h-[123px] top-[4px] left-[6px] ${overlapGroupClassName}`}>
        <img
          className={`absolute w-[59px] h-[53px] top-[57px] left-[23px] rotate-[33.36deg] ${vectorClassName}`}
          alt="Vector"
          src={vector}
        />
        <img
          className={`absolute w-[82px] h-[71px] top-[22px] left-[13px] rotate-[33.36deg] ${subtractClassName}`}
          alt="Subtract"
          src={subtract}
        />
        <img
          className={`absolute w-[16px] h-[23px] top-[3px] left-[60px] rotate-[33.36deg] ${vectorClassNameOverride}`}
          alt="Vector"
          src={img}
        />
        <div
          className={`absolute w-[30px] h-[30px] top-[11px] left-[38px] rounded-[15px] border-[10px] border-solid border-[#db4242] ${ellipseClassName}`}
        />
      </div>
    </div>
  );
};

Cake.propTypes = {
  vector: PropTypes.string,
  subtract: PropTypes.string,
  img: PropTypes.string,
};
