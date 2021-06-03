import { createGlobalStyle } from 'styled-components';

import GothamMedium from './Assets/fonts/GothamMedium.otf'
 
const GlobalStyle = createGlobalStyle`
   @font-face {
        font-family: 'GothamMedium';
        src: url(${GothamMedium});
        font-weight: 300;
        font-style: normal;
`;
 
export default GlobalStyle;