import { useContext } from 'react';
import {CartContext} from '../../contexts/CartContext'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './CartDisplay.css'

const Carrito = () => {

    const {cart, totalPrice, removeItem, clearCart} = useContext(CartContext);
    
    return (
    <>
        <div className='cartDisplayContainer'>
            {cart.length > 0 ? 
                <>
                    <ul className='cartDisplay'>
                        {cart.map(item => {
                            return (
                                <CartItem key={item.id} item={item} handleRemove={removeItem}/>
                            )}
                        )}
                    </ul>
                    <div className='cartButtonDisplay'>
                        <h2 className='totalPrice'>Total a pagar: ${totalPrice()}</h2>
                        <Link to='/form'>
                            <button className='button-comprar'>
                             Finalizar compra
                            </button>
                        </Link>
                        <button className='button-vaciar' onClick={clearCart}>Vaciar orden</button>
                    </div>
                </>
                    :
                <div className='emptyCartContainer'>
                    <p className='emptyCart'>Aún no tienes ninguna orden <br/>¡Agrega tus platos favoritos!</p>
                    <Link to='/carta'>
                        <button className='button-volver-carta'>Volver a Carta</button>
                    </Link>
                </div>
            }
        </div>
    </>
    )
}

export default Carrito