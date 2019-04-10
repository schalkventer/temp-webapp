import { TrouterProps, Tresponse, Tdata } from './schema';
import { TdropdownItem, TdepartmentForPreview } from '../../views/DepartmentPreview/schema';
import { Tdepartment } from '../../../data/schemas/departments';

const createDropdownItems = ({ items }: { items: Tdepartment[] }): TdropdownItem[] =>
  items.map(
    ({ title: name, slug: id }): TdropdownItem => ({
      name,
      id,
    }),
  );

const checkIfNationalOrProvincial = (sphere, government): string =>
  sphere === 'south-africa' ? '' : government;

const createURL = ({ year, sphere, government, department }: TrouterProps): string =>
  `/${year}/previews/${sphere}/${checkIfNationalOrProvincial(sphere, government)}/${department}`;

const createNewDepartments = (
  { items }: { items: Tdepartment[] },
  routerObject: TrouterProps,
): TdepartmentForPreview[] =>
  items.map(
    ({
      title: name,
      slug: id,
      percentage_of_budget: percentage,
      year,
      programmes,
      ...otherValues
    }): TdepartmentForPreview => ({
      ...otherValues,
      name,
      id,
      percentage,
      url: createURL({ year, ...routerObject, department: id }),
      programmes,
    }),
  );

// @ts-ignore
const transformData = ({ data: { data } }: Tresponse, routerObject: TrouterProps): Tdata => {
  return {
    dropdownItems: createDropdownItems(data),
    departments: createNewDepartments(data, routerObject),
  };
};

export default transformData;
