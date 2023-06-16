import './Item.css';
import { Link } from 'react-router-dom';

function Item({product}) {
    return (
        <Link to={`/item/${product.id}`} className='itemContainer card-text plato card'>
            <div className="image-container">
                <img src={product.image} alt={product.title} className='imageCardFood'/>    
            </div>
            <div className='card-body'>
                <h2 className="nombre-comida">{product.title}</h2>
                <p className="text-price">${product.price}</p>
            </div>
        </Link>
    )   
}

export default Item