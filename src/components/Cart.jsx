function Cart(props) {
    const { quantity, handleBasketShow=Function.prototype } = props;
    return <button
                className="btn cart__block deep-purple darken-4"
                onClick={ handleBasketShow }
            >
                <i className="material-icons">shopping_cart</i>
                {quantity ? <span className="cart__quantity">{quantity}</span> : null}
            </button>
}

export default Cart;