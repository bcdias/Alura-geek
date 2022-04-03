import styled from "styled-components";
import { Container, Secao } from "../container";
import banner from '../../assets/img/banner.jpg';
import { azulConteudo, branco } from "../UI/variaveis";

const ImagemFundo = styled.div`
    background-image: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.6)), url(${banner});
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    height: 192px;
    

    @media screen and (min-width: 768px){
        height: 352px;
    }

`
const ConteudoHome = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: end;
    align-items: start;
    height: 100%;
`

const Titulo = styled.h1`
    color: ${branco};
    font-size: 1.35rem;
    font-weight: 700;
    
    @media screen and (min-width: 768px){
        font-size: 3.25rem;
    }
`

const Texto = styled.p`
    color: ${branco};
    font-size: 0.8rem;
    font-weight: 600;
    margin: 8px 0;

    @media screen and (min-width: 768px){
        font-size: 1.25rem;
        margin: 16px 0;
    }
`
const Link = styled.a`
    background-color: ${azulConteudo};
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






const Home = () => {
    return (

        <Secao>
            <ImagemFundo>
                <Container>
                    <ConteudoHome>
                        <Titulo>Dezembro Promocional</Titulo>
                        <Texto>
                            Produtos selecionados com 33% de 
                            desconto
                        </Texto>
                        <Link href="#">Ver Consoles</Link>
                    </ConteudoHome>
                </Container>
            </ImagemFundo>
        </Secao>
    );
}

export default Home
