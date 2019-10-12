import * as React from 'react';
import "./button.scss";
import { IPropsOptinos } from './../../../.storybook/WithKnobs'

export interface IButtonProps {
  disabled?: boolean;
  type?: "primary" | "ghost" | "default";
  onClick?: () => void;
  children?: React.ReactNode;
}

interface IButton {
  (props: IButtonProps): React.ReactNode;
  [propsOptions: string]: IPropsOptinos
}

const Button = ((props) => {
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
}) as IButton;

Button.propsOptions = {
  type: {
    label: "按钮的风格",
    type: "enum",
    default: "primary",
    enum: ["primary", "default"]
  },
  disabled: {
    label: "是否禁用",
    type: "boolean",
    default: false
  },
  children: {
    label: '按钮文字',
    type: 'string',
    default: '按钮'
  }
};

export default Button;