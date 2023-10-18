import React from 'react';
import styled from "styled-components";

export interface IDealItem {
    description: string;
    id: number;
    image: string;
    name: string;
    sold_percent: string;
    ticketPrice: string;
    totalPrice: string;
    yieldPercent: string;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface IDealItemProps {
    item: IDealItem
}

const DealsItem = ({item}: IDealItemProps) => {

    const daysLeft = Math.round((new Date(item.endDate).getTime() -  Date.now()) / 86400000);

    const StyledContainer = styled.div`
      width: 630px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background: url(${item.image});
      background-size: cover;
      border-radius: 5px;
      box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.5);
      
      @media (max-width: 1024px) {
        width: 450px;
      }

      @media (max-width:500px) and (max-height: 900px) {
        width: 350px;
      }
    `;

    const StyledDescriptionContainer = styled.div`
      width: 100%;
      height: 30%;
      margin: 10px;
      font-family: Merriweather, sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: rgba(255, 255, 255, 1);
      text-shadow: 1px 1px 1px rgba(178, 159, 126, 1);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;

      @media (max-width:425px) and (max-height: 900px) {
        height: 75%;
      }
    `;

    const StyledDescriptionPart = styled.div`
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

      @media (max-width: 1024px) {
        width: 450px;
      }
    `;

    const StyledDescriptionPartRow = styled.div`
      height: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      @media (max-width:425px) and (max-height: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
      }
    `;

    const StyledDescriptionPartRowText = styled.div`
        width: 210px;
        height: 100%;
        text-align: left;
        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
    `;

    return (
        <StyledContainer>
            <StyledDescriptionContainer>
                    <StyledDescriptionPart>
                        {item.name}
                    </StyledDescriptionPart>

                    <StyledDescriptionPart>

                        <StyledDescriptionPartRow>
                            <StyledDescriptionPartRowText>
                                {item.totalPrice} Dhs
                            </StyledDescriptionPartRowText>
                            <StyledDescriptionPartRowText>
                                Yield {item.yieldPercent}%
                            </StyledDescriptionPartRowText>
                            <StyledDescriptionPartRowText>
                                Sold {item.sold_percent}%
                            </StyledDescriptionPartRowText>
                        </StyledDescriptionPartRow>

                        <StyledDescriptionPartRow>
                            <StyledDescriptionPartRowText>
                                Tiket - {item.ticketPrice} Dhs
                            </StyledDescriptionPartRowText>
                            <StyledDescriptionPartRowText>
                                Days left {daysLeft ? daysLeft : "None"}
                            </StyledDescriptionPartRowText>
                        </StyledDescriptionPartRow>

                    </StyledDescriptionPart>
            </StyledDescriptionContainer>
        </StyledContainer>
    );
};

export default DealsItem;