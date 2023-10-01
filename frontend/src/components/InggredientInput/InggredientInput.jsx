/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { InputInputText } from "../InputInputText";

export const InggredientInput = ({
  className,
  somethigClassName,
  inputInputTextInputPlaceholderClassName,
  inputInputTextInputInputTextClassName,
  inputInputTextText = "Add ingredient...",
}) => {
  return (
    <div className={`flex flex-col w-[242px] items-start gap-[16px] relative ${className}`}>
      <div className={`relative self-stretch w-full h-[56px] ${somethigClassName}`}>
        <InputInputText
          className={inputInputTextInputInputTextClassName}
          inputPlaceholderClassName={inputInputTextInputPlaceholderClassName}
          text={inputInputTextText}
        />
      </div>
    </div>
  );
};

InggredientInput.propTypes = {
  inputInputTextText: PropTypes.string,
};
