import React from 'react';
import copy from 'copy-to-clipboard';

import Icon from '@material-ui/icons/ArrowDownward';
import Copy from '@material-ui/icons/FileCopy';
import { Tresources } from './schema';

import {
  List,
  Title,
  Size,
  CardWrapper,
  StyledCard,
  CardContentWrapper,
  HeadingText,
  ButtonBtn,
  SpanText,
  CardBlack,
  TitleBlack,
  SubHeading,
  ButtonBtnBlack,
  BtnLink,
} from './styled';

type Tprops = {
  resources: Tresources[];
  cite?: boolean;
};

const iconSize = {
  height: '16px',
  width: '16px',
};

const createResource = (props): JSX.Element => {
  const { heading, size, format, link } = props;

  const SizeAndFormat = size ? (
    <Size>
      {size} - {format}
    </Size>
  ) : (
    <Size>{format}</Size>
  );

  return (
    <CardWrapper key={heading}>
      <StyledCard>
        <CardContentWrapper>
          <HeadingText>
            <Title>{heading}</Title>
            {SizeAndFormat}
          </HeadingText>
          <div>
            <BtnLink href={link} target="_blank" rel="noopener noreferrer">
              <ButtonBtn variant="contained">
                <SpanText>{format === 'Web' ? 'View' : 'Download'}</SpanText>
                {format !== 'Web' && <Icon style={iconSize} />}
              </ButtonBtn>
            </BtnLink>
          </div>
        </CardContentWrapper>
      </StyledCard>
    </CardWrapper>
  );
};

const createCitation = (name): string =>
  `South African National Treasury Infrastructure Report 2019 - ${name}`;

const CopyCitation = ({ name }): JSX.Element => {
  return (
    <CardWrapper>
      <CardBlack>
        <CardContentWrapper>
          <HeadingText>
            <TitleBlack>How to cite this data</TitleBlack>
            <SubHeading>{createCitation(name)}</SubHeading>
          </HeadingText>
          <div>
            <ButtonBtnBlack variant="contained" onClick={(): boolean => copy(createCitation(name))}>
              <SpanText>Copy to clipboard</SpanText>
              <Copy style={iconSize} />
            </ButtonBtnBlack>
          </div>
        </CardContentWrapper>
      </CardBlack>
    </CardWrapper>
  );
};

const Resources = ({ resources, cite }: Tprops): JSX.Element => (
  <List>
    {resources.map(createResource)}
    {!!cite && <CopyCitation name={cite} />}
  </List>
);

export default Resources;
