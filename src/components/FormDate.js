const FormDate = () => {
  return (
    <section className="form">
      <h1 className="form--h1">Reserva tu cita</h1>
      <fieldset className="fieldsets">
        <div className="fieldset--div">
          <label for="fecha">Fecha y Hora:</label>
          <input type="datetime-local" id="fecha" name="fecha" required />
        </div>
        <div className="fieldset--div">
          <label for="nombre">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="fieldset--div">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="fieldset--div">
          <label for="nombre">Comensales:</label>
          <input type="text" id="diners" name="diners" required />
        </div>
        <div className="fieldset--div">
          <label for="telefono">Número de Teléfono:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
      </fieldset>
      <div className="wrap">
        <button className="button">Reservar</button>
      </div>
    </section>
  );
};

export default FormDate;
