/* eslint-disable @typescript-eslint/camelcase */

import faker, { commerce, finance, random, lorem } from 'faker';
import { kebab } from 'change-case';

import { TsphereId } from '../../../data/constants/spheres/schema';
import { TgoverningBodyId } from '../../../data/constants/governingBodies/schema';
import { TvalidFinancialYear } from '../../../data/constants/financialYears/schema';
import { TdepartmentId } from '../../../data/schemas/departments';

type Tid = string;
type Tname = string;
type Tamount = number;
type Ttotal = number;
type Turl = string;
type Tpercentage = number;

export type TnationalInput = {
  slug: Tid;
  amount: Tamount;
  detail: Turl;
  name: Tname;
  percentage_of_total: Tpercentage;
};

export type Tresponse = {
  data: {
    total: Ttotal;
    items: TnationalInput[];
  };
};

export type Titem = {
  id: Tid;
  url: Turl;
  percentage: Tpercentage;
  amount: Tamount;
  name: Tname;
};

export type Tdata = {
  total: Ttotal;
  items: Titem[];
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
