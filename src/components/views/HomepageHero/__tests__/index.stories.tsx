/* eslint-disable import/no-extraneous-dependencies */

import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import content from '../README.md';
import Basic from './Basic';
import Button from './Button';
import ButtonCallback from './ButtonCallback';

storiesOf('⚙️ components|views/HomepageHero', module).add(
  'README',
  (): JSX.Element => <Fragment />,
  { readme: { content } },
);

storiesOf('⚙️ components|views/HomepageHero/tests', module)
  .add('Basic', (): JSX.Element => <Basic />)
  .add('With button', (): JSX.Element => <Button />)
  .add('With button that fires callback', (): JSX.Element => <ButtonCallback />);
