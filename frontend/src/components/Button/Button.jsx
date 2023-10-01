/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Button = ({ property1, className }) => {
  return (
    <button
      className={`w-[78px] h-[56px] rounded-[3px] relative all-[unset] box-border ${
        property1 === "variant-2" ? "bg-[#d18744]" : "bg-[#613e1e]"
      } ${className}`}
    >
      <div className="[font-family:'Poppins',Helvetica] w-[52px] left-[13px] tracking-[0] text-[20px] top-[8px] text-white h-[32px] font-bold text-center leading-[0.1px] absolute">
        Add
      </div>
    </button>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
