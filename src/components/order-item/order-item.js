import React from 'react';

const OrderItem = ({ index, title, count, summ }) => {
    return (
        <div>
            <span>{index}</span>
            <span>{title}</span>
            <span>{count}</span>
            <span>{summ}</span>
            <button>+</button>
            <button>-</button>
            <button>x</button>
        </div>
    );
}

export default OrderItem;