import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: flex;
    margin-bottom: 30px;
    img {
        width: 200px;
        height: 250px;
    }
`;
const ItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    h2 {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 15px;
        color: lightseagreen;
    }
    h3 {
        font-size: 20px;
        margin-bottom: 15px;
    }
    p {
        font-size: 25px;
        font-weight: 700;
    }
    button {
        border-radius: 5px;
        color: #000;
        background-color: lightgray;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        transition: all .5s;
        max-width: 150px;
        :hover {
            color: #fff;
            background-color: lightseagreen;
        }
    }
`;

const BookItem = ( {book} ) => {
    const { cover, title, author, price } = book;
    return (
        <Item>
            <img src={cover} alt='cover of the book'/>
            <ItemDesc> 
                <div>
                    <h2>{title}</h2>
                    <h3>{author}</h3>
                    <p>{price} грн.</p>
                 </div>   
                 <button type='button'>Замовити</button>
            </ItemDesc>
        </Item>
    );
}

export default BookItem;