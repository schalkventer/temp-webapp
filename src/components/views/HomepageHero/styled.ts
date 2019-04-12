import styled from 'styled-components';
import { Typography, Button } from '@material-ui/core';
import arrow from './ArrowYellowForward.svg';
import middleBackgroundImage from './HomeMiddleBg.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeHeaderTopWrapper = styled.div`
  background: #2d2d2d;
  display: flex;
  height: 44px;
`;

const TitleWrapper = styled.div`
  width: 80%;
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
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
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
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const HeaderTitle = styled(Typography)`
  && {
    width: 100%;
    font-size: 48px;
    font-weight: bold;
    margin-top: 80px;
  }
`;

const HeaderQuestion = styled(Typography)`
  && {
    width: 100%;
    font-size: 24px;
    margin-top: 20px;
  }
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
};
