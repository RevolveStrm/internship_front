import React from 'react';
import styled from "styled-components";
import Header from "../Header";
import Banner from "../Banner";
import DealsContainer from "../Deals/DealsContainer";

const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url("../assets/images/background.png");
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(23, 34, 52, 0.66);
  }
`;

const HomePage = () => {
    return (
        <StyledDiv>
            <Header auth={true}/>
            <StyledContent>
                    <Banner/>
            </StyledContent>
            <DealsContainer/>
        </StyledDiv>
    );
};

export default HomePage;
