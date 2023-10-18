import React from 'react';
import styled from "styled-components";
import Header from "../Header";
import RegisterForm from "../forms/RegisterForm";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const StyledContent = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledContentImage = styled.div`
  width: 60%;
  height: 100%;
  background: url("../assets/images/auth-background-image.png");
  background-size: cover;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const RegisterPage = () => {
    return (
        <StyledDiv>
            <Header></Header>
            <StyledContent>
                <StyledContentImage/>
                <RegisterForm/>
            </StyledContent>
        </StyledDiv>
    );
};

export default RegisterPage;