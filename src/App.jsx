import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import ModalZoom from "./components/ModalZoom"
import Pie from "./components/Pie"
import GlobalContextProvider from "./context/GlobalContext"
import { Route, Routes } from "react-router"
import Home from "./views/Home"
import MasVistas from "./views/MasVistas"
import Favoritas from "./views/Favoritas"
import Nuevas from "./views/Nuevas"
import Sorprendeme from "./views/Sorprendeme"
import GaleriaLayout from "./components/GaleriaLayout"

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width:100%;
min-height:100vh;
`
const AppContainer = styled.div`
  width:1280px;
  max-width:100%;
margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap:24px;
`


const App = () => {

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <GlobalContextProvider>
          <AppContainer>
            <Cabecera />
            <MainContainer>
              <BarraLateral />
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/galeria" element={<GaleriaLayout></GaleriaLayout>}>
                  <Route path="mas-vistas" element={<MasVistas></MasVistas>}></Route>
                  <Route path="favoritas" element={<Favoritas></Favoritas>}></Route>
                  <Route path="nuevas" element={<Nuevas></Nuevas>}></Route>
                  <Route path="sorprendeme" element={<Sorprendeme></Sorprendeme>}></Route>
                </Route>
              </Routes>
            </MainContainer>
          </AppContainer>
          <ModalZoom />
          <Pie />
        </GlobalContextProvider>

      </FondoGradiente>
    </>
  )
}

export default App
