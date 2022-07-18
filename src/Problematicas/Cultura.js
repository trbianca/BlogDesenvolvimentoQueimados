import React from "react"
import styled from "styled-components"
import FotoCultura from "../Imagens/cultura.png"

const CaixaPrincipal = styled.div`
    width: 100%;
    height: 450px;
    // background-color:#FFE4C4;

`

const Introducao = styled.div`
    width: 100%;
    height: 200px;
    background-color: #FF4500;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Solucoes = styled.div`
width: 50%;
height: 300px;
// background-color:#FFE4C4;
margin: auto;
display: flex;
flex-direction: column;
margin-top: 2%;
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

const CulturaFoto = styled.img`
    width: 20%;
    height: 45%;
`

const EnglobaInf = styled.div`
// background-color: black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 20%;
justify-content: space-around;
`

const CaixaInicio = styled.div`
    width: 50px;
    height: 30px;
    background-color: #FF4500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`
const TextoA = styled.a`
    text-decoration: none;
    color: white;
`

export default function Cultura (){
    return(
        <CaixaPrincipal>
            <Introducao>
                <EnglobaInf><H1>Cultura</H1>
            <CulturaFoto src={FotoCultura} alt="Cultura"/>
            </EnglobaInf>
            </Introducao>
            
            <Solucoes>
                <ParagrafosObj>Objetivo 1- Formentar as atitvidades culturais da cidade.</ParagrafosObj>
                <Paragrafos>1.1- Até 2024 abraçar e/ou promover parcerias de eventos culturais já feitas
                    por iniciativas privadas ou de coletivos.
                </Paragrafos>
                <Paragrafos>1.2- Retornar com a comemoração do carnaval e com os shows no aniversário da cidade até 2026.</Paragrafos>
                <Paragrafos>1.3- Investir na contrução de um teatro e de um cinema na cidade até 2035.</Paragrafos>
                <TextoA href=""><CaixaInicio>Início</CaixaInicio></TextoA>
            </Solucoes>
        </CaixaPrincipal>
    )
}