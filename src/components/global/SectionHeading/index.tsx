import React from 'react';

import { MenuItem } from '@material-ui/core';
import SpeedDial from '../SpeedDial';
import { Tprops } from './schema';

import {
  Wrapper,
  BudgetContainer,
  BudgetHeadingAndShareIcon,
  BudgetHeading,
  FormContainer,
  BudgetPhase,
  SelectStyled,
  SelectStyledPhase,
  SpeedDialContainer,
} from './styled';

const callShareIcon = (share): JSX.Element | null => {
  if (!share) return null;

  if (typeof share === 'string') {
    return (
      <SpeedDialContainer>
        <SpeedDial {...{ share }} />
      </SpeedDialContainer>
    );
  }

  if (share) return <SpeedDial />;
};

const callBudgetPhaseSelect = (phases): JSX.Element => (
  <BudgetPhase>
    <SelectStyledPhase
      disabled
      displayEmpty
      classes={{ selectMenu: 'selectMenu', disabled: 'disabled', icon: 'icon' }}
    >
      <MenuItem>{phases.disabled}</MenuItem>
    </SelectStyledPhase>
  </BudgetPhase>
);

const callYearsSelect = (years): JSX.Element => (
  <SelectStyled
    disabled
    displayEmpty
    classes={{ selectMenu: 'selectMenu', disabled: 'disabled', icon: 'icon' }}
  >
    <MenuItem>{years.disabled}</MenuItem>
  </SelectStyled>
);

const callSelectDownOptions = (years, phases): JSX.Element => (
  <FormContainer>
    {phases && callBudgetPhaseSelect(phases)}
    {years && callYearsSelect(years)}
  </FormContainer>
);

const SectionHeading = ({ title, share, years, phases }: Tprops): JSX.Element => (
  <Wrapper>
    <BudgetContainer>
      <BudgetHeadingAndShareIcon>
        <BudgetHeading component="div">{title}</BudgetHeading>
        {callShareIcon(share)}
      </BudgetHeadingAndShareIcon>
      {callSelectDownOptions(years, phases)}
    </BudgetContainer>
  </Wrapper>
);

export default SectionHeading;
