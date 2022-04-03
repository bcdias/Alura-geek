import styled from "styled-components";
import { preto } from "../UI/variaveis";




const Navegacao = styled.nav`
`

const ListaMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px){
        align-items: start;
    };
`

const MenuItens = styled.li`
 margin-bottom: 16px;
 
 @media screen and (min-width: 768px){
    margin-bottom: 24px;

 }
`

const MenuLink = styled.a`
    color: ${preto};
    font-weight: 500;
`


const Menu = (props) => {
    return (
        <Navegacao>
            <ListaMenu >
                {props.dadosMenu.map((conteudo, index) => {
                    return (
                        <MenuItens key={index}>
                            <MenuLink href={conteudo.url}>
                                {conteudo.texto}
                            </MenuLink>
                        </MenuItens>
                    )
                })}
            </ListaMenu>
        </Navegacao>
    )
}

export default Menu

