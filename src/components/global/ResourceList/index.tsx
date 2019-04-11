import React from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';

import Icon from '@material-ui/icons/ArrowDownward';
import Copy from '@material-ui/icons/FileCopy';
import { Typography, Button, CardContent, Card } from '@material-ui/core';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled(Typography)`
  && {
    height: 39px;
    font-family: Lato;
    line-height: 23px;
    font-size: 14px;
    color: #000000;
  }
`;

const Size = styled(Typography)`
  && {
    color: grey;
    margin: 4.5% 0;
    font-size: 10px;
    letter-spacing: 0.5px;
  }
`;

const CardWrapper = styled.div`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;

  @media screen and (min-width: 600px) {
    max-width: 50%;
  }

  @media screen and (min-width: 1000px) {
    max-width: ${100 / 3}%;
  }
`;

const StyledCard = styled(Card)`
  && {
    width: 100%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (min-width: 768px) {
      display: flex;
      height: 145px;
    }

    transition: transform 500ms;

    &:hover {
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.2);
      transform: translate(-2px, -2px);
    }
  }
`;

const CardContentWrapper = styled(CardContent)`
  &&&& {
    padding: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (min-width: 375px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

const HeadingText = styled.div`
  &&&& {
    line-height: 23px;
    font-size: 16px;
  }
`;

const ButtonBtn = styled(Button)`
  && {
    padding: 6px;
    min-width: 0;
    width: 40px;
    height: 57px;
    text-transform: none;
    box-shadow: none;

    @media screen and (min-width: 375px) {
      padding: 6px 16px;
      display: flex;
      justify-content: space-between;
      min-width: 193px;
      width: 100%;
      height: 32px;
    }
  }
`;

const SpanText = styled.span`
  display: none;
  font-size: 12px;
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: flex-start;
  }
`;

const CardBlack = styled(StyledCard)`
  && {
    background-color: #3f3f3f;
  }
`;

const TitleBlack = styled(Title)`
  && {
    color: #ffffff;
    height: 16px;
    margin-bottom: 16px;
  }
`;

const SubHeading = styled(Size)`
  && {
    color: #ffffff;
  }
`;

const ButtonBtnBlack = styled(ButtonBtn)`
  && {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const BtnLink = styled.a`
  text-decoration: none;
`;

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
            <ButtonBtnBlack variant="contained" onClick={() => copy(createCitation(name))}>
              <SpanText>Copy to clipboard</SpanText>
              <Copy style={iconSize} />
            </ButtonBtnBlack>
          </div>
        </CardContentWrapper>
      </CardBlack>
    </CardWrapper>
  );
};

const Resources = ({ resources, cite }): JSX.Element => (
  <List>
    {resources.map(createResource)}
    {!!cite && <CopyCitation name={cite} />}
  </List>
);

export default Resources;
