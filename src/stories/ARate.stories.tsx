import React from 'react';
import ARate from './../components/ARate';
import WithKnobs from '../../.storybook/WithKnobs';
import story from '../../.storybook/story';

const ARateWithKnobs = WithKnobs(ARate);

story('ARate')
  .add('ARate - 默认', () => <ARateWithKnobs value={2} />)
  .add('ARate - 支持半选', () => <ARateWithKnobs value={2} allowHalf />)
  .add('ARate - 禁用交互', () => <ARateWithKnobs value={2} disabled />)
  .add('variable ARate', () => <ARateWithKnobs hasKnobs />);
