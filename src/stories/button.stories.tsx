import React from "react";
import { Button } from "@src/components/Button";
import story from "../../.storybook/story";

import { action } from "@storybook/addon-actions";

story("Button")
  .add("primary", () => (
    <Button type="primary" onClick={action("primary click")}>按钮</Button>
  ))
  .add("default", () => (
    <Button type="default" onClick={action("default click")}>按钮</Button>
  ))
  .add("disabled", () => (
    <Button disabled onClick={action("disabled click")}>按钮</Button>
  ));
