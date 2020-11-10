
const requestedBooks = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const addedBooks = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCSESS',
        value: books
    }
}

const checkError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        value: error
    }
}

export {
    requestedBooks,
    addedBooks,
    checkError
}