import {createGlobalStyle} from 'styled-components';

/**
 * State global
 */
export const GlobalStyles = createGlobalStyle`
    body {
       margin: 0;
       padding: 0;
       background: ${({ theme }) => theme.body};
       color: ${({theme}) => theme.text};
       font-family: 'Roboto', sans-serif;
       transition: all 0.80s linear;
    }
`;
