import React from 'react';
import { object, select } from '@storybook/addon-knobs';

import SectionHeading from '../index';
import { departments, dropdownItems, Tprops } from '../schema';

const createDemoProps = (): Tprops => ({
  initialSelected: select(
    'intialSelected',
    dropdownItems.map(({ id }): string => id),
    dropdownItems[0].id,
  ),
  departments: object('departments', departments),
  dropdownItems: object('dropdownItems', dropdownItems),
});

const Demo = (): JSX.Element => <SectionHeading {...createDemoProps()} />;

export default Demo;
