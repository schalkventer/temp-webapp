/* eslint-disable no-console  */

import React from 'react';

import mock from '../schema';
import transformData from '../transformData';

const router = {
  year: '2018-19',
  sphere: 'provincial',
  government: 'western-cape',
  department: 'basic-education',
};

const result = transformData(mock, router);
console.log('Transform Data: Provincial', result);
const TransformDataProvincial = (): JSX.Element => <code>{JSON.stringify(result, 0, 2)}</code>;

export default TransformDataProvincial;
