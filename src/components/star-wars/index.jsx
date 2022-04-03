import { Container, Secao } from "../container";
import CabecalhoSecao from "../cabecalhoSecao";
import ListaCards from "../listaCards";
import { dadosStarWars } from "../../dados/dados-cards";



const StarWars = () => {
    return (
        <Secao>
            <Container>
                <CabecalhoSecao titulo="Star Wars"></CabecalhoSecao>
                <ListaCards dados={dadosStarWars} />
            </Container>
        </Secao>
    )
}

export default StarWars
