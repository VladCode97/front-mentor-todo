import StyleComponent from 'styled-components';
import Sun from '../assets/dom.png';
import Moon from '../assets/luna.png';

export const ButtonChangeTheme = StyleComponent.span`
   position: absolute;
   left: 70%;
   top: 10%;
   background: url("${(props => (props.theme.imageBackground) ? Sun : Moon)}");
   background-repeat: no-repeat;
   width: 30%;
   height: 80px;
   cursor: pointer;
   transition: all 0.80s linear;
`;
