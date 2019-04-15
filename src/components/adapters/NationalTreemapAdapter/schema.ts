/* eslint-disable @typescript-eslint/camelcase */

import faker, { commerce, finance, random, lorem } from 'faker';
import { kebab } from 'change-case';

import { TdropdownItem, TdepartmentForPreview } from '../../views/DepartmentPreview/schema';
import { TsphereId } from '../../../data/constants/spheres/schema';
import { TgoverningBodyId } from '../../../data/constants/governingBodies/schema';
import { TvalidFinancialYear } from '../../../data/constants/financialYears/schema';
import uniqueProjectSeed from '../../../helpers/utilities/uniqueProjectSeed';
import financialYears from '../../../data/constants/financialYears';
import {
  Tdepartment,
  TdepartmentProgramme,
  TdepartmentId,
} from '../../../data/schemas/departments';

type Ttotal = number;

/**
 * The shape of the response received from the API request.
 */
export type Tresponse = {
  data: {
    total: Ttotal;
    items: Tdepartment[];
  };
};

/**
 * While true, then rendering of view is delayed until all critical data has been retrieved. If
 * false, the designated view will render. Usually starts as true and then changes to false once all
 * data has been loaded.
 */
export type Tloading = boolean;

export type Tdata = {
  departments: TdepartmentForPreview[];
  dropdownItems: TdropdownItem[];
};

/**
 * Internal state of `<DataLoader />`.
 */
export type Tstate = {
  loading: Tloading;
  data: Tdata | null;
};

/**
 * Properties passed inside of `<Routing />`
 */
export type TrouterProps = {
  year: TvalidFinancialYear;
  sphere: TsphereId;
  government: TgoverningBodyId;
  department: TdepartmentId;
};

/**
 * Props that `<DataLoader />` accepts.
 */
export type Tprops = {
  params: TrouterProps;
};

/** Mock data */
faker.seed(uniqueProjectSeed);
const title = commerce.department();

const mock: Tresponse = {
  data: {
    items: [1, 2, 3, 4, 5, 6].map(
      (key: number): Tdepartment => ({
        title,
        description: lorem.paragraphs(4),
        year: financialYears.years[key],
        slug: kebab(title),
        total: parseFloat(random.number() * 100 + finance.amount()),
        percentage_of_budget: parseFloat(random.number() * 100 + finance.amount()),
        programmes: [1, 2, 3, 4, 5, 6].map(
          (): TdepartmentProgramme => {
            const programmeTitle = commerce.department();

            return {
              title: programmeTitle,
              slug: kebab(programmeTitle),
              amount: parseFloat(random.number() * 100 + finance.amount()),
              percentage: parseFloat(random.number() * 100 + finance.amount()),
            };
          },
        ),
      }),
    ),
  },
};

export default mock;
