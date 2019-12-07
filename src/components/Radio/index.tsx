import React from "react";
import { RadioProps } from "./interface";
import { Icon } from "./../Icon";
import "./style.scss";

export const Radio: React.FC<RadioProps> = ({
  checked,
  disabled,
  onChange,
  children,
  layout = 'inline',
}) => {
  return (
    <label
      className={`rc-radio ${disabled ? "disabled" : ""} ${layout}`}
      onClick={() => disabled || checked || onChange && onChange(true)}
    >
      <Icon
        type={`${checked ? "icon-radioactive" : "icon-radio"}`}
        size={26}
        color={checked ? "#1890ff" : "#d9d9d9"}
        style={{ verticalAlign: "middle" }}
      />
      <span className="label-text">{children}</span>
    </label>
  );
};
