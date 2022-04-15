import styled from "styled-components";
import { preto } from "../UI/variaveis";

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
width 100%;
`

export const ImgCard = styled.img`
height: ${props => props.produtos ? "192px" : "174px"};
margin-bottom: 8px;
object-fit: cover;
width:100%;

@media screen and (min-width: 768px){
    height: ${props => props.produtos ? "100%" : "174px"};
    width: ${props => props.produtos ? "50%" : "100%"};

}


`
export const TituloProduto = styled.h3`
color: ${preto};
font-size:.9rem;
font-weight: 500;
margin-bottom: 8px;

@media screen and (min-width: 768px){
    font-size: ${props => props.produtos ? "1.5rem" : "0.9rem"}
}
`

export const ValordoProduto = styled.p`
color: ${preto};
font-size:1.125rem;
font-weight: 700;
margin-bottom: 8px
`

export const DescricaoProduto = styled.p`
color: ${preto};
font-size:1.125rem;
font-weight: 400;
`
 

export const LinkProduto = styled.a`
font-weight: 700;
font-size:.9rem;
`