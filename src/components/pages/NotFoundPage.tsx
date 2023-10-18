import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    const StyledContainer = styled.h1`
      color: rgba(23, 34, 52, 1);
      margin: 25px;
    `;

    return (
        <>
            <StyledContainer>
                <h1>Not Found</h1>
                <Link to={"/"}>Back to home page</Link>
            </StyledContainer>
        </>
    );
};

export default NotFoundPage;