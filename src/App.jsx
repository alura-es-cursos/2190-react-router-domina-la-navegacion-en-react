import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import ModalZoom from "./components/ModalZoom"
import Pie from "./components/Pie"
import { Route, Routes, useLocation } from "react-router"
import Home from "./views/Home"
import MasVistas from "./views/MasVistas"
import Favoritas from "./views/Favoritas"
import Nuevas from "./views/Nuevas"
import Sorprendeme from "./views/Sorprendeme"
import GaleriaLayout from "./components/GaleriaLayout"
import DetalleImagen from "./views/DetalleImagen"
import Login from "./views/Login"
import ProtectorRutas from "./components/ProtectorRutas"
import { AnimatePresence } from "framer-motion"
import Error404 from "./views/404"

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
  const location = useLocation();

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />

        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />

            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route element={<ProtectorRutas></ProtectorRutas>}>
                <Route path="/galeria" element={<GaleriaLayout></GaleriaLayout>}>
                  <Route path="mas-vistas" element={<MasVistas></MasVistas>}></Route>
                  <Route path="favoritas" element={<Favoritas></Favoritas>}></Route>
                  <Route path="nuevas" element={<Nuevas></Nuevas>}></Route>
                  <Route path="sorprendeme" element={<Sorprendeme></Sorprendeme>}></Route>
                </Route>
                <Route path="/foto/:id" element={<DetalleImagen></DetalleImagen>}></Route>
              </Route>
              <Route path="*" element={<Error404></Error404>}></Route>
            </Routes>

          </MainContainer>
        </AppContainer>
        <ModalZoom />
        <Pie />

      </FondoGradiente>
    </>
  )
}

export default App
