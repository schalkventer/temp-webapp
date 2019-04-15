import React from 'react';

import SectionHeading from '../index';
import { phases, years } from '../schema';

const Demo = (): JSX.Element => (
  <SectionHeading title="National Budget Summary" share phases={phases} years={years} />
);

export default Demo;
