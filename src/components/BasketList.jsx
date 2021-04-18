import {useContext} from 'react';
import { ShopContext } from '../context';

import BasketItem from './BasketItem';

function BasketList() {
    const { order, handleBasketShow } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return <ul className="collection basket__list">
        <li className="collection-item active center cart__title">
            <p>Cart</p>
            <button
                className="red pulse btn-floating"
                onClick={handleBasketShow}
            >
                <i className="material-icons">close</i>
            </button>
        </li>
        {
            order.length
                ?
                (order.map(item => (
                    <BasketItem key={item.id} {...item} />
                )))
                :
                (<li className="collection-item">Cart Clear</li>)
        }
        <li className="collection-item active">
            <span>Total Order:</span>
            <span className="secondary-content">{totalPrice}</span>
        </li>
    </ul>
}
export default BasketList;