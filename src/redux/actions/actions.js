
const requestedBooks = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    };
};

const addedBooks = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCSESS',
        value: books
    };
};

const checkError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        value: error
    };
};

const bookAddedToOrder = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_ORDER',
        value: bookId
    };
};

const bookRemovedFromOrder = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_ORDER',
        value: bookId
    };
};

const bookDeletedFromOrder = (bookId) => {
    return {
        type: 'BOOK_DELETED',
        value: bookId
    };
};

const closeModalWindow = () => {
    return {
        type: 'CLOSE_MODAL'
    }
}

const goBackToOrder = () => {
    return {
        type: 'GO_BACK_TO_ORDER'
    }
}


export {
    requestedBooks,
    addedBooks,
    checkError,
    bookAddedToOrder,
    bookRemovedFromOrder,
    bookDeletedFromOrder,
    closeModalWindow,
    goBackToOrder
}