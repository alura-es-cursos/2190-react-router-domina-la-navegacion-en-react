import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { Navigate, Outlet } from "react-router";

const ProtectorRutas = () => {
    const { state } = useContext(GlobalContext);

    if (!state.usuarioAutenticado) {
        return <Navigate to="/login" replace></Navigate>
    }

    return (
        <Outlet></Outlet>
    )
}

export default ProtectorRutas;