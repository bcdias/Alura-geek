import { createGlobalStyle } from "styled-components";
import { azulConteudo, preto } from "./UI/variaveis";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
        
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: ${azulConteudo};
        list-style-type: none;
    }
`