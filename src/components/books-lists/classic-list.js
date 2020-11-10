import React from 'react';
import BookItem from '../book-item/book-item';

const ClassicList = ({ books }) => {
    return (
        <ul>
            {
                books.map( (book) => <li key={book.id}> <BookItem book={book} /> </li>)
            } 
        </ul>
    );
}

export default ClassicList;
