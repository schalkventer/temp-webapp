import faker, { commerce, helpers, finance, random, lorem, internet } from 'faker';

import uniqueProjectSeed from '../../../helpers/utilities/uniqueProjectSeed';
import {
  TdepartmentId,
  TdepartmentName,
  Tamount,
  TamountPercentage,
  TDepartmentdescription,
  TdepartmentProgramme,
} from '../../../data/schemas/departments';

/**
 * Sets the current department that is shown.
 */
export type Tselected = TdepartmentId;

/**
 * Determines what departments should be selected when the page loads.
 */
export type TinitialSelected = Tselected;

/**
 * A link string URL that should be used as the link for the call to action button. If this value
 * does not exist, the button will not show.
 */
export type TbuttonUrl = string;

/**
 * The shape of a department object configured specifically for the view.
 */
export interface TdepartmentForPreview {
  id: TdepartmentId;
  name: TdepartmentName;
  total: Tamount;
  description?: TDepartmentdescription;
  percentage: TamountPercentage;
  programmes: TdepartmentProgramme[];
  url: TbuttonUrl;
}

/**
 * An item that can be selected in the dropdown menu. If an item is clicked `selected` in state will change to
 */
export interface TdropdownItem {
  id: TdepartmentId;
  name: TdepartmentName;
}

/**
 * Props passed to `<DepartmentPreview />`
 */
export interface Tprops {
  initialSelected: TinitialSelected;
  departments: TdepartmentForPreview[];
  dropdownItems: TdropdownItem[];
}

/**
 * Internal state used inside `<DepartmentPreview />`
 */
export interface Tstate {
  selected: Tselected;
}

/** Mock props to accept */
faker.seed(uniqueProjectSeed);

const dropdownItems: TdropdownItem[] = [1, 2, 3, 4, 5, 6, 7, 8].map(
  (): TdropdownItem => {
    const name = commerce.department();

    return {
      name,
      id: helpers.slugify(name),
    };
  },
);

const departments: TdepartmentForPreview[] = dropdownItems.map(
  ({ name }): TdepartmentForPreview => ({
    name,
    id: helpers.slugify(name),
    total: parseFloat(random.number() * 100 + finance.amount()),
    description: lorem.paragraphs(4),
    percentage: parseFloat(random.number() * 100 + finance.amount()),
    url: internet.url(),
    programmes: [1, 2, 3, 4, 5, 6].map(
      (): TdepartmentProgramme => {
        const programmeTitle = commerce.department();

        return {
          title: programmeTitle,
          slug: helpers.slugify(programmeTitle),
          amount: parseFloat(random.number() * 100 + finance.amount()),
          percentage: parseFloat(random.number() * 100 + finance.amount()),
        };
      },
    ),
  }),
);

const initialSelected = dropdownItems[0].id;

export { initialSelected, departments, dropdownItems };
export default { initialSelected, departments, dropdownItems };
