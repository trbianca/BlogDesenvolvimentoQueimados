import React from "react"
import styled from "styled-components"
import TransitoFoto from "../Imagens/transito.png"

const CaixaPrincipal = styled.div`
    width: 100%;
    height: 430px;
    // background-color: #FFDEAD;
`

const Introducao = styled.div`
width: 100%;
height: 200px;
background-color: #FF6347;
display: flex;
justify-content: center;
align-items: center;
`
const Solucoes = styled.div`
width: 50%;
height: 300px;
// background-color: #FFDEAD;
margin: auto;
display: flex;
flex-direction: column;
margin-top: 5%;
`
const H1 = styled.h1`
    font-size: 3em;
    color: white;
`

const Paragrafos = styled.h2`
    font-size: 0.90em;
    color: #D2691E;

`

const ParagrafosObj = styled.h3`
    font-size: 1em;
    color: #D2691E;

`

const EnglobaInf = styled.div`
// background-color: black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 25%;
justify-content: space-around;
`
const FotoTransito = styled.img`
    width: 25%;
    height: 40%;
`

const CaixaInicio = styled.div`
    width: 50px;
    height: 30px;
    background-color: #FF6347;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`
const TextoA = styled.a`
    text-decoration: none;
    color: white;
`

export default function Transito (){
    return(
        <CaixaPrincipal>
            <Introducao>
                <EnglobaInf>
                <H1>Trânsito</H1>
                <FotoTransito src={TransitoFoto} alt="Transito"/>
                </EnglobaInf>
                </Introducao>
            <Solucoes>
                <ParagrafosObj>Objetivo 1- Melhorar o trafego pela cidade.</ParagrafosObj>
                <Paragrafos>1.1- Melhorar os semáforos desconfigurados já instalados na cidade.</Paragrafos>
                <Paragrafos>1.2- Instalar novos semáforos pela cidade.</Paragrafos>
                <Paragrafos>1.3- Instalar postos da lei seca nos finais de semana.</Paragrafos>
                <TextoA href=""><CaixaInicio>Início</CaixaInicio></TextoA>
            </Solucoes>
        </CaixaPrincipal>
    )
}