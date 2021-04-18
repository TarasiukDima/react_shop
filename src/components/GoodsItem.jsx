import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
    } = props;

    const {addToBasket} = useContext(ShopContext)

    const stylesPrice = {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        margin: '0'
    }
    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt="product images"/>
            </div>
            <div className="card-content">
                <p className="card-title">{name}</p>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <p style={stylesPrice}>Price: {price}</p>
                <button
                    className="btn red center-align"
                    onClick={()=>addToBasket({id, name, price})}
                >Buy</button>
            </div>
        </div>
    )
}

export default GoodsItem;