import React from 'react';
import styled from 'styled-components';

const SearchStyled = styled.div`
    max-width: 800px;
    margin: 50px auto;
    input {
        padding: 15px;
        font-size: 20px;
        color: #000;
        border-radius: 5px;
        width: 80%;
        border: 2px solid black;
        margin-right: 30px;
        :focus {
            box-shadow: 0 0 10px 10px lightgray;
            border-color: lightgray;
        }
    }
    button {
        border-radius: 5px;
        color: #000;
        background-color: lightgray;
        font-size: 23px;
        padding: 10px;
        cursor: pointer;
        transition: all .5s;
        :hover {
            color: #fff;
            background-color: lightseagreen;
        }
    }

`;

const SearchPanel = () => {
    return (
        <SearchStyled>
            <form>
                <input placeholder='Що потрібно знайти?' />
                <button type='button'>Пошук</button>
            </form>
        </SearchStyled>
    );
}

export default SearchPanel;