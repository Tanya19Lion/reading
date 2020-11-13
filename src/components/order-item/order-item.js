import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 2px dashed lightblue; 
    margin-bottom: 25px;
    text-align: left;
    p {
        width: 400px;
    }
    span, p {
        font-size: 20px;
    }
`;

const StyledItemButtons = styled.div`
    button {
        border-radius: 5px;
        color: #000;
        background-color: lightgray;
        font-size: 20px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: all .5s;
        + button {
            margin-left: 20px;
        }
        :hover {
            color: #fff;
            background-color: lightseagreen;
        }
    }
`;

const OrderItem = ({ id, title, count, summ, onIncrease, onDecrease, onDelete }) => {
    return (
        <StyledItem>
            <p>{title}</p>
            <span>{count}</span>
            <span>{summ} грн.</span>
            <StyledItemButtons>
                <button onClick={() => onIncrease(id)}>+</button>
                <button onClick={() => onDecrease(id)}>-</button>
                <button onClick={() => onDelete(id)}>x</button>
            </StyledItemButtons>         
        </StyledItem>
    );
}

export default OrderItem;