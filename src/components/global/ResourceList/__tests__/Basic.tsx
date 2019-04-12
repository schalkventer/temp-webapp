import React from 'react';

import ResourceList from '../index';
import resources from '../schema';

const Basic = (): JSX.Element => <ResourceList {...resources} />;
const BasicWithCite = (): JSX.Element => <ResourceList {...resources} cite />;

export { Basic, BasicWithCite };
