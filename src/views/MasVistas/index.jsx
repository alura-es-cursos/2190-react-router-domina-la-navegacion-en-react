import React, { useContext } from 'react'
import ContenidoGaleria from '../../components/ContenidoGaleria'
import Banner from '../../components/Banner'
import banner from '../../assets/banner.png';
import ImagenesContainer from '../../components/ImagenesContainer';
import { GlobalContext } from '../../context/GlobalContext';
import Imagen from '../../components/Galeria/Imagen';
import isSearchVisible from '../../utils/IsSearchVisible';
import Cargando from '../../components/Cargando';


const MasVistas = () => {
    const { state } = useContext(GlobalContext);
    const isFotoVisible = (consulta, foto) => {
        return isSearchVisible(consulta, foto) && Number(foto.vistas) > 1200;
    }

    return (
        <ContenidoGaleria>
            <Banner texto="Imágenes más vistas" backgroundImage={banner} />
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

export default MasVistas