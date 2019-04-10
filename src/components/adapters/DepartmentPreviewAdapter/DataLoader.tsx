import React, { Component } from 'react';
import axios from 'axios';

import DepartmentPreview from '../../views/PreviewWrapper';
import transformData from './transformData';
import { Tprops, Tstate } from './schema';
import { Tdepartment } from '../../../data/schemas/departments';

class DataLoader extends Component<Tprops, Tstate> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: null,
    };
  }

  componentDidMount(): void {
    const { year, sphere, government, department } = this.props;
    const api = `/json/${year}/previews/${sphere}/${government}/original.json`;

    const loadliveData = ({ items }: { items: Tdepartment[] }): void =>
      this.setState({ data: transformData(items, department), loading: false });

    axios
      .get(api)
      .then(({ data }: { data: { items: Tdepartment[] } }): { items: Tdepartment[] } => data)
      .then(loadliveData);
  }

  render(): JSX.Element | null {
    const { state, props } = this;
    const { loading, data } = state;
    const { sphere, department, government, year } = props;

    if (loading || !data) {
      return null;
    }

    const passedProps = {
      items: data,
      sphere,
      department,
      government,
      year,
    };

    return <Preview {...passedProps} />;
  }
}

export default DataLoader;
