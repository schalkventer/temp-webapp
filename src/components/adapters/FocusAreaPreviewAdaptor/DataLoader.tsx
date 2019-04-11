import React, { Component } from 'react';
import axios from 'axios';

import transformData from './transformData';
import { Tprops, Tstate, Tresponse } from './schema';
import DepartmentPreview from '../../views/DepartmentPreview';

class DataLoader extends Component<Tprops, Tstate> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: null,
    };
  }

  componentDidMount(): void {
    const { year, sphere, government } = this.props;
    const api = `/json/${year}/previews/${sphere}/${government}/original.json`;

    const loadliveData = (response: Tresponse): void =>
      this.setState({ data: transformData(response, this.props), loading: false });

    axios.get(api).then(loadliveData);
  }

  render(): JSX.Element | null {
    const { state, props } = this;
    const { loading, data } = state;
    const { department } = props;

    if (loading || !data) {
      return null;
    }

    const passedProps = {
      ...data,
      initialSelected: department,
    };

    return <DepartmentPreview {...passedProps} />;
  }
}

export default DataLoader;
