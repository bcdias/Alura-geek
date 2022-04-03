import styled from "styled-components";
import { azulConteudo, branco } from "../UI/variaveis";

export const Botao = styled.button`
    background-color: ${azulConteudo};
    border: none;
    box-sizing: border-box;
    color: ${branco};
    font-size: .8rem;
    font-weight: 600;
    padding: 12px 16px;

    @media screen and (min-width: 1024px){
        font-size: 1rem;
        padding: 16px;
    }
`