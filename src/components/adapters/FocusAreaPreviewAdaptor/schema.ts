import faker from 'faker';
import { kebab } from 'change-case';

interface Tresource {
  name: string;
  format?: string;
  url: string;
}
interface TfocusArea {
  title: string;
  slug: string;
  description: string;
  total: number;
  percentage: number;
  resources: Tresource[];
  national: TchartItem[];
  provincial: TchartItemWithChildren[];
}

interface TchartItem {
  title: string;
  slug: string;
  amount: number;
  percentage: number;
}

interface TtransformedChartItem {
  title: string;
  id: string;
  amount: number;
  percentage: number;
}

type TchartItemWithChildren = TchartItem & { children: TchartItem[] };
type TtransformedChartItemWithChildren = TtransformedChartItem & {
  children: TtransformedChartItem[];
};

interface Tresponse {
  items: TfocusArea[];
}

interface TdropdownItem {
  id: string;
  name: string;
}

interface TfocusAreaForPreview {
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
 * Mocks response for output
 */

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

/**
 * Mocks response from API.
 */
const responseMock: Tresponse = {
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
};

console.log(responseMock);
