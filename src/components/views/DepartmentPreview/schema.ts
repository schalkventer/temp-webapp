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
