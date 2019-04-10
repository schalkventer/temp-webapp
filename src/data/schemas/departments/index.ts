import { TvalidFinancialYear } from '../../constants/financialYears/schema';

/**
 * An kebab-case ID associated with a department (a specific office in a governing body {@link TgovernmentBodyId}) that deals with a particular area of interest.
 */
export type TdepartmentId = string;

/**
 * An title-case name associated with a department (a specific office in a governing body {@link TgovernmentBodyId}) that deals with a particular area of interest.
 */
export type TdepartmentName = string;

/**
 * A text description explaining the purposes and mandate of a specific department.
 */
export type TDepartmentdescription = string;

/**
 * An kebab-case ID associated with a specific programme managed by a department.
 */
export type TdepartmentProgrammeId = string;

/**
 * An title-case name associated with a specific programme managed by a department.
 */
export type TdepartmentProgrammeName = string;

/**
 * The amount of budget (in total rands) allocated to a specific programme in a department.
 */
export type TdepartmentProgrammeAmount = number;

/**
 * A percentage that a specific programme in a department is of the entire department's budget.
 */
export type TdepartmentProgrammePercentage = number;

/**
 * The amount of budget (in total rands) allocated to a specific department.
 */
export type Tamount = number;

/**
 * A percentage that a specific department's budget is of the total provincial budget.
 */
export type TamountPercentage = number;

/**
 * An object containing the name, id and budget associated with a specific department programme.
 */
export interface TdepartmentProgramme {
  slug: TdepartmentProgrammeId;
  title: TdepartmentName;
  amount: TdepartmentProgrammeAmount;
  percentage: TdepartmentProgrammePercentage;
}

/**
 * An object containing all information associated with a department (in a financial year).
 */
export interface Tdepartment {
  year: TvalidFinancialYear;
  slug: TdepartmentId;
  title: TdepartmentName;
  total: Tamount;
  percentage_of_budget: TamountPercentage;
  description?: TDepartmentdescription;
  programmes: TdepartmentProgramme[];
}
