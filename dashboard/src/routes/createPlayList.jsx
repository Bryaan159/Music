import React, { useState } from "react";
import Swal from 'sweetalert2';

function CreatePlayList() {
  const [description, setDescription] = useState("");
  const maxLength = 100;

  const handleChange = (event) => {
    const { value } = event.target;
    const words = value.trim().split(/\s+/);
    const wordCountValue = words.length;
    const remaingWords = maxLength - wordCountValue;
    if (remaingWords >= 0) {
      setDescription(value);
    } else {
      const trimValue = words.slice(0, 10).join(" ");
      setDescription(trimValue);
    }
  };

  const [scanResult, setScanResult] = useState(null);

  //Funcion para el SweetAlert
  const showNotification = (result) => {

    if (result) {
      Swal.fire({
        title: 'Se pudo crear la playlist!',
        text: 'Felicidades ahora tienes una nueva playlist',
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
    <div className="create">
      <div className="image_container container_thumnail">
        <div className="thumbnail_img"></div>
        <div className="thumbnail_content text-center">
          <h1 className="heading_primary">Welcome Thunder Music</h1>
          <h3 className="heading_secondary">
            Are you ready to create your playlist?
          </h3>
        </div>

        <div className="overlay"></div>
      </div>

      <div className="container_child new_form">
        <form action="#">
          <div className="form_group">
            <label htmlFor="username">Name of Playlist:</label>
            <input
              className="form-control"
              type="text"
              id="username"
              placeholder="Name..."
              required
            />
          </div>

          <div className="full-width">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              type="text"
              maxLength={maxLength}
              id="description"
              placeholder="Add a description"
              required
              value={description}
              onChange={handleChange}
            />
            <span id="wordCount">{maxLength - description.length} words remaining</span>
          </div>
        </form>
      </div>

      <div className="m-t-lg">
        <ul className="list-inline">
          <li>
            <input className="btn btn--form" type="submit" value="Create" onClick={handleCreatePlaylist} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CreatePlayList;
