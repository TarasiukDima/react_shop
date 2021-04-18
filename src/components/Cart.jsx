import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
    const { order, handleBasketShow } = useContext(ShopContext);
    const quantity = order.length;
    return <button
                className="btn cart__block deep-purple darken-4"
                onClick={ handleBasketShow }
            >
                <i className="material-icons">shopping_cart</i>
                {quantity ? <span className="cart__quantity">{quantity}</span> : null}
            </button>
}

export default Cart;