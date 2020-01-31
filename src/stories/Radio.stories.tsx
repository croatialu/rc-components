import React from "react";
import { Radio } from "@src/components/Radio";
import story from "../../.storybook/story";

story("Radio")
  .add("default", () => (
    <Radio>单选</Radio>
  ))
  .add("checked", () => (
    <Radio checked>单选</Radio>
  ));
