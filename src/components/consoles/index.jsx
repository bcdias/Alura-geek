import { Container, Secao } from "../container";
import CabecalhoSecao from "../cabecalhoSecao";
import ListaCards from "../listaCards";
import { dadosConsoles } from "../../dados/dados-cards";


const Consoles = () => {
    return (
        <Secao>
            <Container>
                <CabecalhoSecao titulo="Consoles"></CabecalhoSecao>
                <ListaCards dados={dadosConsoles} />
            </Container>
        </Secao>
    )
}

export default Consoles
