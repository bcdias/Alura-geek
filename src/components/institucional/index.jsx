import styled from "styled-components";
import { Container } from "../container";
import { azulBg } from "../UI/variaveis";
import logo_alura_geek from "../../assets/img/logo/Logo.svg"
import FaleConosco from "../faleConosco";
import Menu from "../menu";
import { dadosMenu } from "../../dados/menu-rodape.js"



const InstitucionalContainer = styled.div`
    background-color: ${azulBg};
    width: 100%;
`
const ContainerConteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px){
       display: grid;
       grid-template-columns: (1fr 62%);
       grid-template-rows: (auto auto);

       grid-template-areas: 
       "logo fc" 
       "nv   fc";
    }

    @media screen and (min-width: 1024px){
       grid-template-columns: (1fr 1fr 1fr);

       grid-template-areas: 
       "logo nv fc";
    };

   
`

const PosicaoLogo = styled.div`
    @media screen and (min-width: 768px){
        grid-area: logo;
        height:100%;
    }
    @media screen and (min-width: 1024px){
        margin-top: 64px;
      }
`
const PosicaoMenu = styled.div`
    @media screen and (min-width: 768px){
        grid-area: nv;
        height:100%;
    }
    @media screen and (min-width: 1024px){
      margin-top: 64px;
    }
`
const PosicaoFaleConosco = styled.div`
    @media screen and (min-width: 768px){
        grid-area: fc;
        height:100%;
    }
    @media screen and (min-width: 1024px){
        margin-top: 64px;
      }
`


const Logo = styled.img`
    height: 50px;
    width: 176px;
    margin-bottom:16px;
`


const Institucional = () => {
    return (
        <InstitucionalContainer>
            <Container>
                <ContainerConteudo>
                    <PosicaoLogo>
                        <Logo src={logo_alura_geek} />
                    </PosicaoLogo>
                    <PosicaoMenu>
                        <Menu dadosMenu={dadosMenu} />
                    </PosicaoMenu>
                    <PosicaoFaleConosco>
                        <FaleConosco />
                    </PosicaoFaleConosco>
                </ContainerConteudo>
            </Container>
        </InstitucionalContainer>
    )
}

export default Institucional
