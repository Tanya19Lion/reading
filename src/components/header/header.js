import React from 'react';
import styled from 'styled-components';
import books from './books.svg';

const HeaderStyled = styled.div`
    text-align: center;
    border-bottom: 2px solid lightblue;
    h1 {
        position: relative;
        font-size: 35px;
        padding-left: 15px;
        display: inline-block;
    }
    img {
        width: 35px;
        height: 35px;
    }
`;

const Header = () => {
    return (
        <HeaderStyled>
             <img src={books} alt='stack of books' />
            <h1>BookStore</h1>
        </HeaderStyled>
    );
}

export default Header;