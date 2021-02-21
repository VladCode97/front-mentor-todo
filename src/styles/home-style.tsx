import StyleComponent from 'styled-components';
import DarkImage from '../assets/bg-desktop-dark.jpg';
import LightImage from '../assets/bg-desktop-light.jpg';

export const HomeContainer = StyleComponent.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const HomeBackground = StyleComponent.div`
  background-image: url("${(props => (props.theme.imageBackground) ? LightImage : DarkImage)}");
  background-repeat: no-repeat;
  height: 40vh;
  background-position: center;
  transition: all 0.80s linear;
`;

export const HomeLayout = StyleComponent.div`
  width: 100%;
  background: ${(props => props.theme.backgroundLayout)};
  height: 67.9vh;
  transition: all 0.80s linear;
`;

export const TitleHome = StyleComponent.h1`
    position: absolute;
    left: 35%;
    top: 5%;
    font-size: 60px;
    letter-spacing: 10px;
    font-weight: 500;
    color: white;
`;
