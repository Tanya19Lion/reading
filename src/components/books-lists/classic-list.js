import React from 'react';
import BookItem from '../book-item/book-item';

import styled from 'styled-components';

const StyledList = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 30px;
`;

const ClassicList = ( {books, onAddedBook} ) => {
    return (
        <StyledList>
            {
                books.map( (book) => <div key={book.id}><BookItem book={book} onAddedBook={() => onAddedBook(book.id)}/></div>)
            } 
        </StyledList>
    );
}

export default ClassicList;
