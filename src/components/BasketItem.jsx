const BasketItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromBasket = Function.prototype,
        incrementBasketItem = Function.prototype,
        decrementBasketItem = Function.prototype,
    } = props;
    return <li className="collection-item basket__item">
        <div className="item__info">
            {name} X
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