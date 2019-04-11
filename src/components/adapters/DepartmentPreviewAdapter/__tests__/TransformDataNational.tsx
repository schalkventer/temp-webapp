/* eslint-disable no-console  */

import React from 'react';

import mock from '../schema';
import transformData from '../transformData';

const router = {
  year: '2018-19',
  sphere: 'national',
  government: 'south-africa',
  department: 'basic-education',
};

// @ts-ignore
const result = transformData(mock, router);
console.log('Transform Data: National', result);
const TransformDataNational = (): JSX.Element => <code>{JSON.stringify(result, 0, 2)}</code>;

export default TransformDataNational;
