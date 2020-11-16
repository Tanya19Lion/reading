import React from 'react';
import { connect }from 'react-redux';
import styled from 'styled-components';
import { whatToSearch } from '../../redux/actions/actions';

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
`;

const SearchPanel = ({ valueToSearch, onSearchChange}) => {
    return (
        <SearchStyled>
            <input onChange={onSearchChange} placeholder='Назва книги, яку потрібно знайти?' value={valueToSearch}/>  
        </SearchStyled>
    );
}

const mapStateToProps = ({ valueToSearch }) => {
    return {
        valueToSearch
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => {
            const value = event.target.value;
            dispatch(whatToSearch(value));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);