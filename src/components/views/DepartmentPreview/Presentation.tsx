import React from 'react';
import { TdepartmentForPreview, TdropdownItem } from './schema';

interface Tprops {
  department?: TdepartmentForPreview;
  dropdownItems: TdropdownItem[];
}

const Presentation = (props: Tprops): JSX.Element => (
  <div>
    <button type="button">asdasd</button>
  </div>
);

export default Presentation;
