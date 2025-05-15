import { useContext, useRef } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
  min-height: 50vh; // Para que ocupe algo de espacio
  width: 100%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #04244F;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #154580;
  background-color: #041833;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #2271D1; // Un color de acento
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #154580;
  }
`;


const Login = () => {
    const { dispatch } = useContext(GlobalContext);
    const referenciaEmail = useRef();
    const referenciaPassword = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (referenciaEmail.current.value === 'leonardo.castillo@aluralatam.com.br' &&
            referenciaPassword.current.value === 'react-router'
        ) {
            dispatch({ type: 'SET_AUTENTICACION', payload: true });
            navigate('/galeria/mas-vistas');
        } else {
            alert('Datos no válidos')
        }
    }

    return (
        <LoginContainer>
            <h2>Inicio de sesión</h2>
            <LoginForm onSubmit={handleSubmit}>
                <Input type="email" placeholder="Correo electrónico" ref={referenciaEmail}></Input>
                <Input type="password" placeholder="Contraseña" ref={referenciaPassword}></Input>
                <Button type="submit">Ingresar</Button>
            </LoginForm>
        </LoginContainer>
    )
}

export default Login