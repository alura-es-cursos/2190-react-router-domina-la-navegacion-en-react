import { useContext } from 'react';
import { useParams } from 'react-router'
import { GlobalContext } from '../../context/GlobalContext';
import styled from 'styled-components';
import FotoDetalle from '../../components/FotoDetalle';

const DetalleImagenContainer = styled.section`
  display: flex;
  flex-grow: 1;
`

const DetalleImagen = () => {
    const { id } = useParams();
    const { state } = useContext(GlobalContext);

    const foto = state.fotosDeGaleria.find((foto) => Number(foto.id) === Number(id));

    if (!foto)
        return (<h3>Foto no válida</h3>)

    return (
        <DetalleImagenContainer>
            <img src={foto.path}
                style={{ borderRadius: "12px", maxWidth: "100%", minWidth: "50%", objectFit: "contain", height: "auto" }}
                alt={foto.alt} />
            <FotoDetalle foto={foto}></FotoDetalle>
        </DetalleImagenContainer>
    )
}

export default DetalleImagen