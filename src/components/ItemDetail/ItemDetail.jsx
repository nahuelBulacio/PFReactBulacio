import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../contexts/CartContext'
import { useContext, useState } from 'react'
import AddToCartModal from '../AddToCartModal/AddToCartModal'

const ItemDetail = ({ item }) => {

    const { addToCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const addCount = () => {
        if (quantity < item.stock)
            setQuantity(previousQuantity => previousQuantity + 1);
    }

    const susCount = () => {
        if (quantity > 1)
            setQuantity(previousQuantity => previousQuantity - 1);
    }

    const handleAddClick = () => {
        addToCart(item, quantity);
        setShowModal(true);
        if (item.stock >= quantity){
            item.stock = item.stock - quantity;
        }else{
            alert("No hay mas stock")
        }
    }

    return (
        <div className='detail'>
            <div className='imageContainer'>
                <img className='imageDetail' src={item.image} alt={item.title} />
            </div>
            <div className='detailContainer'>
                <h1 className='item-title'>{item.title}</h1>
                <p>{item.description}</p>
                <p>Precio <b>${item.price}</b></p>
            </div>
            <div className='addContainer'>
                <ItemCount stock={item.stock} addCount={addCount} susCount={susCount} count={quantity} />
                <button
                    className='addToCart'
                    onClick={handleAddClick}>Agregar al carrito
                </button>
            </div>
            <AddToCartModal
                msg = "Se ha agregado la orden correctamente"
                show={showModal}
                onHide={() => setShowModal(false)}
            />
        </div>
    )
}

export default ItemDetail