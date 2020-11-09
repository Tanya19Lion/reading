import React from 'react';
import OrderItem from '../order-item/order-item';

const  OrderList = () => {
    return (
        <table>
            <tr>
                <th>№ п/п</th>
                <th>Назва книги</th>
                <th>Кількість</th>
                <th>Сума</th>
            </tr>
            <tr>
                <td><OrderItem /></td>
            </tr>
        </table>
    );
}
export default OrderList;