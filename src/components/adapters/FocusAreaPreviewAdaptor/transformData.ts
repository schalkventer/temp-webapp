import { TrouterProps, Tresponse } from './schema';
import mock, { TfocusAreaForPreview, TdropdownItem } from '../../views/FocusAreaPreview/schema';

const { focusAreas, dropdownItems } = mock;

const transformData = (
  response: Tresponse,
  routerObject: TrouterProps,
): { dropdownItems: TdropdownItem[]; focusAreas: TfocusAreaForPreview[] } => {
  return {
    dropdownItems,
    focusAreas,
  };
};

export default transformData;
