import styled from "styled-components"
import CampoTexto from "../CampoTexto"
import logo from "../../assets/logo.png"


const HeaderEstilizado = styled.header`
   padding: 60px 0;
   display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img src={logo} alt="Logo de Space App" />
        <CampoTexto />
    </HeaderEstilizado>
}

export default Cabecera