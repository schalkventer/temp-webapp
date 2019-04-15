import React from 'react';

import SectionHeading from '../index';
import { phases, years } from '../schema';

const Basic = (): JSX.Element => <SectionHeading title="National Budget Summary" share />;

const BasicNoShare = (): JSX.Element => (
  <SectionHeading title="National Budget Summary" phases={phases} years={years} />
);

const BasicShareIsAString = (): JSX.Element => (
  <SectionHeading
    title="National Budget Summary"
    share="enterTextHere"
    phases={phases}
    years={years}
  />
);

export { Basic, BasicNoShare, BasicShareIsAString };
