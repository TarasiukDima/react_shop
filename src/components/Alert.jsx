import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

function Alert() {
    const { alertName: name = "", closeAlert = Function.prototype } = useContext(ShopContext);
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 1500);
        return () => {
            clearTimeout(timerId);
        }
    // eslint-disable-next-line
    },[name])

    return <div className="toast__container">{name} add to cart!</div>;
}

export default Alert;