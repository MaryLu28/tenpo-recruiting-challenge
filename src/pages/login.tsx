import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";

import { useAuth } from "../shared/auth/auth-provider";
import { Colors } from "../shared/colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  font-weight: 400;
  padding: 20px 0 0;

  b {
    font-weight: 600;
    display: block;
  }
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 16px 8px 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${Colors.darkGray};
  border: 1px solid ${Colors.gray};
  background-color: ${Colors.white};
  border-radius: 4px;
  height: 40px;

  &:hover {
    border-color: ${Colors.gray};
  }

  &:active,
  &:focus,
  &:focus-visible {
    border-color: ${Colors.primary};
    box-shadow: ${Colors.primary};
    outline: ${Colors.primary};
  }

  &:disabled {
    background-color: ${Colors.gray};
    cursor: not-allowed;
  }

  ::-webkit-input-placeholder {
    color: ${Colors.darkGray};
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 22px;
  width: 100%;
`;

const SubmitBtn = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${Colors.black};
  background-color: ${Colors.primary};
  border: none;
  border-radius: 8px;
  height: 40px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  padding: 40px 0;
`;

const Login = () => {
  const navigate = useNavigate();

  const auth = useAuth();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      email: { value: string };
      password: { value: string };
    };

    console.log(formElements.email.value, formElements.password.value);

    try {
      await auth.signIn({
        email: formElements.email.value,
        password: formElements.password.value,
      });
      navigate("/", { replace: true });
    } catch (error) {
      Swal.fire("¡Ups! Algo salió mal", "Vuelve a intentar", "error");
    }

    setLoading(false);
  };

  if (auth.token && auth.user) {
    navigate("/", { replace: true });
  }

  return (
    <Container>
      {loading && <p>Cargando...</p>}
      <Title>
        <b>Hola!,</b> Inicia sesión para comenzar
      </Title>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="
            Ingresa tu correo electrónico"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
          />
        </FormGroup>
        <SubmitBtn type="submit">Iniciar sesión</SubmitBtn>
      </Form>
    </Container>
  );
};

export default Login;
