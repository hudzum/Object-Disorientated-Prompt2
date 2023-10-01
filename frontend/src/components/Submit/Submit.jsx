/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Submit = ({ state, className }) => {
  return (
    <div className={`inline-flex flex-col items-start relative ${className}`}>
      <div
        className={`w-[300px] flex flex-col items-center gap-[10px] p-[20px] h-[78px] rounded-[3px] relative ${
          state === "clicked" ? "bg-[#ab5f19]" : "bg-[#613e1e]"
        }`}
      >
        <div className="inline-flex items-center gap-[10px] flex-[0_0_auto] relative">
          <div className="[font-family:'Poppins',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[38px] text-wireframewhite [text-shadow:0px_4px_4px_#00000040] font-bold leading-[36px] whitespace-nowrap relative">
            GEAUX BAKE!
          </div>
        </div>
      </div>
    </div>
  );
};

Submit.propTypes = {
  state: PropTypes.oneOf(["clicked", "default"]),
};
