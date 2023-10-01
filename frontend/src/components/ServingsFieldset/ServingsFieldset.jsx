/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { InputInputSpin } from "../InputInputSpin";

export const ServingsFieldset = ({ className, text = "Servings", inputInputSpinText = "1" }) => {
  return (
    <div className={`flex flex-col w-[140px] items-start gap-[16px] relative ${className}`}>
      <div className="relative self-stretch mt-[-1.00px] font-navigation-nav-md-act font-[number:var(--navigation-nav-md-act-font-weight)] text-[#613e1e] text-[length:var(--navigation-nav-md-act-font-size)] tracking-[var(--navigation-nav-md-act-letter-spacing)] leading-[var(--navigation-nav-md-act-line-height)] [font-style:var(--navigation-nav-md-act-font-style)]">
        {text}
      </div>
      <InputInputSpin
        className="!self-stretch !border-[#613e1e] !h-[48px] !relative !w-full"
        iconMinusColor="#613E1E"
        iconMinusStyleOverrideClassName="!absolute !w-[20px] !h-[20px] !top-[14px] !left-[12px]"
        iconPlusColor="#613E1E"
        iconPlusStyleOverrideClassName="!absolute !w-[20px] !h-[20px] !top-[14px] !left-[108px]"
        inputInputTextClassName="!h-[48px]"
        inputPlaceholderClassName="!text-[#613e1e] !top-[11px]"
        overlapGroupClassName="!h-[48px] !w-[140px]"
        text={inputInputSpinText}
      />
    </div>
  );
};

ServingsFieldset.propTypes = {
  text: PropTypes.string,
  inputInputSpinText: PropTypes.string,
};
