import { createGlobalStyle } from 'styled-components/macro';
import Avenir from './fonts/avenir-next-regular.ttf';

export default createGlobalStyle`
     @font-face {
        font-family: 'Avenir';
        src: local('Avenir'), url(${Avenir});
        font-style: normal;
    }
    body {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
        max-height: 100vh;
        color: #000;
        font-family: 'Avenir'
    }
`;
