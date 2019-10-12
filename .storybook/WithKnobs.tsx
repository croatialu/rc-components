import React from "react";
import {
  text,
  boolean,
  select,
  number
} from "@storybook/addon-knobs";

export interface IPropItem {
  label: string;
  type: "number" | "string" | "boolean" | "enum";
  default: number | string | boolean;
  enum?: string[];
}

export interface IPropsOptinos {
  [key: string]: IPropItem;
}

export const getPropsItemData = (propItem: IPropItem) => {
  const { label, default: defaultValue, enum: enumArr } = propItem;
  switch (propItem.type) {
    case "number":
      return number(label, defaultValue as number);
    case "string":
      return text(label, defaultValue as string);
    case "boolean":
      return boolean(label, defaultValue as boolean);
    case "enum":
      return select(label, enumArr as string[], defaultValue as string);
  }
};

export const getNewPropsData = (propsOptions: IPropsOptinos) => {
  return Object.keys(propsOptions).reduce((pre, key, index) => {
    const currentItem = propsOptions[key];
    return {
      ...pre,
      [key]: getPropsItemData(currentItem)
    };
  }, {});
};

type TPropsType = "default" | "new";
const getPropsValue = (RcComponent: { propsOptions: any; }, type: TPropsType) => {
  const componentPropsOptions = RcComponent.propsOptions;

  return Object.keys(componentPropsOptions).reduce((pre, key, index) => {
    const currentItem = componentPropsOptions[key];
    return {
      ...pre,
      [key]:
        type === "new" ? getPropsItemData(currentItem) : currentItem.default
    };
  }, {});
};

export const getPropsValueFromKnobs = (RcComponent: { propsOptions: any; }) => {
  return getPropsValue(RcComponent, "new");
};

export const getDefaultPropsValue = (RcComponent: { propsOptions: any; }) => {
  return getPropsValue(RcComponent, "default");
};

export default (RcComponent: any) => {
  return (props: { [x: string]: any; hasKnobs?: any; }) => {
    const { hasKnobs, ...otherProps } = props;

    let newProps = hasKnobs ? getPropsValueFromKnobs(RcComponent) : getDefaultPropsValue(RcComponent);
    
    return (
      <div>
        <RcComponent {...newProps} {...otherProps}  />
      </div>
    );
  };
};
