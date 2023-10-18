import React from 'react';
import styled from "styled-components";
import DealsHeader from "./DealsHeader";
import DealsItems from "./DealsItems";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  @media (max-height: 1024px) {
    justify-content: space-evenly;
  }

  @media (max-width:500px) and (max-height: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const DealsContainer = () => {
    return (
        <StyledWrapper>
            <StyledContainer>
                <DealsHeader/>
                <DealsItems/>
            </StyledContainer>
        </StyledWrapper>
    );
};

export default DealsContainer;