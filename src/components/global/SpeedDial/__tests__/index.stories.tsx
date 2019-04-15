import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import content from '../README.md';
import { Demo, DemoWithShareString } from './Demo';
import { Basic, BasicWithShareString } from './Basic';

storiesOf('⚙️ components|global/SpeedDial', module)
  .add('README', (): JSX.Element => <Fragment />, { readme: { content } })
  .add('Demo', (): JSX.Element => <Demo />)
  .add('DemoWithShareString', (): JSX.Element => <DemoWithShareString />);

storiesOf('⚙️ components|global/SpeedDial/tests', module)
  .add('Basic', (): JSX.Element => <Basic />)
  .add('BasicWithShare', (): JSX.Element => <BasicWithShareString />);
