import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import content from '../README.md';
import TransformData from './TransformData';

storiesOf('⚙️ components|adapters/DepartmentPreviewAdapter', module).add(
  'README',
  (): JSX.Element => <Fragment />,
  {
    readme: { content },
  },
);

storiesOf('⚙️ components|adapters/DepartmentPreviewAdapter/tests', module).add(
  'transformData function',
  (): JSX.Element => <TransformData />,
);
