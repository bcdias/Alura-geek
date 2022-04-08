import styled from "styled-components";
import logo_alura_geek from "../../assets/img/logo/Logo.svg"
import { azulConteudo, cinzaInput, cinza } from "../UI/variaveis";
import icone_lupa from "../../assets/img/icones/lupa-mobile.png"
import {Link} from "react-router-dom"

const CabecalhoContainer = styled.header`
    align-items: center;
    box-sizing: border-box;    
    display: flex;
    justify-content: space-between;
    PADDING: 16PX; 
    width:100vw;

    @media screen and (min-width: 768px){
        padding-inline: 32px;
    } 


    @media screen and (min-width: 1440px){
        padding-inline: 152px;
    }
`
const Container = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width:100px;
    heidth: 28px;

    @media (min-width: 768px){
        width:100px;
        heidth: 28px;    
    }

    @media (min-width: 1024px){
        width:272px;
        heidth: 40px;    
    }
`
const BarraPesquisa = styled.div`
    display:none;

    @media (min-width: 768px){
        display: flex;
        align-items: center;
        background-color: ${cinza};
        border-radius: 20px;  
        box-size:border-box;
        padding:0 16px; 
        margin-left: 32px;
        width: 272px;
        height: 40px;    
    }
    @media (min-width:  1024px){
        max-width: 393px;

    }
`
const InputPesquisar = styled.input`
    background-color: transparent;
    border: none;
    border-radius: 20px; 
    color: ${cinzaInput};
    outline: none;
    height: 100%;
    width: 100%;
`

const BotaoLogin = styled(Link)`
    border: 1px solid;
    border-color:${azulConteudo};
    padding: 12px 47px;

    @media (min-width: 768px){
       padding-inline: 64px; 
    }
`

const IconeLupa = styled.img`
    Width 17px;
    Height 17px;

    @media (min-width: 768px){
        display: none;
    }
`
const Cabecalho = () => {
    return (
        <CabecalhoContainer>
                <Container>
                    <Link to="/"><Logo src={logo_alura_geek} alt="Logo da Alura Geek" /></Link>
                    <BarraPesquisa>
                        <InputPesquisar type="search" placeholder="O que deseja encontar?" />
                        <IconeLupa src={icone_lupa} alt="Botão pesquisar" style={{ display: "inline-block" }} />
                    </BarraPesquisa>
                </Container>
                <BotaoLogin to="/login" >Login </BotaoLogin>
                <IconeLupa src={icone_lupa} alt="Botão pesquisar" />
        </CabecalhoContainer>
    )
}

export default Cabecalho