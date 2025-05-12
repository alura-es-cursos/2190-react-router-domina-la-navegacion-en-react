import React from 'react'
import loadingSVG from '../../assets/Loading.svg';
const Cargando = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img src={loadingSVG} style={{ width: '30vw' }} />
        </div>
    )
}

export default Cargando