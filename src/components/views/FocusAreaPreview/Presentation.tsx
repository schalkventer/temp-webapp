import React from 'react';
import { TfocusAreaForPreview, TdropdownItem } from './schema';

type Tprops = {
  department?: TfocusAreaForPreview;
  dropdownItems: TdropdownItem[];
};

const Presentation = (props: Tprops): JSX.Element => (
  <div>
    <button type="button">asdasd</button>
  </div>
);

export default Presentation;
