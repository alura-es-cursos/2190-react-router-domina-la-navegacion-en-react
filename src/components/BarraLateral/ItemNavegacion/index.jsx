import { NavLink } from "react-router"
import styled from "styled-components"

const ItemListaEstilizado = styled.li`
    font-size:24px;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    gap:16px;

`;

const NavLinkEstilizado = styled(NavLink)`
    font-size: 24px;
    margin-bottom: 10px;
    line-height: 10px;
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: white;

    &.active {
        color: #7B78E5;
        font-family: GandhiSansBold;
    }

    &:not(.active) {
        color: #D9D9D9;
        font-family: GandhiSansRegular;
    }

`;

const ItemNavegacion = ({ children,
    iconoActivo,
    iconoInactivo,
    link }) => {
    return <ItemListaEstilizado>
        <NavLinkEstilizado to={link} className={({ isActive }) => isActive ? "active" : ""}>
            {({ isActive }) => (
                <>
                    <img src={isActive ? iconoActivo : iconoInactivo} />
                    {children}
                </>
            )}
        </NavLinkEstilizado>
    </ItemListaEstilizado >
}


export default ItemNavegacion