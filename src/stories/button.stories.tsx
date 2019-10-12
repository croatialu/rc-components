import * as React from "react";
import Button from '../components/button'
import story from '../../.storybook/story';

import { action } from '@storybook/addon-actions'
import WithKnobs from '../../.storybook/WithKnobs';
// story('Button')
//   .add('default - 默认', () => <Button /> )
//   .add('primary - 主按钮', () => <Button  /> )
//   .add('disabled - 禁用', () => <Button /> )
//   .add('variable button', () => <WithComponent />)
const ButtonWithKnobs = WithKnobs(Button);
story("Button")
  .add("primary", () => <ButtonWithKnobs  type='primary' onClick={action('primary click')}></ButtonWithKnobs>)
  .add("default", () => <ButtonWithKnobs type='default' onClick={action('default click')} ></ButtonWithKnobs>)
  .add("disabled", () => <ButtonWithKnobs disabled onClick={action('disabled click')}></ButtonWithKnobs>)
  .add("variable button", () => <ButtonWithKnobs hasKnobs onClick={action('variable click')}></ButtonWithKnobs>, { notes: '23333' });
