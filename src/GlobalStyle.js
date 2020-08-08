import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import backgroundImage from './images/PCB.jpg';
 
const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  body {
    background: url("${backgroundImage}") no-repeat fixed center;
    background-size: cover;
    overflow-x: hidden;
  }
`;
 
export default GlobalStyle;
