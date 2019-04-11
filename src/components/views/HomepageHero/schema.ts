/* eslint-disable no-console */

import faker from 'faker';

import uniqueProjectSeed from '../../../helpers/utilities/uniqueProjectSeed';

export type Tcallback = () => void | null;

export type Tannouncement = {
  text: string;
  button?: {
    text: string;
    click: string | Tcallback;
  };
};

/**
 * Props accepted by `<HomepageHero />`.
 */
export type Tprops = {
  announcement?: Tannouncement;
};

/**
 * Mock properties
 */
faker.seed(uniqueProjectSeed);

const mockAnnouncement = (callback?: boolean): Tannouncement => ({
  text: faker.hacker.phrase(),
  button: {
    text: faker.hacker.verb(),
    click: callback ? (): void => console.log('Clicked') : faker.internet.url(),
  },
});

export { mockAnnouncement };
export default { mockAnnouncement };
