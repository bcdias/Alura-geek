import { DescricaoProduto, ImgCard, TituloProduto, ValordoProduto } from "../componentesCardsProdutos"
import { Container, Secao } from "../container"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { dadosStarWars, dadosConsoles, dadosDiversos } from "../../dados/dados-cards"
import ListaCards from "../listaCards"


const ProdutoContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px){
        flex-direction: row;
        padding-left: 32px;
        margin: 32px 0;
    }

`


const PaginaProdutos = () => {
    const { secao, id } = useParams();
    const dados = {
        dadosStarWars: dadosStarWars,
        dadosConsoles: dadosConsoles,
        dadosDiversos: dadosDiversos
    }
    return (
        <Secao>
            <ProdutoContainer>
                <ImgCard produtos src={dados[secao][id].img} />
                <Container produtos>
                    <TituloProduto produtos>{dados[secao][id].produto}</TituloProduto>
                    <ValordoProduto>{dados[secao][id].valor}</ValordoProduto>
                    <DescricaoProduto>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nisi consequatur harum vero, doloribus illum nam mollitia eaque! Quidem blanditiis cum nihil sequi aliquam nemo officiis ipsa asperiores corporis accusantium.</DescricaoProduto>
                </Container>
            </ProdutoContainer>
            <Container>
                <ListaCards dados={dados[secao]} secao={secao} />
            </Container>
        </Secao>
    )
}

export default PaginaProdutos