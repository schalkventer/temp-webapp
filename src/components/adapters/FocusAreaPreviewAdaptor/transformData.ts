import { TrouterProps, Tresponse, Tdata } from './schema';
import { departments, dropdownItems } from '../../views/DepartmentPreview/schema';

const transformData = (response: Tresponse, routerObject: TrouterProps): Tdata => {
  return {
    dropdownItems,
    departments,
  };
};

export default transformData;
