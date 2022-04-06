import styled from "styled-components";
import Institucional from "../institucional";
import { preto } from "../UI/variaveis";

const RodaPeContainer = styled.footer`
    box-sizing: border-box;
    width: 100vw;
`
const DesenvolvidoPor = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 32px;
`
const Desenvolvedor = styled.p`
    color: ${preto};
    text-align: center;

`

const RodaPe = () => {
    return(
        <RodaPeContainer>
            <Institucional />
            <DesenvolvidoPor> 
                <Desenvolvedor>
                    Desenvolvido por Bruno da Costa Dias
                </Desenvolvedor>
            </DesenvolvidoPor>
        </RodaPeContainer>
    )
}


export default RodaPe