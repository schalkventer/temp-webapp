import React, { Component } from 'react';
import Presentation from './Presentation';

type Tstate = {
  sharingOpen: boolean;
  modal: string | boolean | null;
};

type Tprops = {
  share: string | null;
};

type Tevents = {
  toggleModal: any;
  toggleSharingOpen: any;
};

class SpeedDial extends Component<Tprops, Tstate> {
  public events: Tevents = {
    toggleModal: this.toggleModal.bind(this),
    toggleSharingOpen: this.toggleSharingOpen.bind(this),
  };

  constructor(props) {
    super(props);
    this.state = {
      sharingOpen: false,
      modal: false,
    };
  }

  toggleModal(value = null): null {
    this.setState({ modal: value });
    return null;
  }

  toggleSharingOpen(): null {
    const { sharingOpen: currentSharingOpen } = this.state;
    this.setState({ sharingOpen: !currentSharingOpen });
    return null;
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

    return <Presentation {...passedProps} />;
  }
}

export default SpeedDial;
