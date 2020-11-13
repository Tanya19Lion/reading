import React from 'react';
import OrderContent from '../order-content/order-content';
import styled from 'styled-components';

const ModalStyled = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    animation: .2s fadeIn;
    background-color: rgba(0,0,0,.5);
`;

const OrderModal = () => {
    
    return (
        <ModalStyled >
            <OrderContent />
        </ModalStyled>
    );
}

export default OrderModal;