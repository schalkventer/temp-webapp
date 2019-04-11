import faker from 'faker';
import { kebab } from 'change-case';

import uniqueProjectSeed from '../../../helpers/utilities/uniqueProjectSeed';

export interface Tresource {
  name: string;
  format?: string;
  url: string;
}

export interface TdropdownItem {
  id: string;
  name: string;
}

export interface TtransformedChartItem {
  title: string;
  id: string;
  amount: number;
  percentage: number;
}

export type TtransformedChartItemWithChildren = TtransformedChartItem & {
  children: TtransformedChartItem[];
};

/**
 * A link string URL that should be used as the link for the call to action button. If this value
 * does not exist, the button will not show.
 */
export type TbuttonUrl = string;

export interface TfocusAreaForPreview {
  name: string;
  id: string;
  total: number;
  description: string;
  percentage: number;
  url: string;
  national: TtransformedChartItem[];
  provincial: TtransformedChartItemWithChildren[];
  resources: Tresource[];
}

/**
 * Props passed to `<DepartmentPreview />`
 */
export interface Tprops {
  initialSelected: string;
  focusAreas: TfocusAreaForPreview[];
  dropdownItems: TdropdownItem[];
}

/**
 * Internal state used inside `<DepartmentPreview />`
 */
export interface Tstate {
  selected: string;
}

/**
 * Mocks props for `<FocusAreaPreview>`.
 */
faker.seed(uniqueProjectSeed);

const dropdownItems: TdropdownItem[] = [1, 2, 3, 4, 5, 6, 7, 8].map(
  (): TdropdownItem => {
    const name = faker.commerce.department();

    return {
      name,
      id: kebab(name),
    };
  },
);

const focusAreas: TfocusAreaForPreview[] = dropdownItems.map(
  ({ name }): TfocusAreaForPreview => ({
    name,
    id: faker.helpers.slugify(name),
    total: parseFloat(faker.random.number() * 100 + faker.finance.amount()),
    description: faker.lorem.paragraphs(4),
    percentage: parseFloat(faker.random.number() * 100 + faker.finance.amount()),
    url: faker.internet.url(),
    resources: [1, 2, 3, 4].map(
      (): Tresource => ({
        name: faker.commerce.department(),
        format: 'PDF',
        url: faker.internet.url(),
      }),
    ),
    national: [1, 2, 3, 4, 5, 6].map(
      (): TtransformedChartItem => {
        const innerTitle = faker.commerce.department();

        return {
          title: innerTitle,
          id: kebab(innerTitle),
          amount: parseFloat(faker.random.number() * 100 + faker.finance.amount()),
          percentage: parseFloat(faker.random.number() * 100 + faker.finance.amount()),
        };
      },
    ),
    provincial: [1, 2, 3, 4, 5, 6].map(
      (): TtransformedChartItemWithChildren => {
        const innerTitle = faker.commerce.department();

        return {
          title: innerTitle,
          id: kebab(innerTitle),
          amount: parseFloat(faker.random.number() * 100 + faker.finance.amount()),
          percentage: parseFloat(faker.random.number() * 100 + faker.finance.amount()),
          children: [1, 2, 3, 4, 5, 6].map(
            (): TtransformedChartItem => {
              const childrenTitle = faker.commerce.department();

              return {
                title: childrenTitle,
                id: kebab(childrenTitle),
                amount: parseFloat(faker.random.number() * 100 + faker.finance.amount()),
                percentage: parseFloat(faker.random.number() * 100 + faker.finance.amount()),
              };
            },
          ),
        };
      },
    ),
  }),
);

const initialSelected = dropdownItems[0].id;

export { dropdownItems, focusAreas, initialSelected };
export default { dropdownItems, focusAreas, initialSelected };
