import React from "react";
import { Icon } from "@src/components/Icon";
import story from "../../.storybook/story";

story("Icon")
  .add("radio", () => (
    <Icon type="icon-radio" />
  ))
  .add("checkbox", () => (
    <Icon type="icon-checkboxoutlineblank" />
  ));
