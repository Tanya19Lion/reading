import React from 'react';
import childReading from './child.svg';
import styled from 'styled-components';

const ChildrenStyled = styled.div`
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

const ChidrenPage = () => {
    return (
        <ChildrenStyled>
            <img src={childReading} alt='icon for children page' />
            <h3>Дитяча література</h3>
        </ChildrenStyled>
    );
}

export default ChidrenPage;