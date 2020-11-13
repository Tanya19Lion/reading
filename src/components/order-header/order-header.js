import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    font-size: 20px;
    border-bottom: 2px solid lightblue;
    padding: 20px;
    width: 100%;
    margin-bottom: 40px;
    p {
        font-size: 25px;
        font-weight: 700;
    }
`;

const OrderHeader = () => {
    return (
        <HeaderStyled>
            <p>Замовлення</p>
        </HeaderStyled>
    );
}

export default OrderHeader;