/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const InputInputText = ({ className, inputPlaceholderClassName, text = "Placeholder" }) => {
  return (
    <div
      className={`relative w-[320px] h-[56px] bg-white rounded-[3px] overflow-hidden border border-solid border-wireframegrey-0 ${className}`}
    >
      <div
        className={`absolute w-[288px] top-[14px] left-[15px] font-navigation-nav-md font-[number:var(--navigation-nav-md-font-weight)] text-wireframegrey-1 text-[length:var(--navigation-nav-md-font-size)] tracking-[var(--navigation-nav-md-letter-spacing)] leading-[var(--navigation-nav-md-line-height)] [font-style:var(--navigation-nav-md-font-style)] ${inputPlaceholderClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

InputInputText.propTypes = {
  text: PropTypes.string,
};
