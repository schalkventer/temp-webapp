// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';
import Icon from './Icon';
import Modal from './Modal';

const StyledSpeedDial = styled(SpeedDial)`
  height: 40px;
  width: 40px;
  position: relative;
  z-index: 1;

  & .fab {
    background: #c4c4c4;
    width: 36px;
    margin-left: 10px;
    box-shadow: none;

    &:hover {
      background: ${darken(0.1, '#C4C4C4')};
    }

    &:focus {
      box-shadow: none;
    }
  }
`;

const PositionedShareIcon = styled(ShareIcon)`
  color: #3f3f3f;
`;

const StyledCloseIcon = styled(CloseIcon)`
  color: #3f3f3f;
`;

type Tobject = {
  title: string | null;
  icon: any;
  action: any;
};

const createNewTab = (newUrl): any => {
  const { focus } = window.open(newUrl, '_blank');
  return focus();
};

const sharing = ['Copy link', 'Share on Facebook', 'Share on Twitter', 'Share on Linkedin'];

const getUrl = (baseUrl, title): string | null => {
  switch (title) {
    case 'Copy link':
      return `baseUrl`;
    case 'Share on Facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`;
    case 'Share on Twitter':
      return `https://twitter.com/home?status=${baseUrl}`;
    case 'Share on Linkedin':
      return `https://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}`;
    default:
      return null;
  }
};

const createObjects = (baseUrl, toggleModal, toggleSharingOpen): any => (title): Tobject => {
  if (title === 'Copy link') {
    return {
      title,
      icon: <Icon {...{ title }} />,
      action: (): any => {
        toggleSharingOpen();
        toggleModal(baseUrl);
      },
    };
  }

  return {
    title,
    icon: <Icon {...{ title }} />,
    action: (): any => {
      toggleSharingOpen();
      createNewTab(getUrl(baseUrl, title));
    },
  };
};

const creataShareLink = ({ title, icon, action }): JSX.Element => (
  <SpeedDialAction key={title} icon={icon} tooltipTitle={title} onClick={action} />
);

const createButtons = (toggleModal, toggleSharingOpen, share): any => {
  const url = document.URL.replace(/#.*$/, '');

  const baseUrl = typeof share === 'string' ? `${url}/#${share}` : url;
  const buttonsInfo = sharing.map(createObjects(baseUrl, toggleModal, toggleSharingOpen));

  return buttonsInfo.map(creataShareLink);
};

const Markup = ({ sharingOpen, toggleSharingOpen, toggleModal, modal, share }): JSX.ELement => {
  return (
    <React.Fragment>
      <StyledSpeedDial
        ariaLabel="SpeedDial openIcon example"
        icon={sharingOpen ? <StyledCloseIcon /> : <PositionedShareIcon />}
        onClick={toggleSharingOpen}
        open={!!sharingOpen}
        direction="down"
        classes={{ fab: 'fab' }}
      >
        {createButtons(toggleModal, toggleSharingOpen, share)}
      </StyledSpeedDial>
      <Modal open={!!modal} closeModal={(): any => toggleModal(null)} url={modal} />
    </React.Fragment>
  );
};

export default Markup;
