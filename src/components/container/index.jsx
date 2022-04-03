import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    padding: 16px;
    width: 100%;
    height: 100%;

    @media screen and (min-width: 768px){
        padding-inline: 32px;
    } 

    @media screen and (min-width: 1024px){
        padding-inline: 32px;
    }
    @media screen and (min-width: 1440px){
        padding-inline: 152px;
    }
`

const Secao = styled.section`
    box-sizing: border-box;
`

export { Container, Secao }