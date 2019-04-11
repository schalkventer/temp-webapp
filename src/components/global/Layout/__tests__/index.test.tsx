import React from 'react';
import renderer from 'react-test-renderer';
import Basic from './Basic';

const basic = (): void => expect(renderer.create(<Basic />).toJSON()).toMatchSnapshot();
test('Basic', basic);
