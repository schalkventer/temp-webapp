import React from 'react';
import { object, select } from '@storybook/addon-knobs';

import FocusAreaPreview from '../index';
import { dropdownItems, Tprops, focusAreas } from '../schema';

const createDemoProps = (): Tprops => ({
  initialSelected: select(
    'intialSelected',
    dropdownItems.map(({ id }): string => id),
    dropdownItems[0].id,
  ),
  dropdownItems: object('dropdownItems', dropdownItems),
  focusAreas: object('focusAreas', focusAreas),
});

const Demo = (): JSX.Element => <FocusAreaPreview {...createDemoProps()} />;

export default Demo;
