import styled from "styled-components";
import { Container, Secao } from "../container";
import { TituloFormulario, InputDeDados } from "../inputs";
import { Botao } from "../botao";

const Formulario = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 86px 0;
    width: 100%;
    
    @media screen and (min-width: 768px){
        margin: 51px 0;
    };

    @media screen and (min-width: 1024px){
        margin: 91px 0;
    };
`

const FormularioLogin = ()=> {
    return(
        <Secao bgCinza>
            <Container bgCinza>
                <Formulario>
                    <TituloFormulario login>Iniciar Sessão</TituloFormulario>  
                    <InputDeDados login type="email" placeholder="Escreva seu email"></InputDeDados>              
                    <InputDeDados login type="password" placeholder="Escreva sua senha"></InputDeDados>
                    <Botao login>Entrar</Botao>
                </Formulario>                    
            </Container>
        </Secao>
    )
}

export default FormularioLogin