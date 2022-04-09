import styled from "styled-components";
import Home from "../home"
import StarWars from "../star-wars";
import Consoles from "../consoles";
import Diversos from "../diversos";


// const SecaoPrincipal = styled.main`
//     box-sizing: border-box;
// `

const Principal = () => {
    return (
        <>
            <Home />
            <StarWars />
            <Consoles />
            <Diversos />
        </>
    )
}

export default Principal
