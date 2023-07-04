import React from "react";

function CreatePlayList() {
  return (
    <div className="create">
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required></textarea>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default CreatePlayList;
