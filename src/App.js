import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import styled from "styled-components"
import { createGlobalStyle} from "styled-components"
import Home from "./Home"
import Cultura from "./Problematicas/Cultura"
import Estrutura from "./Problematicas/Estrutura"
import Mobilidade from "./Problematicas/Mobilidade"
import Transito from "./Problematicas/Transito"
import Vulnerabilidade from "./Problematicas/Vulnerabilidade"
import FotoCultura from "./Imagens/cultura.png"
import FotoEstrutura from "./Imagens/estrutura.png"
import FotoMobilidade from "./Imagens/mobilidade.png"
import FotoTransito from "./Imagens/transito.png"
import FotoPessoas from "./Imagens/pessoas.png"

const GlovalStyle = createGlobalStyle`
*{
  marin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const CaixaEngloba = styled.div`
  // background-color: 	#E9967A;
  width: 80%;
  height: 300px;
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-top: 10%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`


const CaixaCultura = styled.div`
  width: 150px;
  height: 130px;
  background-color:	#FF4500;
  font-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  flex-direction: column;
`
const CulturaFoto = styled.img`
  width: 25%;
  height: 30%
`

const CaixaEstrutura = styled.div`
  width: 150px;
  height: 130px;
  background-color:	#FFA500;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  flex-direction: column;
`
const EstruturaFoto = styled.img`
  width: 45%;
  heigth: 50%;
`

const CaixaMobilidade = styled.div`
  width: 150px;
  height: 130px;
  background-color: #FF8C00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  flex-direction: column;
`
const MobilidadeFoto = styled.img`
  width: 55%;
  height: 25%
`

const CaixaTransito = styled.div`
  width: 150px;
  height: 130px;
  background-color: #FF6347;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  flex-direction: column;
`

const TransitoFoto = styled.img`
  width: 25%;
  height: 40%;
`

const CaixaVulnerabilidade = styled.div`
  width: 150px;
  height: 130px;
  background-color: #FF7F50;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  flex-direction: column;
`

const PessoasFoto = styled.img`
  width: 50%;
  height: 30%;
`


export default function App (){
  return(
    <Router>

<Routes>
      <Route path = "/" element={<Home/>}/>

        <Route path = "/Cultura" element={<Cultura/>}/>
        <Route path = "/Estrutura" element={<Estrutura/>}/>
        <Route path = "/Mobilidade" element={<Mobilidade/>}/>
        <Route path = "/Transito" element={<Transito/>}/>
        <Route path = "/Vulnerabilidade" element={<Vulnerabilidade/>}/>
      </Routes>
   


      <CaixaEngloba>
        <div><Link to="/"></Link></div>

        <StyledLink to="/Cultura"><CaixaCultura><CulturaFoto src={FotoCultura} alt="Cultura"/>Cultura</CaixaCultura></StyledLink>
        <StyledLink to="/Estrutura"><CaixaEstrutura><EstruturaFoto src={FotoEstrutura} alt="Estrutura"/>Estrutura</CaixaEstrutura></StyledLink>
        <StyledLink to="/Mobilidade"><CaixaMobilidade><MobilidadeFoto src={FotoMobilidade} alt="Mobilidade"/>Mobilidade</CaixaMobilidade></StyledLink>
        <StyledLink to="/Transito"><CaixaTransito><TransitoFoto src={FotoTransito} alt="Transito"/>Trânsito</CaixaTransito></StyledLink>
        <StyledLink to="/Vulnerabilidade"><CaixaVulnerabilidade><PessoasFoto src={FotoPessoas} alt="Pessoas"/>Pessoas em Situação de Rua</CaixaVulnerabilidade></StyledLink>
      </CaixaEngloba>



    </Router>
  )
}
