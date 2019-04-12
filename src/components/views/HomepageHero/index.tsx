import React from 'react';
import { Tprops } from './schema';
import {
  Wrapper,
  HomeHeaderTopWrapper,
  TitleWrapper,
  TitleWhite,
  ButtonLearn,
  HomeHeaderMiddleWrapper,
  HeaderLeftWrapper,
  HeaderRightWrapper,
  HomeHeaderMiddleCentered,
  HeaderTitle,
  HeaderQuestion,
} from './styled';

const Presentation = (props: Tprops): JSX.Element => (
  <div>
    <Wrapper>
      <HomeHeaderTopWrapper>
        <TitleWrapper>
          <TitleWhite>
            The 2020 South African Budget Speech
            <ButtonLearn>Learn More</ButtonLearn>
          </TitleWhite>
        </TitleWrapper>
      </HomeHeaderTopWrapper>
      <HomeHeaderMiddleWrapper>
        <HomeHeaderMiddleCentered>
          <HeaderLeftWrapper>
            <HeaderTitle>Discover how government spends taxpayer money</HeaderTitle>
            <HeaderQuestion>Which budget would you like to explore?</HeaderQuestion>
          </HeaderLeftWrapper>
          <HeaderLeftWrapper />
          <HeaderRightWrapper>Lorem</HeaderRightWrapper>
        </HomeHeaderMiddleCentered>
      </HomeHeaderMiddleWrapper>
    </Wrapper>
  </div>
);

export default Presentation;
