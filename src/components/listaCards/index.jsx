import styled from "styled-components";
import Card from "../cardProdutos";


const Lista = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    row-gap: 16px; 
    
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media screen and (min-width: 1024px){
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
`

const Itens = styled.li`
margin-top: 16px;

:nth-child(5){
    display:none;
}
:nth-child(6){
    display:none;
}

@media screen and (min-width: 1024px){
    
    :nth-child(5){
        display:block;
    }
    :nth-child(6){
        display:block;
    }
}
`

const ListaCards = (props) => {
    return (
        <Lista>
            {props.dados.map((dados, index) => {
                return(
                <Itens key={index}>
                    <Card
                        img={dados.img}
                        produto={dados.produto}
                        valor={dados.valor}
                        linkProduto={dados.link}
                    />
                </Itens>
                )
            })}
        </Lista>
    )
}

export default ListaCards
