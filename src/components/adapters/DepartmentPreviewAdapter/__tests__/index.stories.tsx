import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import content from '../README.md';
import TransformDataNational from './TransformDataNational';
import TransformDataProvincial from './TransformDataProvincial';

storiesOf('⚙️ components|adapters/DepartmentPreviewAdapter', module).add(
  'README',
  (): JSX.Element => <Fragment />,
  {
    readme: { content },
  },
);

storiesOf('⚙️ components|adapters/DepartmentPreviewAdapter/tests', module)
  .add('transformData function: National', (): JSX.Element => <TransformDataNational />)
  .add('transformData function: Provincial', (): JSX.Element => <TransformDataProvincial />);
