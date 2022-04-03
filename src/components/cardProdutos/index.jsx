import { PersonWorkspace } from "react-bootstrap-icons";
import styled from "styled-components";
import { preto } from "../UI/variaveis";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width 100%;
`

const ImgCard = styled.img`
    height: 174px;
    margin-bottom: 8px;
    object-fit: cover;
    width:100%;
`
const TituloProduto = styled.h3`
    color: ${preto};
    font-size:.9rem;
    font-weight: 500;
    margin-bottom: 8px
`

const ValordoProduto = styled.p`
    color: ${preto};
    font-size:1.125rem;
    font-weight: 700;
    margin-bottom: 8px
`
const LinkProduto = styled.a`
    font-weight: 700;
    font-size:.9rem;
`


const Card = (props) => {
    return (
        <CardContainer>
            <ImgCard src={props.img} alt="" />
            <TituloProduto>{props.produto}</TituloProduto>
            <ValordoProduto>{props.valor}</ValordoProduto>
            <LinkProduto href={props.linkProduto}>Ver produto</LinkProduto>
        </CardContainer>
    )
}

export default Card
