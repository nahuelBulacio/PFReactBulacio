import { NavLink } from 'react-router-dom';
import carrito from '../../assets/bandeja-comida.jpg';
import './CartWidget.css';
import { useContext } from 'react';
import {CartContext} from '../../contexts/CartContext';

function CartWidget() {

    const {cartQuantity} = useContext(CartContext);

    return (
        <div className='encargo'>
            <NavLink to='/cart' className="cart-container">
                <img className="bandeja-comida" src={carrito} alt="carrito"/>
            </NavLink>
            <p className='contador'>{cartQuantity()}</p>
        </div>
    )
}

export default CartWidget;