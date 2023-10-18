import React, { useState } from 'react';
import styled from 'styled-components';
import axios, {AxiosError} from 'axios';
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
  margin-top: 15px;
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

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password?.length < 8) {
            setError("Password must has at least 8 symbols");
            return;
        }

        await axios.post('https://internship-back.onrender.com/api/auth/sign-up', {
            email,
            password,
        })
            .then(res => {
                setError((prevState) => "");

                navigate('/sign-in');
            })
            .catch(err => {
                if (err?.response?.data?.message)
                    setError(err.response.data.message);
                else
                    setError("Sorry, there was a problem.");

                console.error('Login error:', error);
            });
    };

    return (
        <FormContainer>
            {error && <StyledErrorContainer>
                {error}
            </StyledErrorContainer>}
            <h1>Registration</h1>
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
                <div>
                    <InputLabel>Confirm password</InputLabel>
                    <StyledInput
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <StyledButton type="submit">Sign Up</StyledButton>
                </div>
                <StyledBottomLinkContainer>
                    Already have an account?&nbsp;<StyledLink to={"/sign-in"}>Sign In</StyledLink>
                </StyledBottomLinkContainer>
            </form>
        </FormContainer>
    );
};

export default RegisterForm;
