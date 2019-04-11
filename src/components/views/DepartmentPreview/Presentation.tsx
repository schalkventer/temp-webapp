import React from 'react';

import BarChart from './BarChart';
import { TdepartmentForPreview, TdropdownItem } from './schema';

type Tprops = {
  department?: TdepartmentForPreview;
  dropdownItems: TdropdownItem[];
};

const Presentation = ({ department }: Tprops): JSX.Element => (
  <div>
    <BarChart programmes={department.programmes} />
  </div>
);

export default Presentation;
