import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

const FormContainer = styled.div`
  max-width: 350px;
  width: 350px;
  margin: 0 auto;
  text-align: left;
  font-family: Merriweather, sans-serif;
  font-weight: bold;
`;

const InputLabel = styled.div`
  text-align: left;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 36px;
  margin-bottom: 15px;
  padding: 10px 5px;
  font-size: 16px;
  background: rgba(224, 224, 224, 1);
  border: none;
  border-radius: 5px;

  &::placeholder {
    color: #b4b0b0;
    font-family: Lato, sans-serif;
    font-weight: 400;
  }
  
  &:focus {
    border: none;
    outline: 1px solid rgba(178, 159, 126, 1);;
  }
  
`;

const StyledLinkContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
  align-items: center;
`;

const StyledBottomLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-family: Lato, sans-serif;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  color: rgba(178, 159, 126, 1);
  text-decoration: none;
  font-family: Lato, sans-serif;
  font-weight: 400;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px 30px;
  font-size: 16px;
  background-color: rgba(178, 159, 126, 1);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition-duration: 0.5s;
  margin-left: 5px;

  &:hover {
    background-color: rgb(126, 115, 90);
  }
`;

const StyledErrorContainer = styled.div`
  background: rgba(154, 20, 20, 0.75);
  box-shadow: 1px 1px 5px black;
  color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  font-family: Lato, sans-serif;
  font-weight: 700;
`;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        await axios.post('http://localhost:5000/api/auth/sign-in', {
            email,
            password,
        })
            .then(res => {
                if (res?.data?.accessToken) {
                    localStorage.setItem('accessToken', res?.data?.accessToken);
                    navigate('/');
                    return;
                }

                localStorage.removeItem('accessToken');
            })
            .catch(err => {
                if (err?.response?.data?.message)
                    setError(err.response.data.message);
                else
                    setError("Sorry, there was a problem.");

                localStorage.removeItem('accessToken');
            });
    };

    return (
        <FormContainer>
            {error && <StyledErrorContainer>
                {error}
            </StyledErrorContainer>}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <InputLabel>Email</InputLabel>
                    <StyledInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <InputLabel>Password</InputLabel>
                    <StyledInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <StyledLinkContainer>
                    <StyledLink to={"/forgot-password"}>Forgot password?</StyledLink>
                </StyledLinkContainer>
                <div>
                    <StyledButton type="submit">Sign In</StyledButton>
                </div>
                <StyledBottomLinkContainer>
                    Don’t have an account?&nbsp;<StyledLink to={"/sign-up"}>Sign Up</StyledLink>
                </StyledBottomLinkContainer>
            </form>
        </FormContainer>
    );
};

export default LoginForm;
