import React from "react";
import { Checkbox } from "@src/components/Checkbox";
import story from "../../.storybook/story";

story("Checkbox")
  .add("default", () => (
    <Checkbox>复选</Checkbox>
  ))
  .add("checked", () => (
    <Checkbox checked>复选</Checkbox>
  ));
