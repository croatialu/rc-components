import React from "react";
import { Rate } from "../components/Rate";
import story from "../../.storybook/story";
import { action } from "@storybook/addon-actions";

story("Rate")
  .add("Rate - 默认", () => (
    <Rate value={2} onChange={action("Rate - onChange")} />
  ))
  .add("Rate - 支持半选", () => (
    <Rate value={2} allowHalf onChange={action("Rate - onChange")} />
  ))
  .add("Rate - 禁用交互", () => (
    <Rate value={2} disabled onChange={action("Rate - onChange")} />
  ));
