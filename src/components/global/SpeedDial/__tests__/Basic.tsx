import React from 'react';

import SpeedDial from '../index';

const Basic = (): JSX.Element => <SpeedDial />;
const BasicWithShareString = (): JSX.Element => <SpeedDial share="myTextHere" />;

export { Basic, BasicWithShareString };
