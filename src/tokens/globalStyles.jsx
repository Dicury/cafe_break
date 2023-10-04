import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.white};
}

button, 
input,
textarea {
    font-family: inherit;
}

p {
  color: ${(props) => props.theme.colors.gray};
  line-height: 1.5rem;
}
`;
