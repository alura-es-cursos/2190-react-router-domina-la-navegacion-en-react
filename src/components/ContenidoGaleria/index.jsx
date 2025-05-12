import styled from 'styled-components';

const ContenidoGaleria = ({ children }) => {
    const ContenidoGaleriaStyled = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

    return (
        <ContenidoGaleriaStyled>
            {children}
        </ContenidoGaleriaStyled>
    )
}

export default ContenidoGaleria