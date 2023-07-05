import React, { useState } from "react";
import Swal from 'sweetalert2';
import imagen from "../img/photo.png";

function NewSong() {
  const [duration, setDuration] = useState("");

  const handleDurationChange = (event) => {
    const { value } = event.target;
    const formattedValue = formatDuration(value);
    setDuration(formattedValue);
  };

  const formatDuration = (value) => {
    const formattedValue = value.replace(/\D/g, "").slice(0, 6); // Eliminar caracteres no numéricos y limitar a 6 dígitos
    const hours = "0"; // Obtener las primeras 2 cifras y agregar ceros a la izquierda si es necesario
    const minutes = formattedValue.slice(2, 4).padStart(2, "0"); // Obtener las siguientes 2 cifras y agregar ceros a la izquierda si es necesario
    const seconds = formattedValue.slice(4, 6).padStart(2, "0"); // Obtener las últimas 2 cifras y agregar ceros a la izquierda si es necesario
    return `${hours}:${minutes}:${seconds}`;
  };

  //SweetAlert
  const [scanResult, setScanResult] = useState(null);

  //Funcion para el SweetAlert
  const showNotification = (result) => {

    if (result) {
      Swal.fire({
        title: 'Se pudo agregar su cancion',
        text: 'Felicidades ahora tienes una nueva canción',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (response.isConfirmed) {
          window.open(result);
        }
      });
    }
    setScanResult(result);
  }
  const handleCreatePlaylist = () => {
    showNotification(true);
  };


  return (
    <div className="new">
      <h1 className="newSong">Nueva canción</h1>
      <div className="info">
        <img src={imagen} alt="logo" className="img" />
      </div>

      <form action="#" id="form">
        <label htmlFor="name">Titulo de la canción:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="duration">Duración</label>
        <input
          type="text"
          id="duration"
          name="duration"
          value={duration}
          onChange={handleDurationChange}
          pattern="\d{0,2}:\d{0,2}:\d{0,2}"
          placeholder="HH:mm:ss"
          required
        />
        <input id="btnEnviar" type="submit" value="Enviar" onClick={handleCreatePlaylist} />
      </form>
    </div>
  );
}

export default NewSong;
