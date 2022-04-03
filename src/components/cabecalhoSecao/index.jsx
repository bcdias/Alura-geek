import styled from "styled-components";
import TituloSecao from "../tituloSecao";
import { ArrowRight } from 'react-bootstrap-icons';
import { azulConteudo } from "../UI/variaveis";


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const VerTudo = styled.a`
    font-weight: 700;
`
const Seta = styled.i`
    padding-left: 6px;
    font-size: 1rem;
    vertical-align: middle;
`


const CabecalhoSecao = (props) => {
    return (
        <Container>
            <TituloSecao>{props.titulo}</TituloSecao>
            <VerTudo href="#">Ver Tudo<Seta><ArrowRight /></Seta></VerTudo>
        </Container>
    )
}

export default CabecalhoSecao
