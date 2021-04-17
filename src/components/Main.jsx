import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

const Main = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [allertName, setAllertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) =>{
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        setAllertName(item.name)
    }
    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const incrementBasketItem = (itemId) => {
        const newOrder = order.map((orderItem, index) =>{
            if (orderItem.id === itemId) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1,
                }
            } else {
                return orderItem;
            }
        })
        setOrder(newOrder);
    }
    const decrementBasketItem = (itemId) => {
        const newOrder = order.map((orderItem, index) =>{
            if (orderItem.id === itemId) {
                const newQuantity = orderItem.quantity - 1;
                return {
                    ...orderItem,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                }
            } else {
                return orderItem;
            }
        })
        setOrder(newOrder);
    }

    const handleCloseAlert = () => {
        setAllertName('');
    }

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    })
        .then(response => response.json())
        .then(data => {
            data.featured && setGoods(data.featured);
            setLoading(false);
        })

  },[])
    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={ handleBasketShow }/>
        {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
        {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incrementBasketItem={incrementBasketItem}
                    decrementBasketItem={decrementBasketItem}
                />
            )
        }
        {allertName && (
                <Alert
                    name={allertName}
                    handleCloseAlert={handleCloseAlert}
                />
            )
        }
    </main>;
};

export default Main;
