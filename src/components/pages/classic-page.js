import React from 'react';
import classic from './book.svg';
import styled from 'styled-components';

const ClassicStyled = styled.div`
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

const ClassicPage = () => {
    return (
        <ClassicStyled>
            <img src={classic} alt='icon for classic page' />
            <h3>Класична література</h3>
        </ClassicStyled>
    );
}

export default ClassicPage;