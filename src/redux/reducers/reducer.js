
const initialState = {
    books: [],
    loading: true,
    error: null,
    orderList: [],           
    summTotal: 0,
    isModalOpen: false,
    valueToSearch: '',
    findedItems: [],
    
};

const updateOrderItem = (book, item = {}, quantity) => {

    const { id = book.id, title = book.title, price = 0, count = 0 } = item;
    
    const setPrice = () => {
        if (book === undefined) return price + item.price / item.count * quantity;
        return price + book.price * quantity;
    };

    return {
        id,
        title,
        price: setPrice(), 
        count: count + quantity
    };
};

const updateOrderList = (orderList, item, index) => {

    if (item.count === 0)  {
        return [
            ...orderList.slice(0, index),
            ...orderList.slice(index + 1)
        ]
    }

    if (index === -1) {
        return [
            ...orderList,
            item
        ];
    }

    return [
        ...orderList.slice(0, index),
        item,
        ...orderList.slice(index + 1)
    ];
};

const updateTotal = (total, book, item, array, quantity) => {

    const initialTotal = () => {
        if (book === undefined) return item.price;
        return book.price;
    };

    switch(quantity) {
        case 1:
            return array.reduce( (summ, item) => summ + item.price, initialTotal());
        case -1:
            return total - item.price / item.count;
        case -item.count:
            return total - item.price;
        default:
            return total;
    }
};

const updateOrder = (state, bookId, quantity) => {

    const { books, orderList, summTotal } = state;

    const book = books.find((item) => item.id === bookId);

    const itemIndex = orderList.findIndex( ({ id }) => id === bookId);
    const item = orderList[itemIndex];

    let newItem = updateOrderItem(book, item, quantity);

    return {
        ...state,
        isModalOpen: true,
        orderList: updateOrderList(state.orderList, newItem, itemIndex),
        summTotal: updateTotal(summTotal, book, item, orderList, quantity)
    };
};

const search = (array, value) => {
    return array.filter((item) => {
        return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    });
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true, 
                error: null
            };

        case 'FETCH_BOOKS_SUCCSESS':
            return {
                ...state,
                books: action.value,
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                orderList: state.orderList,
                error: action.value
            };

        case 'BOOK_ADDED_TO_ORDER':       
            return updateOrder(state, action.value, 1);

        case 'BOOK_REMOVED_FROM_ORDER':
            return updateOrder(state, action.value, -1);

        case 'BOOK_DELETED':
            const deletedItem = state.orderList.find( ({ id }) => id === action.value );
            return updateOrder(state, action.value, -deletedItem.count);
          
        case 'CLOSE_MODAL':
            return {
                ...state,
                orderList: [],           
                summTotal: 0,
                isModalOpen: false
            };
        
        case 'GO_BACK_TO_ORDER':
            return {
                ...state,
                isModalOpen: false
            }
        
        case 'SEARCH_BOOK':       
            return {
                ...state,
                valueToSearch: action.value,
                findedItems: search(state.books, action.value)
        };            
        
        default:
            return state;
    }
}

export default reducer;