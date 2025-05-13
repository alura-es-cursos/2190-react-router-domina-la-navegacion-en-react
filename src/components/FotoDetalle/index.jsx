import React from 'react'
import styled from 'styled-components';
import fechaFormatada from '../../utils/FechaFormatada';

const DetalleFotoContainer = styled.div`
  background-color: #ffffff; /* Fondo blanco limpio */
  border-radius: 12px; /* Bordes más redondeados */
  padding: 25px 30px; /* Más padding horizontal */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1); /* Sombra más pronunciada y suave */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* Stack de fuentes moderno */
  min-width: 300px; /* Un poco más de ancho */
  max-width: 380px; /* Un poco más de ancho */
  margin: 25px auto; /* Centrado y con margen */
  border: 1px solid #e9ecef; /* Borde sutil */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Ligero efecto de elevación al pasar el mouse */
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
`;

const TituloFoto = styled.h2`
  color: #1a2533; /* Azul muy oscuro para el título */
  margin-top: 0;
  margin-bottom: 25px; /* Más espacio después del título */
  font-size: 1.75em; /* Tamaño de fuente ligeramente mayor */
  font-weight: 700; /* Más peso para el título */
  text-align: center;
  border-bottom: 2px solid #007bff; /* Línea azul debajo del título */
  padding-bottom: 15px;
  line-height: 1.3;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  color: #4a5568; /* Gris oscuro para el texto de información */
  font-size: 1em; /* Tamaño de fuente base */
  margin-bottom: 15px; /* Espacio entre ítems */
  display: flex;
  align-items: center; /* Alineación vertical de icono y texto */
  line-height: 1.6;

  &:last-child {
    margin-bottom: 0;
  }

  .icon {
    margin-right: 12px; /* Más espacio para el icono */
    font-size: 1.4em; /* Iconos un poco más grandes */
    color: #007bff; /* Color primario para los iconos */
    min-width: 30px; /* Asegura alineación si los iconos varían de ancho */
    text-align: center;
    display: inline-block; /* Para que el min-width funcione bien */
  }

  .text-content {
    display: flex;
    flex-direction: column; /* Para que el label y el valor puedan estar uno encima del otro si es necesario, o lado a lado */
  }
  
  .label {
    font-weight: 600; /* Label en negrita */
    color: #2d3748; /* Color más oscuro para el label */
    margin-right: 6px; /* Espacio después del label */
  }

  .value {
    color: #4a5568; /* Color del valor */
  }
`;


const FotoDetalle = ({ foto }) => {

    if (!foto)
        return <DetalleFotoContainer>Foto no válida</DetalleFotoContainer>

    return (
        <DetalleFotoContainer>
            <TituloFoto>{foto.titulo}</TituloFoto>
            <InfoList>
                <InfoItem>
                    <span className="icon" role="img" aria-label="Fuente">ℹ️</span>
                    <div className="text-content">
                        <span className="label">Fuente:</span>
                        <span className="value">{foto.fuente || "Desconocida"}</span>
                    </div>
                </InfoItem>
                <InfoItem>
                    <span className="icon" role="img" aria-label="Vistas">👁️</span>
                    <div className="text-content">
                        <span className="label">Vistas:</span>
                        <span className="value">
                            {foto.vistas !== undefined ? foto.vistas.toLocaleString('es-ES') : "N/A"}
                        </span>
                    </div>
                </InfoItem>
                <InfoItem>
                    <span className="icon" role="img" aria-label="Fecha">📅</span>
                    <div className="text-content">
                        <span className="label">Fecha:</span>
                        <span className="value">{fechaFormatada(foto.fecha)}</span>
                    </div>
                </InfoItem>
            </InfoList>
        </DetalleFotoContainer>
    )
}

export default FotoDetalle