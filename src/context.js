import { createContext, useReducer } from 'react';
import reducer from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
};


export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'});
    };
    value.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item});
    };
    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}});
    };
    value.handleBasketShow = () => {
        dispatch({type: 'BASKET_SHOW'});
    };
    value.incrementBasketItem = (itemId) => {
        dispatch({type: 'INCREMENT_BASKET_ITEM', payload: {id: itemId}});
    };
    value.decrementBasketItem = (itemId) => {
        dispatch({type: 'DECREMENT_BASKET_ITEM', payload: {id: itemId}});
    };
    value.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data});
    };

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}