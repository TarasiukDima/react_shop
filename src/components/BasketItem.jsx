import { useContext } from 'react';
import { ShopContext } from '../context';

const BasketItem = (props) => {
    const { id, name, price, quantity } = props;

    const { removeFromBasket, incrementBasketItem, decrementBasketItem } = useContext(ShopContext);

    return <li className="collection-item basket__item">
        <div className="item__info">
            {name} : {price}X
            <p className="item__count">
                <button onClick={() => decrementBasketItem(id)}>-</button>
                {quantity}
                <button onClick={() => incrementBasketItem(id)}>+</button>
            </p>
            = {price * quantity}
        </div>



        <span
            className="secondary-content"
            onClick={() => removeFromBasket(id)}
        >
            <i className="material-icons">close</i>
        </span>
    </li>
}
export default BasketItem;