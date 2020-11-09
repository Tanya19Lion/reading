import React from 'react';
import mystery from './mystery.svg';
import styled from 'styled-components';

const DetectiveStyled = styled.div`
    text-align: center;
    border: 2px solid lightblue;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    img {
        width: 200px;
        height: 200px;
    }
`;

const DetectivePage = () => {
    return (
        <DetectiveStyled>
            <img src={mystery} alt='icon for classic page' />
            <h3>Детективи</h3>
        </DetectiveStyled>
    );
}

export default DetectivePage;