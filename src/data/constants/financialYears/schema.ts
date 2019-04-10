/**
 * All valid financial years currently included in this project.
 */
export type TvalidFinancialYear = '2016-17' | '2017-2018' | '2018-2019' | '2019-2020';

/**
 * A list of all valid financial years included in this project.
 */
export type TvalidFinancialYearsList = [
  TvalidFinancialYear,
  TvalidFinancialYear,
  TvalidFinancialYear,
  TvalidFinancialYear
];

/**
 * The shape of the hardcoded project-wide financial years object.
 */
export interface TfinancialYearsConstantDataShape {
  years: TvalidFinancialYearsList;
}
