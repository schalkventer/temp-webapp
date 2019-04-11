import React from 'react';

import HomepageHero from '../index';
import { mockAnnouncement } from '../schema';

const Default = (): JSX.Element => <HomepageHero announcement={mockAnnouncement(true)} />;

export default Default;
