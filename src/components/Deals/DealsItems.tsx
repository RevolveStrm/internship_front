import React, {useEffect, useState} from 'react';
import DealsItem, { IDealItem } from "./DealsItem";
import styled from "styled-components";

const DealsItems = () => {
    const [deals, setDeals] = useState<IDealItem[]>([]);

    useEffect(() => {
        const getData = async () => {
          const data: IDealItem[] | undefined = await fetch(`http://localhost:5000/api/deals`)
              .then(res => res.json())
              .then(res => res)
              .catch(err => console.log(err));

          if (data)
              setDeals(data);
        };

        getData();
    }, []);

    const StyledContainer = deals?.length ?
        styled.div`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      padding: 16px;

      @media (max-width:425px) and (max-height: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
      }
    ` :
        styled.div`
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
    `;

    const StyledWarning = styled.h1`
      color: rgba(23, 34, 52, 1);
    `;

    return (
        <StyledContainer>
            {deals?.length ?
                deals.map(el => <DealsItem key={el.id} item={el}/>) :
                <StyledWarning>There are no open deals at this moment</StyledWarning>
            }
        </StyledContainer>
    );
};

export default DealsItems;