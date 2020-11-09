import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import BooksService from './services/books-service';

const booksService = new BooksService();


ReactDOM.render(

    <App />,
  document.getElementById('root')
);
