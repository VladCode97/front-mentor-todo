import StyleComponent from 'styled-components';
import CheckImage from '../assets/check-mark.png';

export const InputTaskContainer = StyleComponent.div`
    background: ${(props => (props.theme.imageBackground) ? 'white' : '#25273C')};
    width: 34%;
    padding: 20px;
    position: absolute;
    top: 20%;
    left: 32%;
    border-radius: 10px;
`;

export const InputTask = StyleComponent.input`
     background: ${(props => (props.theme.imageBackground) ? 'white' : '#25273C')};
     outline: none;
     border: 1px solid ${(props => (props.theme.imageBackground) ? 'white' : '#25273C')};
     padding: 5px;
     position: relative;
     left: 15%;
     font-size: 20px;
     color: ${(props => (props.theme.imageBackground) ? 'black' : 'white')};
`;

export const ButtonTask = StyleComponent.span`
  background-image: url("${CheckImage}");
  background-repeat: no-repeat;
  width: 100px;
  height: 300px;
  padding: 5px;
  border-radius: 100px;
  cursor: pointer;
  &:hover {
    transition: all 0.80s linear;
  }
`;


export const ListTaskContainer = StyleComponent.div`
    background: ${(props => (props.theme.imageBackground) ? 'white' : '#25273C')};
    width: 34%;
    padding: 20px;
    position: absolute;
    top: 30%;
    left: 32%;
    height: 500px;
    border-radius: 10px;
    border: 1px solid ${(props => (props.theme.imageBackground) ? 'white' : '#25273C')}
`;
