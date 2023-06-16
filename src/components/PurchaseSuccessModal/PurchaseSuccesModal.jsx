import { Link } from 'react-router-dom';
import { OrderContext } from '../../contexts/OrderContext';
import { useContext } from 'react';
import './PurchaseSuccessModal.css'

const PurchaseSuccessModal = () => {

    const { orderId, setOrderId } = useContext(OrderContext)

    const handleClick = () => {
        setOrderId("")
    }

    return (
        <div className="purchase-container">
            <h1 className='title-purchase'>¡Compra realizada con éxito!</h1>
            <p>Con el código: <b>{orderId}</b> podrás hacer un seguimiento de tu orden.</p>
            <p>¡Disfrute su pedido!</p>
            <Link to='/'>
                <button className='button-volver-carta' onClick={handleClick}>Volver a Inicio</button>
            </Link>
        </div>
    );
}

export default PurchaseSuccessModal