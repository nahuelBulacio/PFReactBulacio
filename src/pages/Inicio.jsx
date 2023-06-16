import React from 'react'
import ItemsCarouselContainer from '../components/ItemsCarouselContainer/ItemsCarouselContainer'

const Inicio = () => {
    return (
        <>
        <main className="main-index">
            <ItemsCarouselContainer />
            <h2 class="subtitulos">Nuestra comida habla sola</h2>
            <div class="texto">
                <p>
                    Tenemos una gran variedad de platos con recetas italianas de pastas y pizzas caseras, carnes,
                    pollos, ensaladas, sopas, bebidas y la mejor selección de postres italianos. <br/>Elegantis es
                    caracterizado por la atención personalizada de sus mozos. Además, para los más chicos, hay una sala
                    de juegos para que el tiempo de espera sea menor, y la experiencia aún mejor.<br/>
                    Contamos de una excelente ubicación en todas nuestras sucursales y ofrecemos un estacionamiento
                    exclusivo para todos nuestros clientes.
                </p>
            </div>
                <div class="contenedor-mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57474.53955957158!2d-80.29026084940486!3d25.798337188401796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6d1bec65147%3A0x64ea773812a91486!2sAllapattah%2C%20Miami%2C%20FL%2C%20USA!5e0!3m2!1sen!2sar!4v1666708986696!5m2!1sen!2sar"
                        class="mapa-ubicacion" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
        </>
    )
}

export default Inicio