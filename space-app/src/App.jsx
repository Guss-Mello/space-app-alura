import { styled } from "styled-components";
import EstilosGlobais from "./assets/componentes/EstilosGlobais";
import Cabecalho from "./assets/componentes/Cabecalho";
import BarraLateral from "./assets/componentes/BarraLateral";
import Banner from "./assets/componentes/Banner";
import bannerBackground from "./assets/banner.png";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  
`

function App() {


  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />
      <BarraLateral />
      <Banner texto="A galeria mais completa de fotos do espaco!" backgroundImage={bannerBackground} />
    </FundoGradiente>
  )
}

export default App
