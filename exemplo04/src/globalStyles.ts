import { createGlobalStyle } from 'styled-components'

import BoldFont from './assets/fonts/Poppins-Bold.ttf'
import RegularFont from './assets/fonts/Poppins-Regular.ttf'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  @font-face {
    font-family: 'bold';
    src: url(${BoldFont});
  }

  @font-face {
    font-family:'regular';
    src: url(${RegularFont});
  }
`

export default GlobalStyles