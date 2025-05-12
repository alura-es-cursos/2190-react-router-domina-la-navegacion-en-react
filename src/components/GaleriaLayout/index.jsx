import React, { useContext } from 'react'
import { Outlet } from 'react-router';
import { GlobalContext } from '../../context/GlobalContext';
import Cargando from '../Cargando';

const GaleriaLayout = () => {
    const { state } = useContext(GlobalContext);

    return (
        state.fotosDeGaleria.length == 0 ?
            <Cargando></Cargando> :
            <Outlet></Outlet>

    )
}

export default GaleriaLayout;