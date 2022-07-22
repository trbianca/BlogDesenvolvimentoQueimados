import React from "react"
import styled from "styled-components"
import FotoMobilidade from "../Imagens/mobilidade.png"

const CaixaPrincipal = styled.div`
    width: 100%;
    height: 410px;
    // background-color:	#FFDEAD;
`

const Introducao = styled.div`
width: 100%;
height: 200px;
background-color: #FF8C00;
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
const MobilidadeFoto = styled.img`
    width: 30%;
    height: 50%;
`

const EnglobaInf = styled.div`
    // background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 35%;
    justify-content: space-around;

`
const CaixaInicio = styled.div`
    width: 50px;
    height: 30px;
    background-color: #FF8C00;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`
const TextoA = styled.a`
    text-decoration: none;
    color: white;
`

export default function Mobilidade (){
    return(
        <CaixaPrincipal>
            
            <Introducao>
            <EnglobaInf><H1>Mobilidade</H1>
            <MobilidadeFoto src={FotoMobilidade} alt="Mobilidade"/>
            </EnglobaInf>
            </Introducao>
            
            <Solucoes>
                <ParagrafosObj>Objetivo 1- Multiplicar as frotas de ônibus da cidade.</ParagrafosObj>
                <Paragrafos>1.1- Analisar novos acordos com mais empresas de ônibus para
                desmonopolizar as atuais empresas responsáveis pelo transporte público da cidade.
                </Paragrafos>
                <Paragrafos>1.2- Estudar quais partes da cidade interagem em maior demanda com a outra.</Paragrafos>
                <TextoA href="https://desenvolvimentodequeimados.netlify.app"><CaixaInicio>Início</CaixaInicio></TextoA>
            </Solucoes>
        </CaixaPrincipal>
    )
}