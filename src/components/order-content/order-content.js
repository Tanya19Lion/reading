import React from 'react';
import OrderItem from '../order-item/order-item';
import OrderHeader from '../order-header/order-header';
import styled from 'styled-components';
import close from './close.svg';

import { bookAddedToOrder, bookRemovedFromOrder, bookDeletedFromOrder, closeModalWindow, goBackToOrder } from '../../redux/actions/actions';
import { connect } from 'react-redux';

const ContentStyled = styled.div`
    max-width: 960px;
    padding: 15px;
    animation: .2s zoomIn;
    height: auto;
    max-height: 100%;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 8px 40px rgba(0,0,0,.32);
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
`;

const CloseStyled = styled.button`
    position: absolute;
    z-index: 99;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    background-color: hsla(0,0%,100%,.8);
    border: none;
    border-radius: 8px;
    outline: 0;
    padding: 0;
    cursor: pointer;
    transition: all .2s ease;
    img {
        width: 25px;
        height: 25px;
    }
`;

const ButtonsStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        border-radius: 5px;
        color: #000;
        background-color: lightgray;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        transition: all .5s;
        :hover {
            color: #fff;
            background-color: lightseagreen;
        }
    }
`;

const StyledOrderButton = styled.div`
    button {
        margin-left: 20px;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        background-color: lightseagreen;
        :hover {
            color: #000;
            background-color: lightgreen;
        }
    }
    span {
        font-size: 25px;
        font-weight: 700;
    }
`;

const OrderContent = ( {items, total, onIncrease, onDecrease, onDelete, onClose, goBackToOrder} ) => {
  
    return (
        <ContentStyled>
            <OrderHeader />
            <CloseStyled onClick={() => onClose()}>
                <img src={close} alt='close button' />
            </CloseStyled>
            {
                items.map( (item) => {
                    const {id, title, count, price} = item;
                    return (
                        <OrderItem 
                            key={id} 
                            id={id} 
                            title={title} 
                            count={count} 
                            summ={price} 
                            onIncrease={onIncrease} 
                            onDecrease={onDecrease} 
                            onDelete={onDelete}
                        />
                    )                  
                })   
            } 
            <ButtonsStyled>
                <button onClick={() => goBackToOrder()}>Повернутись до покупок </button>
                <StyledOrderButton>
                    <span>Сума: {total} грн. </span>
                    <button>Оплатити замовлення</button>
                </StyledOrderButton>
            </ButtonsStyled>
        </ContentStyled>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.orderList,
        total: state.summTotal,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (bookId) => {
            dispatch(bookAddedToOrder(bookId));
        },
        onDecrease: (bookId) => {
            dispatch(bookRemovedFromOrder(bookId));
        },
        onDelete: (bookId) => {
            dispatch(bookDeletedFromOrder(bookId));
        },
        onClose: () => {
            dispatch(closeModalWindow());
        },
        goBackToOrder: () => {
            dispatch(goBackToOrder());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContent);