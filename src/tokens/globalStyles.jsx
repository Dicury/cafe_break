import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

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
  background-color: ${Colors.CINZA_CLARO};
}

button, 
input,
textarea {
    font-family: inherit;
}

p {
  color: ${Colors.TEXTO_BASE};
  line-height: 1.5rem;
}
`;
