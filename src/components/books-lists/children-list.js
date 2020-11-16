import React from 'react';
import BookItem from '../book-item/book-item';
import SearchPanel from '../search-panel/search-panel';

import styled from 'styled-components';

const StyledList = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 30px;
`;

const StyledText = styled.p`
    font-size: 30px;
    font-weight: 700;
`;

const ChildrenList = ({ books, onAddedBook }) =>  {

    if (books === undefined) {
        return (
            <>
                <SearchPanel />
                <StyledText>На жаль, за вашим запитом нічого не вдалося знайти...</StyledText>
            </>
        );
    }

    return (
        <>
            <SearchPanel />
            <StyledList>
                {   
                    books.map( (book) => <span key={book.id}><BookItem book={book} onAddedBook={() => onAddedBook(book.id)}/></span>)
                } 
            </StyledList>
        </>
    );
}

export default ChildrenList;

