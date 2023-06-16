import restaurante from '../assets/restaurante-viejo.jpeg';
import platos from '../assets/platos.jpeg';
import sucursales from '../assets/sucursales.jpeg';
import equipo from '../assets/chef-mozo.jpeg';

const Nosotros = () => {
  return (
    <div className='main-nosotros'>
      <div class="informacion-1">
        <h2 class="titulo-informacion">Nuestra historia</h2>
        <p class="texto-informacion">
            Elegantis, un restaurante fundado hace 45 años en Miami por la familia Bulacio, cuyo nombre fue
            elegido por los mismos italianos a través de unas encuestas hechas en sus tierras. Dicho lugar abrió sus puertas en enero de 1977, en un local que constaba de seis mesas con dos sillas cada una.
        </p>
      </div>
      <img src={restaurante} 
      alt="Imágen de restaurante viejo" 
      class="imagen-informacion1"></img> 

      <div class="informacion-2">
          <h2 class="titulo-informacion">Nuestros platos</h2>
          <p class="texto-informacion">
              Combinamos ingredientes especiales y hermosos donde la textura, el sabor y la armonía son
              primordiales. Realmente un viaje de sabores.
              Queremos que descubras la cara atrevida de nuestra cocina, y para ello hemos elevado a la máxima
              expresión grandes clásicos.
          </p>
      </div>
      <img src={platos} 
      alt="Imágen de platos exclusivos del restaurante" 
      class="imagen-informacion2"></img>

      <div class="informacion-3">
          <h2 class="titulo-informacion">Nuestro equipo</h2>
          <p class="texto-informacion">Nos inspiramos en el proceso creativo y colaboración con los agricultores,
              pescadores, productores y artesanos que brindan productos exclusivamente para Elegantis. Los equipos
              de la cocina aseguran que el espíritu familiar y la modernidad vayan de la mano. El equipo de sala
              está presente en la reunión y recibe con alegría y entusiasmo a todas las personas.</p>
      </div>
      <img src={equipo}
      alt="Imágen de equipo de trabajo del restaurante"
      class="imagen-informacion3"></img>

      <div class="informacion-4">
        <h2 class="titulo-informacion">Nuestras sucursales</h2>
        <p class="texto-informacion">
            Elegantis Argentina - 9 de Julio 140 - Córdoba Capital

            Elegantis USA - 2956 NW 14th St - Miami

            Elegantis Brasil - Geminadas Sul 705 - Brasilia

            Elegantis Australia - 216S Malabar Rd - Sidney
        </p>
      </div>
      <img src={sucursales}
      alt="Sucursales del restaurante"
      class="imagen-informacion4"></img>
    </div>
  );
}


export default Nosotros