import faker from 'faker';
import { kebab } from 'change-case';

import { TfocusAreaForPreview } from '../../views/FocusAreaPreview/schema';

export interface Tresource {
  name: string;
  format?: string;
  url: string;
}
export interface TfocusArea {
  title: string;
  slug: string;
  description: string;
  total: number;
  percentage: number;
  resources: Tresource[];
  national: TchartItem[];
  provincial: TchartItemWithChildren[];
}

export interface TchartItem {
  title: string;
  slug: string;
  amount: number;
  percentage: number;
}

export type TchartItemWithChildren = TchartItem & { children: TchartItem[] };

export interface Tresponse {
  data: {
    items: TfocusArea[];
  };
}

/**
 * While true, then rendering of view is delayed until all critical data has been retrieved. If
 * false, the designated view will render. Usually starts as true and then changes to false once all
 * data has been loaded.
 */
export type Tloading = boolean;

/**
 * Internal state of `<DataLoader />`.
 */
export interface Tstate {
  loading: Tloading;
  data: Tdata | null;
}

/**
 * Properties passed inside of `<Routing />`
 */
export interface TrouterProps {
  year: string;
  focusArea: string;
}

/**
 * An item that can be selected in the dropdown menu. If an item is clicked `selected` in state will change to
 */
export interface TdropdownItem {
  id: string;
  name: string;
}

export interface Tdata {
  focusAreas: TfocusAreaForPreview[];
  dropdownItems: TdropdownItem[];
}

export interface Tprops {
  params: TrouterProps;
}

/**
 * Mocks response from API.
 */
const responseMock: Tresponse = {
  data: {
    items: [1, 2, 3, 4, 5, 6].map(
      (): TfocusArea => {
        const title = faker.commerce.department();

        return {
          title,
          slug: kebab(title),
          description: faker.lorem.paragraphs(4),
          total: parseFloat(faker.random.number() + faker.finance.amount()),
          percentage: parseFloat(faker.random.number() + faker.finance.amount()),
          resources: [1, 2, 3, 4].map(
            (): Tresource => ({
              name: faker.commerce.department(),
              format: 'PDF',
              url: faker.internet.url(),
            }),
          ),
          national: [1, 2, 3, 4].map(
            (): TchartItem => {
              const innerTitle = faker.commerce.department();

              return {
                title: innerTitle,
                slug: kebab(innerTitle),
                amount: parseFloat(faker.random.number() + faker.finance.amount()),
                percentage: parseFloat(faker.random.number() + faker.finance.amount()),
              };
            },
          ),
          provincial: [1, 2, 3, 4].map(
            (): TchartItemWithChildren => {
              const innerTitle = faker.commerce.department();

              return {
                title: innerTitle,
                slug: kebab(innerTitle),
                amount: parseFloat(faker.random.number() + faker.finance.amount()),
                percentage: parseFloat(faker.random.number() + faker.finance.amount()),
                children: [1, 2, 3, 4].map(
                  (): TchartItem => {
                    const childrenTitle = faker.commerce.department();

                    return {
                      title: childrenTitle,
                      slug: kebab(childrenTitle),
                      amount: parseFloat(faker.random.number() + faker.finance.amount()),
                      percentage: parseFloat(faker.random.number() + faker.finance.amount()),
                    };
                  },
                ),
              };
            },
          ),
        };
      },
    ),
  },
};

export default responseMock;
