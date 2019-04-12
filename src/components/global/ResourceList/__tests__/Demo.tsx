import React from 'react';

import ResourceList from '../index';
import { resources } from '../schema';

const Demo = (): JSX.Element => <ResourceList {...{ resources }} />;

const DemoWithCite = (): JSX.Element => <ResourceList {...{ resources }} cite />;

export { Demo, DemoWithCite };
