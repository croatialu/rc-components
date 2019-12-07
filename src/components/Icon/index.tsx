import React from "react";
import "./../../icon/iconfont.css";
import { IconProps } from "./interface";

export const Icon: React.FC<IconProps> = ({
  type,
  size = 16,
  color = "#000",
  style,
  className
}) => {
  return (
    <i
      className={`iconfont ${type} ${className}`}
      style={{ ...(style || {}), fontSize: size, color }}
    ></i>
  );
};
