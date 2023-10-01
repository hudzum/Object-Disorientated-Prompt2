/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconMinus } from "../../icons/IconMinus";
import { IconPlus } from "../../icons/IconPlus";

export const InputInputSpin = ({
  className,
  overlapGroupClassName,
  inputInputTextClassName,
  inputPlaceholderClassName,
  text = "1",
  iconMinusStyleOverrideClassName,
  iconMinusColor = "#111111",
  iconPlusStyleOverrideClassName,
  iconPlusColor = "#111111",
}) => {
  return (
    <div
      className={`w-[140px] h-[56px] bg-white rounded-[3px] border border-solid border-wireframegrey-0 ${className}`}
    >
      <div className={`relative h-[56px] ${overlapGroupClassName}`}>
        <div className={`absolute w-[140px] h-[56px] top-0 left-0 ${inputInputTextClassName}`}>
          <div
            className={`absolute w-[108px] top-[15px] left-[16px] font-navigation-nav-md font-[number:var(--navigation-nav-md-font-weight)] text-wireframegrey-1 text-[length:var(--navigation-nav-md-font-size)] text-center tracking-[var(--navigation-nav-md-letter-spacing)] leading-[var(--navigation-nav-md-line-height)] [font-style:var(--navigation-nav-md-font-style)] ${inputPlaceholderClassName}`}
          >
            {text}
          </div>
        </div>
        <IconMinus className={iconMinusStyleOverrideClassName} color={iconMinusColor} />
        <IconPlus className={iconPlusStyleOverrideClassName} color={iconPlusColor} />
      </div>
    </div>
  );
};

InputInputSpin.propTypes = {
  text: PropTypes.string,
  iconMinusColor: PropTypes.string,
  iconPlusColor: PropTypes.string,
};
