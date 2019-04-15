import React from 'react';

import SectionHeading from '../index';
import { phases, years } from '../schema';

const Default = (): JSX.Element => (
  <SectionHeading title="Provincial Budget Summary" share years={years} phases={phases} />
);

export default Default;
