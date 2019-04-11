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

const checkIfNationalOrProvincial = (government: TrouterProps['government']): string =>
  government === 'south-africa' ? '' : government;

const createURL = ({ year, sphere, government, department }: TrouterProps): string =>
  `/${year}/previews/${sphere}/${checkIfNationalOrProvincial(government)}/${department}`;

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
const transformData = (response: Tresponse, routerObject: TrouterProps): Tdata => {
  return {
    dropdownItems: createDropdownItems(response.data),
    departments: createNewDepartments(response.data, routerObject),
  };
};

export default transformData;
