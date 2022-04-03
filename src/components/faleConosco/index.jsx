import styled from "styled-components";
import { Botao } from "../botao";
import { branco, cinzaInput, preto } from "../UI/variaveis";

const Formulario = styled.form`
width: 100%;
height: 100%;
`
const Titulo = styled.h3`
    color: ${preto};
    font-weight: 700;
    margin-bottom: 8px;
`
const AreaInputNome = styled.div`
    background-color: ${branco};
    box-sizing: border-box;
    height: 56px;
    margin-bottom:16px;
    width: 100%;
`
const TituloInputNome = styled.label`
    color: ${cinzaInput};
    display:block;
    font-size: .8rem;
    padding: 8px 0 0 12px;
`

const InputNome = styled.input`
    border: none;
    color: ${preto};
    height: calc(100% - 19px);
    outline: none;
    width:100%;
`

const InputMensagem = styled.textarea`
    color: ${preto};
    border: none;
    height: 82px;
    margin-bottom: 8px;
    resize: none;
    outline: none;
    padding: 16px 0 0 12px;
    width: 100%;
`

const FaleConosco = () => {
    return (
        <Formulario>
            <Titulo>Fale conosco</Titulo>
            <AreaInputNome >
                <TituloInputNome for="nome">Nome</TituloInputNome>
                <InputNome type="text" id="nome"></InputNome>
            </AreaInputNome>
            <InputMensagem placeholder="Escreva sua mensagem" ></InputMensagem>
            <Botao type="submit">Enviar mensagem</Botao>
        </Formulario>
    )
}


export default FaleConosco
