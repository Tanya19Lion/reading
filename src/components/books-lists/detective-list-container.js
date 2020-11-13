import React from 'react';
import Spinner from '../spinner/spinner';
import DetectiveList from './detective-list';
import withBooksService from '../hoc/with-books-service';
import ErrorIndicator from '../error-indicator/error-indicator';

import {  requestedBooks, addedBooks, checkError,  bookAddedToOrder } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

class DetectiveListContainer extends React.Component {

    componentDidMount() {
        const {requestedBooks, addedBooks, checkError, booksService } = this.props;

        requestedBooks();
        booksService.getDetectiveBooks()
            .then((data) => addedBooks(data))
            .catch((error) => checkError(error));
    }
    
    render() {
        const { books, loading, error, onAddedBook } = this.props;

        if (loading) return <Spinner />;

        if (error) return <ErrorIndicator />;   

        return <DetectiveList books={books} onAddedBook={onAddedBook}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestedBooks: () => {
            dispatch(requestedBooks())
        },
        addedBooks: (books) => {
            dispatch(addedBooks(books))
        },
        checkError: (error) => {
            dispatch(checkError(error))
        },
        onAddedBook: (id) => dispatch(bookAddedToOrder(id))
    }   
};

export default compose(
    withBooksService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(DetectiveListContainer);