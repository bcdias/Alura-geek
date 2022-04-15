import styled from "styled-components";
import { cinzaBg } from "../UI/variaveis";

const Container = styled.div`
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
    height: 100%;


    @media screen and (min-width: 768px){
        padding: ${props => props.produtos ? "0 16px" : "16px 32px"};
    } 

    @media screen and (min-width: 1440px){
        padding-inline: ${props => props.produtos ? "16px" : "152px"};
        width: ${props => props.produtos ? "50%" : "100%"};
        display: ${props => props.produtos ? "flex" : "block"};
        flex-direction: ${props => props.produtos ? "column" : "none"};
        justify-content: ${props => props.produtos ? "center" : "none"};
    }
`

const Secao = styled.section`
    box-sizing: border-box;
    background-color: ${props => props.bgCinza ? cinzaBg : "none"};
 
`

export { Container, Secao }