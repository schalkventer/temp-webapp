/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/camelcase */
import faker, { helpers, random, lorem, finance, internet, commerce } from 'faker';

import financialYears from '../../../data/constants/financialYears';
import uniqueProjectSeed from '../../../helpers/utilities/uniqueProjectSeed';
import { TvalidFinancialYear } from '../../../data/constants/financialYears/schema';
import { TsphereId } from '../../../data/constants/spheres/schema';
import { TgoverningBodyId } from '../../../data/constants/governingBodies/schema';
import {
  TdepartmentId,
  TdepartmentName,
  TamountPercentage,
  TDepartmentdescription,
  Tamount,
} from '../../../data/schemas/departments';

interface TroutingInfo {
  year: TvalidFinancialYear;
  sphere: TsphereId;
  department: TdepartmentId;
  government: TgoverningBodyId;
}

interface Tinfo {
  id: TdepartmentId;
  name: TdepartmentName;
  total: Tamount;
  description: TDepartmentdescription;
  percentage: TamountPercentage;
  url: TbuttonUrl;
}

/**
 * An option that can be selected in the dropdown. Selecting an option changes the `selected`
 * property in the state.
 */
interface TdropdownOption {
  id: TdepartmentId;
  name: TdepartmentName;
}

/**
 * Props accepted by `<PreviewWrapper />`.
 */
interface Tprops {
  routingInfo: TroutingInfo;
  info: Tinfo;
  options: TdropdownOption[];
}

/**
 * Internal state inside `<PreviewWrapper />`.
 */
interface Tstate {
  selected: TdepartmentId;
}

/** Mock data */
faker.seed(uniqueProjectSeed);
const title = commerce.department();

const mock: Tprops = {
  routingInfo: {
    year: financialYears.years[0],
    sphere: 'national',
    department: 'basic-education',
    government: 'south-africa',
  },
  info: {
    id: helpers.slugify(title),
    name: title,
    total: parseFloat(random.number() * 100 + finance.amount()),
    description: lorem.paragraphs(4),
    percentage: parseFloat(random.number() * 100 + finance.amount()),
    url: internet.url(),
  },
  options: [1, 2, 3, 4, 5, 6].map(
    (): TdropdownOption => {
      const programmeTitle = commerce.department();

      return {
        id: programmeTitle,
        name: helpers.slugify(programmeTitle),
      };
    },
  ),
};

export default mock;
