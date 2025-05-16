import React, { useContext } from 'react'
import ContenidoGaleria from '../../components/ContenidoGaleria'
import Banner from '../../components/Banner'
import banner from '../../assets/banner.png';
import ImagenesContainer from '../../components/ImagenesContainer';
import { GlobalContext } from '../../context/GlobalContext';
import Imagen from '../../components/Galeria/Imagen';
import isSearchVisible from '../../utils/IsSearchVisible';
import isNewFoto from '../../utils/IsNewFoto';
import PaginaAnimacion from '../../components/PaginaAnimacion';


const Nuevas = () => {
    const { state } = useContext(GlobalContext);
    const isFotoVisible = (consulta, foto) => {
        return isSearchVisible(consulta, foto) && isNewFoto(foto.fecha);
    }

    return (
        <PaginaAnimacion>
            <ContenidoGaleria>
                <Banner texto="Las más nuevas!" backgroundImage={banner} />
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
        </PaginaAnimacion>
    )
}

export default Nuevas