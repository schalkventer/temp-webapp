import faker from 'faker';
import { kebab } from 'change-case';

import { TsphereId } from '../../../data/constants/spheres/schema';
import { TgoverningBodyId } from '../../../data/constants/governingBodies/schema';
import { TvalidFinancialYear } from '../../../data/constants/financialYears/schema';
import { TdepartmentId } from '../../../data/schemas/departments';

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

export interface TfocusAreaNew {
  name: string;
  id: string;
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

export interface TrouterProps {
  year: TvalidFinancialYear;
  sphere: TsphereId;
  government: TgoverningBodyId;
  department: TdepartmentId;
}

export type TchartItemWithChildren = TchartItem & { children: TchartItem[] };

export interface Tresponse {
  items: TfocusArea[];
}

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

export default responseMock;
