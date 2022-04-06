import styled from "styled-components";
import { branco, cinzaInput, preto } from "../UI/variaveis";

export const TituloFormulario = styled.h3`
    color: ${preto};
    font-weight: 700;
    margin-bottom: 8px;
`

export const AreaDoInput = styled.div`
    background-color: ${branco};
    box-sizing: border-box;
    height: 56px;
    margin-bottom:16px;
    width: 100%;
`
export const TituloInput = styled.label`
    color: ${cinzaInput};
    display:block;
    font-size: .8rem;
    padding: 8px 0 0 12px;
`

export const InputDeDados = styled.input`
    border: none;
    color: ${preto};
    height: calc(100% - 19px);
    outline: none;
    width:100%;
`
export const InputMensagem = styled.textarea`
    color: ${preto};
    border: none;
    height: 82px;
    margin-bottom: 8px;
    resize: none;
    outline: none;
    padding: 16px 0 0 12px;
    width: 100%;
`