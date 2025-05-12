import styled from 'styled-components'

const SeccionImagenesContainer = styled.section`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 24px;
margin: 1rem;
`

const ImagenesContainer = ({ children }) => {
    return (
        <SeccionImagenesContainer>
            {children}
        </SeccionImagenesContainer>
    )
}

export default ImagenesContainer