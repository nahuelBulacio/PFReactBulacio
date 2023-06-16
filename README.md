# Elegantis restaurante

¡Hola! ¿Cómo estás? Espero que muy bien. Te hago una pregunta, ¿tienes hambre y estás antojado de comida italiana? ¡Perfecto! En esta oportunidad tenemos el placer de presentarles "Elegantis". Una página web ecommerce, que nos facilitará el pedido de tu plato favorito.


## Características

Dicha página está clasificada en diferentes tipos de secciones:

1 - INICIO:
Incluye un carrusel que muestra diferentes imágenes respecto al restaurante, equipo de trabajo, clientes y platos exquisitos.
También tendrá un mapa de la ubicación del restaurante "Elegantis" principal junto a una breve explicación de nuestro oficio.

2 - CARTA:
Aparecen cada uno de los diferentes platillos que cocina el cheff, guardados y extraídos de una base de datos.
A estas se las podrá filtrar por categoría para facilitar la búsqueda.
Para saber más sobre la comida,se le podrá clickear sobre el mismo para así poder abrir una página de detalle que muestra la descripción de este.

3 - CARRITO DE COMPRAS: 
Sobre la parte superior derecha de la página, aparecerá un ícono clickeable el cual nos dirigirá hacia el carrito de compras.
Este, muestra los platos de comida agregados, junto con su descripción y cantidad.
Muestra el precio total del carrito completo.
Ofrece un botón para vaciar el carrito y otro para realizar la compra.
Para no perder la orden del cliente si se actualiza sin querer el sitio, los datos del carrito se guardarán en el localStorage.

4 - COMPRA:

Se dirigirá el usuario a un formulario de compra.
El mismo, solicita información personal del usuario para continuar el proceso.
Una vez completada y finalizada la compra, se envían los datos del usuario, el carrito, la fecha y el precio total a una colección de Firestore llamada "orders".
Esto permite almacenar los detalles de la compra para su posterior procesamiento y seguimiento.

![Ejemplo de uso y navegación](./public/elegantis.gif)


## Instalación

Para este proyecto se utilizó **REACT JS**. Para instalar React se debe utilizar el siguiente comando en la consola:

`npx create-react-app <nombre-de-la-app>`

Una vez instalado, se inicializa con el comando:

`npm start`

Se utlizaron biblotecas de bootstrap y react-boostrap para dar estilo en algunos componentes y para solucionar ciertos aspectos del diseño como los dropdwons o los modals. Se instala con el siguiente comando en la terminal:

`npm install boostrap react-boostrap`

Para lograr la navegación sin refrescar la pantalla se utilizó **React Router DOM**. Este se instala con el siguiente comando:

`npm install react-router-dom`


## Licencia

Todos los derechos reservados - Nahuel Bulacio.
