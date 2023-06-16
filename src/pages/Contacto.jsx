const Contacto = () => {
  return (
    <>
      <div className="fondo-contacto">
        <div class="subtitulo-contacto">
          <h2 class="msj">¡ENVÍANOS UN MENSAJE!</h2>
        </div>
        <div class="form-contacto">
          <form>
            <div>
                <label for="nombre">Nombre y apellido</label>
                <input type="text" name="nombre" placeholder="Ej: Nahuel Bulacio" class="pregunta"/>
            </div>
            <div>
              <label for="pais">¿De dónde nos escribes?</label>
              <select name="pais" id="" class="pregunta">
                  <option value="argentina">Argentina</option>
                  <option value="chile">Chile</option>
                  <option value="miami">Miami</option>
                  <option value="brasil">Brasil</option>
                  <option value="uruguay">Uruguay</option>
                  <option value="colombia">Colombia</option>
              </select>
            </div>
            <div>
                <label for="mail">Email</label>
                <input type="email" name="mail" placeholder="Ej: nbulacio@gmail.com" class="pregunta"/>
            </div>
            <div>
                <label for="celular">Número de teléfono</label>
                <input type="tel" name="celular" placeholder="Ej: 3519999999" class="pregunta"/>
            </div>
            <div>
                <label for="asunto">Asunto</label>
                <input type="text" name="asunto" placeholder="Ej: Solicitud de trabajo" class="pregunta"/>
            </div>
            <div>
                <label for="mensaje">Mensaje</label>
                <textarea name="" id="" cols="30" rows="10"
                    placeholder="Ej: ¡Buenas tardes! Me dirijo hacia ustedes para..."
                    class="pregunta"></textarea>
            </div>
            <div>
                <input type="submit" value="Enviar" class="enviar"/>
            </div>
          </form>
        </div>
      </div>
    </>
)
}

export default Contacto