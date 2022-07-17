import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img src="/images/new/chronic_yield.png" style={{"paddingRight":"10px", "height":"35px"}}/>
  );
};

export default Icon;
