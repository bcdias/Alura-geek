import { Container, Secao } from "../container";
import CabecalhoSecao from "../cabecalhoSecao";
import ListaCards from "../listaCards";
import { dadosDiversos } from "../../dados/dados-cards";



const Diversos = () => {
    return (
        <Secao>
            <Container>
                <CabecalhoSecao titulo="Diversos"></CabecalhoSecao>
                <ListaCards 
                dados={dadosDiversos} 
                secao={"dadosDiversos"}
                />
            </Container>
        </Secao>
    )
}

export default Diversos
