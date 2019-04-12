import React, { Component } from 'react';
import Markup from './Markup';

type Tstate = {
  sharingOpen: boolean;
  modal: boolean;
};

type Tprops = {
  share: string | boolean;
};

type Tevents = {};

class SpeedDial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sharingOpen: false,
      modal: false,
    };

    this.events = {
      toggleModal: this.toggleModal.bind(this),
      toggleSharingOpen: this.toggleSharingOpen.bind(this),
    };
  }

  toggleModal(value = null) {
    return this.setState({ modal: value });
  }

  toggleSharingOpen() {
    const { sharingOpen: currentSharingOpen } = this.state;
    return this.setState({ sharingOpen: !currentSharingOpen });
  }

  render(): JSX.Element {
    const { props, state, events } = this;

    const passedProps = {
      sharingOpen: state.sharingOpen,
      modal: state.modal,
      toggleSharingOpen: events.toggleSharingOpen,
      toggleModal: events.toggleModal,
      share: props.share,
    };

    return <Markup {...passedProps} />;
  }
}

export default SpeedDial;
