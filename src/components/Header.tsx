import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import useAccessToken from "../utils/hooks/useAccessToken";

interface IHeaderProps {
    auth?: boolean
}

const Header = ({auth}: IHeaderProps) => {
    const navigate = useNavigate();

    const isLogged = useAccessToken();

    const handleLogOutButton = () => {
        localStorage.removeItem("accessToken");

        navigate("/sign-in");
    }

    const StyledDiv = styled.div`
    width: 100vw;
    height: 80px;
    background: #172234;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `;

    const StyledInnerDiv = styled.div`
      width: 360px;
      height: 100%;
      display: flex;
      justify-content: ${isLogged ? "flex-end" : "space-around"};
      align-items: center;
      margin: 80px;
    
      @media (max-width: 1080px) {
        margin: 40px;
      }
    `;

    const StyledLoginButton = styled.button`
    width: 10rem;
    height: 44px;
    color: rgba(178, 159, 126, 1);
    border: solid 1px rgba(178, 159, 126, 1);
    border-radius: 5px;
    background: rgba(23, 34, 52, 1);

      @media (max-width:390px) and (max-height: 844px) {
        width: 8rem;
      }
    `;

    const StyledSignInButton = styled.button`
    width: 10rem;
    height: 44px;
    color: rgb(255, 255, 255);
    border: solid 1px rgba(178, 159, 126, 1);
    border-radius: 5px;
    background: rgba(178, 159, 126, 1);

      @media (max-width:390px) and (max-height: 844px) {
        width: 8rem;
      }
    `;

    return (
        <StyledDiv>
            {auth &&
                <StyledInnerDiv>
                    {isLogged ?
                        (<>
                            <StyledLoginButton onClick={handleLogOutButton}>Log Out</StyledLoginButton>
                        </>)
                        :
                        (<>
                            <StyledLoginButton onClick={() => {navigate("/sign-in")}}>Log In</StyledLoginButton>
                            <StyledSignInButton onClick={() => {navigate("/sign-up")}}>Sign Up</StyledSignInButton>
                        </>)
                    }
                </StyledInnerDiv>
            }
        </StyledDiv>
    );
};

export default Header;