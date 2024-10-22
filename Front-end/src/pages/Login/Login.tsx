import React, { useState } from "react";
import {
  Container,
  FormWrapper,
  Form,
  Input,
  Button,
  SwitchText,
  Title,
  ErrorMessage,
} from "./Login.style";
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate

function Login() {
  const [isLogin, setIsLogin] = useState(true); // Alterna entre login e cadastro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook do React Router para redirecionamento

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && password !== confirmPassword)) {
      setError("Por favor, preencha os campos corretamente.");
      return;
    }

    if (isLogin) {
      // Simular login bem-sucedido e redirecionar para Home
      console.log("Login bem-sucedido");
      navigate("/home"); // Redireciona para Home
    } else {
      // Simular cadastro bem-sucedido e redirecionar para Home
      console.log("Cadastro bem-sucedido");
      navigate("/home"); // Redireciona para Home
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>{isLogin ? "Login" : "Cadastro"}</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <Input
              type="password"
              placeholder="Confirme a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <Button type="submit">{isLogin ? "Login" : "Cadastrar"}</Button>
        </Form>
        <SwitchText onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Não tem uma conta? Cadastre-se" : "Já tem uma conta? Faça login"}
        </SwitchText>
      </FormWrapper>
    </Container>
  );
}

export default Login;
