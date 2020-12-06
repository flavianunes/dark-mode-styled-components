import { createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    h1, a {
      color: ${({theme}) => theme.title};
    }
  }
`

export default GlobalStyles