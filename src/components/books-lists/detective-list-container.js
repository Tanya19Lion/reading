import React from 'react';
import Spinner from '../spinner/spinner';
import DetectiveList from './detective-list';
import withBooksService from '../hoc/with-books-service';
import ErrorIndicator from '../error-indicator/error-indicator';

import {  requestedBooks, addedBooks, checkError } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

class DetectiveListContainer extends React.Component {

    componentDidMount() {
        const {requestedBooks, addedBooks, checkError, booksService } = this.props;
        requestedBooks();
        booksService. getDetectiveBooks()
            .then((data) => addedBooks(data))
            .catch((error) => checkError(error));
    }
    
    render() {
        const { books, loading, error } = this.props;

        if (loading) return <Spinner />;

        if (error) return <ErrorIndicator />;   

        return <DetectiveList books={books} />;
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    };
};

const mapDispatchToProps = {
    requestedBooks, 
    addedBooks, 
    checkError 
};

export default compose(
    withBooksService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(DetectiveListContainer);