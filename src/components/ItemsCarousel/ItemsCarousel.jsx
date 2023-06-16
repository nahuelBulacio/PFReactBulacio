import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ItemsCarousel.css'
import { Link } from 'react-router-dom';

const ItemsCarousel = ({ products }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <main className='carrusel'>
            <Carousel className='carousel slide carrusel' activeIndex={index} onSelect={handleSelect}>
                {products.map(item => {
                    return (<Carousel.Item className="carouselContainer" key={item.id}>
                        <img
                            className="foto-restaurante"
                            src={item.image}
                            alt={item.title}
                        />
                        <Carousel.Caption className='carouselCaption'>
                            <h2 className='carouselTitle'>{item.title}</h2>
                        </Carousel.Caption>
                    </Carousel.Item>)
                })}
            </Carousel>
        </main>
    );
}

export default ItemsCarousel