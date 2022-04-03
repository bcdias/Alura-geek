import styled from "styled-components";
import Home from "../home";
import StarWars from "../star-wars";
import Consoles from "../consoles";
import Diversos from "../diversos/inedex";


const SecaoPrincipal = styled.main`
    box-sizing: border-box;
`

const Principal = () => {
    return (
        <SecaoPrincipal>
            <Home />
            <StarWars />
            <Consoles />
            <Diversos />
        </SecaoPrincipal>
    )
}

export default Principal
