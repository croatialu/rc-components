import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
export default (name: string) => {
  return storiesOf(name, module)
    .addDecorator(withKnobs)
    .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
}