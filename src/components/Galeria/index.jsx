import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import Cargando from "../Cargando";
import isSearchVisible from "../../utils/IsSearchVisible"
import { useSearchParams } from "react-router"
import isTagValido from "../../utils/IsTagValido"


const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = () => {

    const { state } = useContext(GlobalContext);
    const [searchParams] = useSearchParams();
    const textoTag = searchParams.get('tag');

    const isFotoVisible = (consulta, foto) => {
        return isSearchVisible(consulta, foto) && isTagValido(foto.tagId, textoTag);
    }

    return (
        state.fotosDeGaleria.length == 0 ?
            <Cargando></Cargando> :
            <>
                <Tag />
                <GaleriaContainer>
                    <SeccionFluida>
                        <Titulo>Navegue por la galería</Titulo>
                        <ImagenesContainer>
                            {state.fotosDeGaleria.filter(foto => {
                                return isFotoVisible(state.consulta, foto);
                            })
                                .map(foto => <Imagen
                                    key={foto.id}
                                    foto={foto} />)
                            }
                        </ImagenesContainer>
                    </SeccionFluida>
                    <Populares />

                </GaleriaContainer>
            </>
    )
}

export default Galeria