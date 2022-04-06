import styled from "styled-components";
import { AreaDoInput, TituloInput, InputDeDados, InputMensagem, TituloFormulario } from "../inputs";
import { Botao } from "../botao";

const Formulario = styled.form`
width: 100%;
height: 100%;
`

const FaleConosco = () => {
    return (
        <Formulario>
            <TituloFormulario>Fale conosco</TituloFormulario>
            <AreaDoInput >
                <TituloInput htmlfor="nome">Nome</TituloInput>
                <InputDeDados type="text" id="nome"></InputDeDados>
            </AreaDoInput>
            <InputMensagem placeholder="Escreva sua mensagem" ></InputMensagem>
            <Botao type="submit">Enviar mensagem</Botao>
        </Formulario>
    )
}


export default FaleConosco
