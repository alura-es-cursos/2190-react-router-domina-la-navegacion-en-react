import React, { useContext } from 'react'
import ContenidoGaleria from '../../components/ContenidoGaleria'
import Banner from '../../components/Banner'
import banner from '../../assets/banner.png';
import ImagenesContainer from '../../components/ImagenesContainer';
import { GlobalContext } from '../../context/GlobalContext';
import Imagen from '../../components/Galeria/Imagen';
import isSearchVisible from '../../utils/IsSearchVisible';


const Favoritas = () => {
    const { state } = useContext(GlobalContext);
    const isFotoVisible = (consulta, foto) => {
        return isSearchVisible(consulta, foto) && foto.favorita;
    }

    return (
        <ContenidoGaleria>
            <Banner texto="Tus favoritas!" backgroundImage={banner} />
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

export default Favoritas