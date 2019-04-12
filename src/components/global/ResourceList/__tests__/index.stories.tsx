import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import content from '../README.md';
import { Demo, DemoWithCite } from './Demo';
import { Basic, BasicWithCite } from './Basic';

storiesOf('⚙️ components|global/ResourceList', module)
  .add('README', (): JSX.Element => <Fragment />, { readme: { content } })
  .add('Demo', (): JSX.Element => <Demo />)
  .add('DemoWithCite', (): JSX.Element => <DemoWithCite />);

storiesOf('⚙️ components|global/ResourceList/tests', module)
  .add('Basic', (): JSX.Element => <Basic />)
  .add('BasicWithCite', (): JSX.Element => <BasicWithCite />);
