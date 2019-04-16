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
  ButtonsArea,
  ButtonYellow,
  TextInButton,
  ArrowBlack,
  BottomWrapper,
  ButtonInfo,
  InfoImageButton,
  ArrowForwardLeftButton,
  Cell,
  ImageFirstRight,
  HeaderTopWrapper,
} from './styled';
import ImageFirst from './GroupImages.png';

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
            <HeaderTopWrapper>
              <Cell>
                <ImageFirstRight src={ImageFirst} alt="img1" />
              </Cell>
            </HeaderTopWrapper>
            <HeaderTitle>Discover how government spends taxpayer money</HeaderTitle>
            <HeaderQuestion>Which budget would you like to explore?</HeaderQuestion>
            <ButtonsArea>
              <ButtonYellow>
                <TextInButton>Consolidated</TextInButton>
                <ArrowBlack />
              </ButtonYellow>
              <ButtonYellow>
                <TextInButton>National</TextInButton>
                <ArrowBlack />
              </ButtonYellow>
              <ButtonYellow>
                <TextInButton>Provincial</TextInButton>
                <ArrowBlack />
              </ButtonYellow>
            </ButtonsArea>
          </HeaderLeftWrapper>
          <HeaderRightWrapper>
            <Cell>
              <ImageFirstRight src={ImageFirst} alt="img1" />
            </Cell>
          </HeaderRightWrapper>
        </HomeHeaderMiddleCentered>
        <BottomWrapper>
          <ButtonInfo>
            <InfoImageButton />
            What is the difference between the Consolidated, National and Provincial budgets?
            <ArrowForwardLeftButton />
          </ButtonInfo>
        </BottomWrapper>
      </HomeHeaderMiddleWrapper>
    </Wrapper>
  </div>
);

export default Presentation;
