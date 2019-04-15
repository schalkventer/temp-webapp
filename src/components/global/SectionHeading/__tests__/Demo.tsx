import React from 'react';

import SectionHeading from '../index';
import { phases, years } from '../schema';

const Demo = (): JSX.Element => <SectionHeading title="National Budget Summary" share />;

const DemoNoShare = (): JSX.Element => (
  <SectionHeading title="National Budget Summary" phases={phases} years={years} />
);

const DemoShareIsAString = (): JSX.Element => (
  <SectionHeading
    title="National Budget Summary"
    share="enterTextHere"
    phases={phases}
    years={years}
  />
);

export { Demo, DemoNoShare, DemoShareIsAString };
