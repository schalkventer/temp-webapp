// @ts-ignore
import { Tresponse, Tdata, TfocusArea, TfocusAreaNew } from './schema';
import { TdropdownItem } from '../../views/DepartmentPreview/schema';

const createDropdownItems = ({ items }: Tresponse): TdropdownItem[] =>
  items.map(
    ({ title: name, slug: id }): TdropdownItem => ({
      name,
      id,
    }),
  );

const createFocusAreas = ({ items }): TfocusAreaNew[] =>
  items.map(
    ({ title: name, slug: id, ...otherValues }: TfocusArea): TfocusAreaNew => ({
      ...otherValues,
      name,
      id,
    }),
  );

const transformData = (response: Tresponse): Tdata => {
  return {
    dropdownItems: createDropdownItems(response),
    departments: createFocusAreas(response),
  };
};

export default transformData;
