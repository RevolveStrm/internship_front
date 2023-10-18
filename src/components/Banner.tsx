import React from 'react';
import styled from "styled-components";
import { useNavigate  } from 'react-router-dom';

const StyledDiv = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  position: relative;

  @media (max-width: 1440px) {
    width: 80%;
  }
`;

const StyledTitle = styled.h1`
  font-size: 64px;
  text-align: center;
  margin: 0;

  @media (max-width: 1440px) {
    margin-top: 125px;
  }
  
  @media (max-width: 1024px) {
    font-size: 48px;
  }

  @media (max-width:425px) and (max-height: 900px) {
    margin: 0;
  }

  @media (max-width:390px) and (max-height: 844px) {
    font-size: 36px;
  }
`;

const StyledDescription = styled.h1`
  width: 75%;
  font-size: 24px;
  text-align: center;
  font-family: Lato, sans-serif;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width:390px) and (max-height: 844px) {
    font-size: 18px;
  }
`;

const StyledButton = styled.button`
  margin-top: 20px;
  width: 160px;
  height: 54px;
  background: none;
  border: solid 1px rgba(255, 255, 255);
  border-radius: 8px;
  color: rgba(255, 255, 255, 1);
  font-family: Merriweather, sans-serif;
  font-weight: 700;

  @media (max-width:375px) and (max-height: 667px) {
    width: 170px;
    height: 64px;
    padding: 10px;
  }
`;

const Banner = () => {
    const navigate = useNavigate();

    return (
        <StyledDiv>
            <StyledTitle>The chemical negatively charged</StyledTitle>
            <StyledDescription>
                Numerous calculations predict, and experiments confirm,
                that the force field reflects the beam, while the mass defect is not formed.
                The chemical compound is negatively charged. Twhile the mass defect is
            </StyledDescription>
            <StyledButton onClick={() => {navigate("/sign-in")}}>Get Started</StyledButton>
        </StyledDiv>
    );
};

export default Banner;
