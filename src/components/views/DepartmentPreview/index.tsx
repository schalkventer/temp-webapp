import React, { Component } from 'react';

import Presentation from './Presentation';
import { TdepartmentId } from '../../../data/schemas/departments';
import { Tstate, Tprops, TbuttonUrl } from './schema';

class Preview extends Component<Tprops, Tstate> {
  public events = {
    selectedChangeHandler: this.selectedChangeHandler.bind(this),
  };

  constructor(props) {
    super(props);

    const { initialSelected } = this.props;

    this.state = {
      selected: initialSelected,
    };
  }

  selectedChangeHandler(newSelected: TdepartmentId, url: TbuttonUrl): null {
    const { selected: currentSelected } = this.state;

    if (newSelected === currentSelected) {
      return null;
    }

    window.history.pushState({}, window.document.title, url);
    this.setState({ selected: newSelected });
    return null;
  }

  render(): JSX.Element {
    const { state, props, events } = this;
    const { departments, dropdownItems } = props;
    const { selectedChangeHandler } = events;
    const { selected } = state;

    const department = departments.find(({ id }): boolean => id === selected);
    return <Presentation {...{ department, dropdownItems, selectedChangeHandler }} />;
  }
}

export default Preview;
