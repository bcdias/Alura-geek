import { CardContainer, ImgCard, TituloProduto, ValordoProduto, LinkProduto } from "../componentesCardsProdutos"
import { azulConteudo } from "../UI/variaveis"
import styled from "styled-components"
import { Link } from "react-router-dom"


const BotaoLogin = styled(Link)`
    border-color:${azulConteudo};
    font-weight: 700;
    font-size:.9rem;
`

const Card = (props) => {
    return (
        <CardContainer>
            <ImgCard src={props.img} alt="" />
            <TituloProduto>{props.produto}</TituloProduto>
            <ValordoProduto>{props.valor}</ValordoProduto>
            <BotaoLogin to={`/produtos/${props.secao}/${props.id}`} >Ver produto </BotaoLogin>
        </CardContainer>
    )
}

export default Card
