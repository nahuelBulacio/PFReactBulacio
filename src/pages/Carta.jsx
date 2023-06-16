import { useParams } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Carta = () => {

    let category = useParams().category;
    switch (category) {
        case 'pizzas': category = 'Pizza'
            break;
        case 'sandwiches': category = 'Sandwiches'
            break;
        case 'sopas': category = 'Sopas'
            break;
        case 'bebidas': category = 'Bebidas'
            break;
        case 'postres': category = 'Postres'
            break;
        case 'alplato': category = 'Alplato'
            break;
        case 'pastas': category = 'Pastas'
            break;
        default: category = false;
    }

    return (
        <>
            <h1>{category && `${category}`}</h1>
            <ItemListContainer />
        </>
    )
}

export default Carta