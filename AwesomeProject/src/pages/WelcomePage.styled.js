import styled from 'styled-components/native';
import imgMobile from '../img/bg_main_mobile.svg';
import imgTablet from '../img/bg_main_tablet.svg';
import imgDesktop from '../img/bg_main_desktop_group.svg';
import { Dimensions, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');

// import botleDesktop from '../img/botle_welcome_desktop.svg';


export const LeftSide = styled.View`
 font-family: Roboto;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  margin-bottom: 40px;

  @media (min-width: 768) {
    margin: 0;
  }

  @media (min-width: 1440) {
    width: 439px;
  }
`;

export const TitleLeft = styled.Text`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 28px;
 
  @media (min-width: 768) {
    font-size: 36px;
  }
`;

export const TextH3Left = styled.Text`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 24px;
 

  @media(min-width: 768) {
    font-size: 26px;
 
  }
`;

export const TextP = styled.Text`
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 18px;
 
`;

export const ListLeft = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 768) {
    flex-direction: row;
  }

  @media (min-width: 1440) {
    flex-direction: column;
  }
`;

export const ItemLeft = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  font-weight: 400;
  font-size: 16px;

  @media (min-width: 768) {
    width: 224px;
  }
`;

export const Btn = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  height: 36px;
  padding: 8px 30px;
  font-size: 16px;
  font-weight: 500;
 
  color: #fff;
  background-color: var(--primery-color-blue);
  border: none;
  border-radius: 10px;

  shadow-color: #407bff;
  shadow-offset: 0 4px;
  shadow-opacity: 0.54;
  shadow-radius: 14;
  elevation: 4; 

  &:hover,
  &:focus {
  shadow-color: #407bff;
  shadow-offset: 0 4px;
  shadow-opacity: 0.54;
  shadow-radius: 14;
  elevation: 4;
  }

  @media screen and (min-width: 768px) {
    min-width: 336px;
    height: 44px;
    margin-bottom: 60px;
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
    margin-bottom: 0;
  }
`;

export const RightSide = styled.View`
  display: block;
  padding: 24px 16px;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ecf2ff;
  border-radius: 10px;

  shadow-opacity: 0.3;
  shadow-radius: 14px;
  shadow-color: #407bff;
  shadow-offset: 0px 0px;
  elevation: 4;

  

  @media (min-width: 768) {
    padding: 32px 24px;
    max-width: 446px;
    margin: 0;
    border: none;
  }

  @media (min-width: 1440) {
    max-width: 494px;
    margin-top: 34px;
  }
`;

export const TitleRight = styled.Text`
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 18px;
`;

export const ListRight = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemRight = styled.Text`
  display: flex;
  gap: 8px;
  align-items: center;
  padding-left: 16px;
  font-weight: 400;
  font-size: 16px;
  
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: #407bff;
    border-radius: 50%;
  }
`;

export const HomeWrapper = styled.View`

  
 
    /* padding-left: 20px;
    padding-right: 20px;
    padding-top: 24px;
    padding-bottom: 40px; */
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
	
	position: "absolute",
    width: (${width}),
    height: (${height}),
    top: 0,
    zIndex: -1, 


  @media (min-width: 768) {
    /* background-size: contain; */
    padding-top: 40px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 50px;
    background-position: bottom;
    background-size: cover;
    background-image: url(${imgTablet});
  }

  /* @media screen and (min-width: 769px) and (max-width: 1439px) {
    background-size: cover;
    background-image: url(${imgTablet});

    height: 100vh;
  } */

  @media  (min-width: 1440) {
    background-image: url(${imgDesktop});
    background-position: bottom;
    background-size: cover;
    min-height: 691px;
    padding-top: 31px;
    padding-bottom: 294px;
    padding-left: 213px;
    padding-right: 213px;
    /* height: 100vh; */
  }
  /* @media screen and (min-width: 1441px) {
    background-size: cover;

    height: 100vh;
  } */
`;

export const Home = styled.View`
  @media (min-width: 768) {
  }
  @media (min-width: 1200) {
    padding-left: 112px;
    padding-right: 112px;
  }
  @media (min-width: 1440) {
    display: flex;
    gap: 81px;
    justify-content: center;
  }
`;


export const Svg = styled.Image`
  width: 32px;
  height: 32px;

  @media  (min-width: 768) {
    width: 40px;
    height: 40px;
  }
`;