import React from "react"
import styled from "styled-components"
import FotoEstrutura from "../Imagens/estrutura.png"

const CaixaPrincipal = styled.div`
    width: 100%;
    height: 395px;
    // background-color:	#FFDEAD;
`

const Introducao = styled.div`
    width: 100%;
    height: 200px;
    background-color: #FFA500;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Solucoes = styled.div`
    width: 50%;
    height: 300px;
    // background-color:	#FFDEAD;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 5%
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
const EstruturaFoto = styled.img`
    width: 30%;
    height: 50%;
`

const EnglobaInf = styled.div`
// background-color: black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 30%;
justify-content: space-around;
`

const CaixaInicio = styled.div`
    width: 50px;
    height: 30px;
    background-color: #FFA500;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`
const TextoA = styled.a`
    text-decoration: none;
    color: white;
`

export default function Estrutura (){
    return(
        <CaixaPrincipal>
            <Introducao>
                <EnglobaInf><H1>Estrutura</H1>
            <EstruturaFoto src={FotoEstrutura} alt="Estrutura Urbana"/>
            </EnglobaInf>
            </Introducao>
            <Solucoes>
                <ParagrafosObj>Objetivo 1- Melhoramento da estrutura urbana da cidade.</ParagrafosObj>
                <Paragrafos>1.1- Reformar as calçadas da cidade para melhor acessibilidade.
                </Paragrafos>
                <Paragrafos>1.2- Construir ciclovias pela cidade devido a grande quantidade de ciclistas.
                </Paragrafos>
                <TextoA href="https://desenvolvimentodequeimados.netlify.app"><CaixaInicio>Início</CaixaInicio></TextoA>
            </Solucoes>
        </CaixaPrincipal>
    )
}