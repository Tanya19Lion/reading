import React, {Component} from 'react';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import { connect } from 'react-redux';
import {  requestedBooks, addedBooks, checkError, bookAddedToOrder } from '../../redux/actions/actions';

const withData = (View, getData) => {

    return class extends Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            const {requestedBooks, addedBooks, checkError } = this.props;
    
            requestedBooks();

            getData()
                .then((data) => addedBooks(data))
                .catch((error) => checkError(error));
        }
        
        render() {
            const { books, loading, error,  onAddedBook } = this.props;

            if (loading) return <Spinner />

            if (error) return <ErrorIndicator />  

            return <View books={books}  onAddedBook={ onAddedBook}/>
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(withData);