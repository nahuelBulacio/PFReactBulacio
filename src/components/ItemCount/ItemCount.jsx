import Button from 'react-bootstrap/Button';
import './ItemCount.css';

function ItemCount({ stock, count, addCount, susCount }) {

    return (
        <div>
            <h2 className='cantidadItems'>Cantidad: {count}</h2>
            <div className='buttonContainer'>
                <Button className='button-sumar' onClick={susCount}>
                    -
                </Button>
                <Button onClick={addCount}>
                    +
                </Button>
            </div>
            <h3 className='stockItems'>Stock: {stock}</h3>
        </div>

    )
}

export default ItemCount