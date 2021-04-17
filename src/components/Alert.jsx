import { useEffect } from 'react';

function Alert(props) {
    const { name="", handleCloseAlert = Function.prototype } = props;

    useEffect(() => {
        const timerId = setTimeout(handleCloseAlert, 1500);
        return () => {
            clearTimeout(timerId);
        }
    // eslint-disable-next-line
    },[name])

    return <div className="toast__container">{name} add to cart!</div>;
}

export default Alert;