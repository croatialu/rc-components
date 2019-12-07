import * as React from "react";
import { Checkbox } from "../components/Checkbox";
import story from "../../.storybook/story";

story("Checkbox")
  .add("default", () => (
    <Checkbox>复选</Checkbox>
  ))
  .add("checked", () => (
    <Checkbox checked>复选</Checkbox>
  ));
