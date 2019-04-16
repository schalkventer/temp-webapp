import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';
import arrow from './ArrowYellowForward.svg';
import ArrowForward from './ArrowForward.svg';
import middleBackgroundImage from './HomeMiddleBg.svg';
import InfoImage from './info.svg';
import ArrowForwardLeft from './ArrowForwardRight.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeHeaderTopWrapper = styled.div`
  background: #2d2d2d;
  display: flex;
  height: 44px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TitleWrapper = styled.div`
  width: 99%;
  justify-content: flex-start;
  margin: auto;
`;

const TitleWhite = styled(Typography)`
  && {
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.01rem;
    color: #fff;
  }
`;

const ButtonLearn = styled(Button)`
  && {
    margin-left: 15px;
    padding-right: 35px;
    background: none;
    color: #eca03e;
    font-size: 16px;
    font-weight: bold;
    background-image: url('${arrow}');
    background-repeat: no-repeat;
    background-position: 95% 49.5%;
    text-transform: capitalize;
  }
`;

const ArrowYellowForward = styled.img`
  position: relative;
`;

const HomeHeaderMiddleWrapper = styled.div`
  background-image: url('${middleBackgroundImage}');
  width: 100%;
  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

const HomeHeaderMiddleCentered = styled.div`
  display: flex;
  flex-direction: row;
  width: 99%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 95%;
  }
`;

const HeaderLeftWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const HeaderRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    display: none;
  }
  @media screen and (max-width: 1380px) {
    align-items: center;
  }
`;

const HeaderTopWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Cell = styled.div`
  flex: 1 1 auto;
  margin-top: 50px;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const ImageFirstRight = styled.img`
  position: relative;
  max-width: 100%;
  width: 100%;
`;

const HeaderTitle = styled(Typography)`
  && {
    width: 100%;
    font-size: 48px;
    font-weight: bold;
    margin-top: 80px;
    @media screen and (max-width: 1080px) {
      font-size: 36px;
    }
    @media screen and (max-width: 768px) {
      font-size: 32px;
      margin-top: 0;
    }
  }
`;

const HeaderQuestion = styled(Typography)`
  && {
    width: 100%;
    font-size: 24px;
    margin-top: 20px;
    @media screen and (max-width: 1080px) {
      font-size: 18px;
    }
  }
`;

const ButtonsArea = styled.div`
  display: flex;
  @media screen and (max-width: 1080px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const ButtonYellow = styled(Button)`
  && {
    display: flex;
    flex-direction: row;
    height: 64px;
    margin-right: 10px;
    margin-top: 20px;
    background: #eca03e;
    font-weight: bold;
    text-transform: capitalize;
    padding-left: 25px;
    &:hover {
      background: #eca03e;
    }
    @media screen and (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 10px;
      margin-right: 0;
    }
  }
`;

const TextInButton = styled(Typography)`
  && {
    font-size: 20px;
    font-weight: bold;
    @media screen and (max-width: 1080px) {
      position: absolute;
      left: 25px;
    }
  }
`;

const ArrowBlack = styled.img`
  background-image: url('${ArrowForward}');
  background-repeat: no-repeat;
  background-position: 95% 49.5%;
  width: 16px;
  padding: 10px;
  margin-right: 13px;
  @media screen and (max-width: 1080px){
    position: absolute;
    right: 10px;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 99%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const ButtonInfo = styled(Button)`
  && {
    margin: 20px 0;
    font-size: 16px;
    text-transform: capitalize;
    padding: 20px;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.4);
    &:hover {
      background-color: #f7f7f7;
    }
    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }
`;

const InfoImageButton = styled.img`
  background-image: url('${InfoImage}');
  padding: 10px;
  margin: 0px 15px 0 0;
`;

const ArrowForwardLeftButton = styled.img`
  background-image: url('${ArrowForwardLeft}');
  padding: 8px;
  margin: 0px 0 0 15px;
`;

export {
  Wrapper,
  HomeHeaderTopWrapper,
  TitleWrapper,
  TitleWhite,
  ButtonLearn,
  ArrowYellowForward,
  HomeHeaderMiddleWrapper,
  HomeHeaderMiddleCentered,
  HeaderLeftWrapper,
  HeaderRightWrapper,
  HeaderTitle,
  HeaderQuestion,
  ButtonsArea,
  TextInButton,
  ButtonYellow,
  ArrowBlack,
  BottomWrapper,
  ButtonInfo,
  InfoImageButton,
  ArrowForwardLeftButton,
  ImageFirstRight,
  Cell,
  HeaderTopWrapper,
};

export default {
  Wrapper,
  HomeHeaderTopWrapper,
  TitleWrapper,
  TitleWhite,
  ButtonLearn,
  ArrowYellowForward,
  HomeHeaderMiddleWrapper,
  HomeHeaderMiddleCentered,
  HeaderLeftWrapper,
  HeaderRightWrapper,
  HeaderTitle,
  HeaderQuestion,
  ButtonsArea,
  TextInButton,
  ButtonYellow,
  ArrowBlack,
  BottomWrapper,
  ButtonInfo,
  InfoImageButton,
  ArrowForwardLeftButton,
  ImageFirstRight,
  Cell,
  HeaderTopWrapper,
};
