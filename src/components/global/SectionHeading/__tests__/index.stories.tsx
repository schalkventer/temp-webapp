/* eslint-disable import/no-extraneous-dependencies */

import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import content from '../README.md';
import { Demo, DemoNoShare, DemoShareIsAString } from './Demo';
import { Basic, BasicNoShare, BasicShareIsAString } from './Basic';

storiesOf('⚙️ components|global/SectionHeading', module)
  .add('README', (): JSX.Element => <Fragment />, { readme: { content } })
  .add('Demo', (): JSX.Element => <Demo />)
  .add('DemoNoShare', (): JSX.Element => <DemoNoShare />)
  .add('DemoShareIsAString', (): JSX.Element => <DemoShareIsAString />);

storiesOf('⚙️ components|global/SectionHeading/tests', module)
  .add('Basic', (): JSX.Element => <Basic />)
  .add('BasicNoShare', (): JSX.Element => <BasicNoShare />)
  .add('BasicShareIsAString', (): JSX.Element => <BasicShareIsAString />);
