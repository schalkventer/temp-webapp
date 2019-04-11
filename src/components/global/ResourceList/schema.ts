// import faker, { commerce, helpers, finance, random, lorem, internet } from 'faker';

// import uniqueProjectSeed from '../../../helpers/utilities/uniqueProjectSeed';

/**
 * Array of strings that displays information on each resource card
 */
export type Tresources = {
  heading: string;
  size: string | null;
  format: string;
  link: string;
};

/**
 * Props passed to `<DepartmentPreview />`
 */
// export type Tprops = {
//   initialSelected: TinitialSelected;
//   departments: TdepartmentForPreview[];
//   dropdownItems: TdropdownItem[];
// };

/** Mock props to accept */
// faker.seed(uniqueProjectSeed);

// const dropdownItems: TdropdownItem[] = [1, 2, 3, 4, 5, 6, 7, 8].map(
//   (): TdropdownItem => {
//     const name = commerce.department();

//     return {
//       name,
//       id: helpers.slugify(name),
//     };
//   },
// );

// const departments: TdepartmentForPreview[] = dropdownItems.map(
//   ({ name }): TdepartmentForPreview => ({
//     name,
//     id: helpers.slugify(name),
//     total: parseFloat(random.number() * 100 + finance.amount()),
//     description: lorem.paragraphs(4),
//     percentage: parseFloat(random.number() * 100 + finance.amount()),
//     url: internet.url(),
//     programmes: [1, 2, 3, 4, 5, 6].map(
//       (): TdepartmentProgramme => {
//         const programmeTitle = commerce.department();

//         return {
//           title: programmeTitle,
//           slug: helpers.slugify(programmeTitle),
//           amount: parseFloat(random.number() * 100 + finance.amount()),
//           percentage: parseFloat(random.number() * 100 + finance.amount()),
//         };
//       },
//     ),
//   }),
// );

// const initialSelected = dropdownItems[0].id;

export { initialSelected, departments, dropdownItems };
export default { initialSelected, departments, dropdownItems };
