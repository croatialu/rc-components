import * as React from 'react';
import "./style.scss";
import { ButtonProps } from './interface'

export const Button: React.FC<ButtonProps> = (props) => {
  const { type = "default", disabled = false, onClick, children } = props;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button-base ${disabled ? "disabled" : type}`}
    >
      {children}
    </button>
  );
};
