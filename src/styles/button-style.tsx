import StyleComponent from 'styled-components';
import Sun from '../assets/dom.png';
import Moon from '../assets/luna.png';

export const ButtonChangeTheme = StyleComponent.span`
   position: absolute;
   left: 60%;
   top: 9%;
   background: url("${(props => (props.theme.imageBackground) ? Moon : Sun)}");
   background-repeat: no-repeat;
   width: 20%;
   height: 80px;
   cursor: pointer;
   transition: all 0.80s linear;
`;
