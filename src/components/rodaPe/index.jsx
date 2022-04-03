import styled from "styled-components";
import FaleConosco from "../faleConosco";
import Institucional from "../institucional";

const RodaPeContainer = styled.footer`
    box-sizing: border-box;
    width: 100vw;
`

const RodaPe = () => {
    return(
        <RodaPeContainer>
            <Institucional />
        </RodaPeContainer>
    )
}


export default RodaPe