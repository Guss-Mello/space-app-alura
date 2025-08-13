import { styled } from "styled-components";
import EstilosGlobais from "./assets/componentes/EstilosGlobais";
import Cabecalho from "./assets/componentes/Cabecalho";
import BarraLateral from "./assets/componentes/BarraLateral";
import Banner from "./assets/componentes/Banner";
import bannerBackground from "./assets/banner.png";
import Galeria from "./assets/componentes/Galeria";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {


  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>

        <Cabecalho />
        <MainContainer>

          <BarraLateral />

          <ConteudoGaleria>
            <Banner texto="A galeria mais completa de fotos do espaco!" backgroundImage={bannerBackground} />
            <Galeria />
          </ConteudoGaleria>

        </MainContainer>

      </AppContainer>
    </FundoGradiente>
  )
}

export default App
