import React from "react"
import styled from "styled-components"
import PessoasFotos from "../Imagens/pessoas.png"

const CaixaPrincipal = styled.div`
    width: 100%;
    height: 530px;
    // background-color: #FFDEAD;
`

const Introducao = styled.div`
width: 100%;
height: 200px;
background-color: #FF7F50;
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

const EnglobaInf = styled.div`
// background-color: black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 70%;
justify-content: space-around;
`
const FotoPessoas = styled.img`
    width: 20%;
    height: 40%;
`

const CaixaInicio = styled.div`
    width: 50px;
    height: 30px;
    background-color: #FF7F50;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`
const TextoA = styled.a`
    text-decoration: none;
    color: white;
`

export default function Vunerabilidade (){
    return(
        <CaixaPrincipal>
            <Introducao>
                <EnglobaInf>
                    <H1>Pessoas em Situação de Rua</H1>
                    <FotoPessoas src={PessoasFotos} alt="Pessoas"/>
                </EnglobaInf>
                </Introducao>
            <Solucoes>
                <ParagrafosObj>Objetivo 1- Trazer melhores condições para pessoas em situação de rua.</ParagrafosObj>
                <Paragrafos>1.1- Abertura de um restaurante popular até 2023.</Paragrafos>
                <Paragrafos>1.2- Criação de um sistema que ampare pessoas em situação de rua.
                </Paragrafos>
                <Paragrafos>1.3- Abraçar iniciativas que amparam pessoas em situação de rua.</Paragrafos>

                <ParagrafosObj>Objetivo 2- Retirar pessoas da situação de rua.</ParagrafosObj>
                <Paragrafos>2.1- Aumentar as quantidades de abrigos pela cidade até 2025.</Paragrafos>
                <Paragrafos>2.2- Criar abrigos femininos até 2023.</Paragrafos>
                <TextoA href=""><CaixaInicio>Início</CaixaInicio></TextoA>
              
            </Solucoes>
        </CaixaPrincipal>
    )
}