import React, { useState, useEffect } from "react";

import "./ARate.scss";

function Icon({
  width = "20px",
  height = "20px",
  color = "orange",
  style = {}
} = {}) {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      data-icon="star"
      width={width}
      height={height}
      fill="currentColor"
      aria-hidden="true"
      style={{ color, ...style }}
    >
      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
    </svg>
  );
}

export interface ARateProps {
  value?: number;
  count?: number;
  allowHalf?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
  onChange?: (value: number) => void;
}
const ARate = (ARateProps: ARateProps) => {
  const {
    value: inputValue = 0,
    count = 5,
    allowHalf = false,
    allowClear = true,
    disabled = false
  } = ARateProps;

  const [lastValue, setLastValue] = useState(inputValue);
  const [value, setValue] = useState(inputValue);

  useEffect(() => {
    // value 受props控制
    setValue(inputValue);
    setLastValue(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (!allowHalf) {
      setLastValue(parseInt(lastValue.toString()));
    }
  }, [allowHalf]);

  const onStarMouseMove = (e: any, index: number) => {
    const v =
      e.clientX - e.currentTarget.offsetLeft > 10 || !allowHalf ? 1 : 0.5;
    const newValue = index + v;
    if (disabled || value === newValue) {
      return;
    }
    setValue(newValue);
  };

  const onStarClick = () => {
    if (disabled) {
      return;
    }
    setLastValue(value);

    if (lastValue === value && allowClear) {
      setLastValue(0);
    }
  };

  const onStarBoxMouseLeave = () => {
    if (disabled) {
      return;
    }
    setValue(lastValue);
  };

  return (
    <div
      className="df"
      style={{ marginLeft: 66 }}
      onMouseLeave={onStarBoxMouseLeave}
    >
      {
        // @ts-ignore
        (new Array(count)).fill("").map((item: string, index: number) => {
        const halfIsActive = index + 1 <= value + 0.5;
        const starIsACtive = index + 1 <= value;

        return (
          <div key={item + index} style={{ marginRight: 5 }}>
            <div
              className="df jsb pr star-event-mask"
              onMouseMove={e => onStarMouseMove(e, index)}
              onClick={onStarClick}
              style={{ cursor: disabled ? "default" : "pointer" }}
            >
              <div className="half-star-box pa l0 t0">
                <Icon color={halfIsActive ? "#ffa500" : "#ccc"} />
              </div>
              <div className="star-box">
                <Icon color={starIsACtive ? "#ffa500" : "#ccc"} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

ARate.propsOptions = {
  value: {
    label: "当前数，受控值",
    type: "number",
    default: 0
  },
  count: {
    label: "star 总数",
    type: "number",
    default: 5
  },
  allowHalf: {
    label: "是否允许半选",
    type: "boolean",
    default: false
  },
  allowClear: {
    label: "是否允许再次点击后清除",
    type: "boolean",
    default: true
  },
  disabled: {
    label: "只读，无法进行交互",
    type: "boolean",
    default: false
  },
  onChange: {
    label: "选择时的回调",
    type: "function",
    default: () => {}
  }
};

export default ARate;
