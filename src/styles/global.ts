import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --dark-blue: #112f40;
    --light-blue: #506873;
    --light-orange: #e8b57c;
    --white: #f0f2f5;
}
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: Roboto;
 }

 body {
    background: var(--dark-blue);
    -webkit-font-smoothing: antialiased;
 }
`;
