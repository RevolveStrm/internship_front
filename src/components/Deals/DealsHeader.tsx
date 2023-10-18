import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

  @media (max-width:500px) and (max-height: 900px) {
    align-items: center;
    justify-content: center;
  }
`;

const StyledTitle = styled.h1`
  color: rgba(178, 159, 126, 1);
  font-family: Merriweather, sans-serif;
  font-weight: 700;
`;

const DealsHeader = () => {
    return (
        <StyledDiv>
            <StyledTitle>Open Deals</StyledTitle>
        </StyledDiv>
    );
};

export default DealsHeader;