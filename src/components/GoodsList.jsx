import {useContext} from 'react';
import { ShopContext } from '../context';
import GoodsItem from './GoodsItem';

function GoodsList() {
    const { goods = [] } = useContext(ShopContext);

    if (!goods.length) {
        return <h2>Товаров нет</h2>
    }

    return <div className="goods">
        {goods.map(item => (
            <GoodsItem key={item.id} {...item}/>
        ))}
    </div>
}

export default GoodsList;