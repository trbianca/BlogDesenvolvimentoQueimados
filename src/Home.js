import React from "react"
import styled from "styled-components"
import { createGlobalStyle} from "styled-components"


const GlovalStyle = createGlobalStyle`
*{
  marin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const CaixaPrincipal = styled.div`
    background-color: #D2691E;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`
const H1 = styled.h1`
    font-size: 2em;
`

const CaixaPara = styled.div`
    width: 50%;
    height: 60%;
    // background-color: brown;
    font-size: 0.90em;
`

export default function Home (){
    return(
        <CaixaPrincipal>
            <H1>Os Objetivos de Desenvolvimento na cidade de Queimados</H1>
            <CaixaPara>
                <p>Os Objetos de Desenvolvimento na cidade de Queimados, trata-se de um apelo da população
                da cidade de Queimados, localizada no estado do Rio de Janeiro, em pró de 
                melhorias na cidade visando o bem estar das pessoas que lá habitam.
                </p>
            </CaixaPara>
        </CaixaPrincipal>
    )
}