import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    color: #000000;
    
    background-color: #dbecff;
  }
`

export default GlobalStyles
