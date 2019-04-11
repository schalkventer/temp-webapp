import React, { Component } from 'react';
import axios from 'axios';

import transformData from './transformData';
import { Tprops, Tstate, Tresponse } from './schema';
import FocusAreaPreview from '../../views/FocusAreaPreview';

class DataLoader extends Component<Tprops, Tstate> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: null,
    };
  }

  componentDidMount(): void {
    const { params } = this.props;
    const api = `/json/${params.year}/focus/original.json`;

    const loadliveData = (response: Tresponse): void =>
      this.setState({ data: transformData(response, params), loading: false });

    axios.get(api).then(loadliveData);
  }

  render(): JSX.Element | null {
    const { state, props } = this;
    const { loading, data } = state;
    const { focusArea } = props.params;

    if (loading || !data) {
      return null;
    }

    const passedProps = {
      ...data,
      initialSelected: focusArea,
    };

    return <FocusAreaPreview {...passedProps} />;
  }
}

export default DataLoader;
