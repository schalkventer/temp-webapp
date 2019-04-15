/* eslint-disable @typescript-eslint/camelcase */

import faker, { commerce, finance, random, lorem } from 'faker';
import { kebab } from 'change-case';

import { TsphereId } from '../../../data/constants/spheres/schema';
import { TgoverningBodyId } from '../../../data/constants/governingBodies/schema';
import { TvalidFinancialYear } from '../../../data/constants/financialYears/schema';
import { TdepartmentId } from '../../../data/schemas/departments';

/**
 * Properties passed inside of `<Routing />`
 */
// eslint-disable-next-line import/prefer-default-export
export type TrouterProps = {
  year: TvalidFinancialYear;
  sphere: TsphereId;
  government: TgoverningBodyId;
  department: TdepartmentId;
};
