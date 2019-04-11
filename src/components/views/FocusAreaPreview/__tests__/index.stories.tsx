/* eslint-disable import/no-extraneous-dependencies */

import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import content from '../README.md';
import Demo from './Demo';
import Basic from './Basic';

storiesOf('⚙️ components|views/FocusAreaPreview', module)
  .add('README', (): JSX.Element => <Fragment />, { readme: { content } })
  .add('Demo', (): JSX.Element => <Demo />);

storiesOf('⚙️ components|views/FocusAreaPreview/tests', module).add(
  'Basic',
  (): JSX.Element => <Basic />,
);
