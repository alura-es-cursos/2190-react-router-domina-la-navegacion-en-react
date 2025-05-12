import React, { useContext } from 'react'
import ContenidoGaleria from '../../components/ContenidoGaleria'
import Banner from '../../components/Banner'
import banner from '../../assets/banner.png';
import ImagenesContainer from '../../components/ImagenesContainer';
import { GlobalContext } from '../../context/GlobalContext';
import Imagen from '../../components/Galeria/Imagen';
import isSearchVisible from '../../utils/IsSearchVisible';
import isNewFoto from '../../utils/IsNewFoto';
import isIdRandom from '../../utils/IsIdRandom';


const Sorprendeme = () => {
    const { state } = useContext(GlobalContext);
    const idRandom = isIdRandom(0, state.fotosDeGaleria.length);
    console.log(idRandom);
    const isFotoVisible = (consulta, foto) => {
        return isSearchVisible(consulta, foto) && Number(foto.id) === idRandom;
    }

    return (
        <ContenidoGaleria>
            <Banner texto="Las más Sorprendeme!" backgroundImage={banner} />
            <ImagenesContainer>
                {state.fotosDeGaleria.filter(foto => {
                    return isFotoVisible(state.consulta, foto);
                })
                    .map(foto => <Imagen
                        key={foto.id}
                        foto={foto} />)
                }
            </ImagenesContainer>
        </ContenidoGaleria>
    )
}

export default Sorprendeme