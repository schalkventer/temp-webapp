import React from 'react';
import { Tprops } from './schema';

const Presentation = (props: Tprops): JSX.Element => <div>{JSON.stringify(props)}</div>;

export default Presentation;
