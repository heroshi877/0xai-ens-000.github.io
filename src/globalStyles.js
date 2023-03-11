import { injectGlobal } from 'emotion'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Overpass;
    background: black;
    margin: 0;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #ffffff;
    }

    &:visited {
      color: #ffffff;
    } 
  }
`
