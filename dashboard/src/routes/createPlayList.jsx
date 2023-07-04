import React, { useState } from "react";

function CreatePlayList() {
  const [description, setDescription] = useState("");
  const maxLength = 10;

  const handleChange = (event) => {
    const { value } = event.target;
    const words = value.trim().split(/\s+/);
    const wordCountValue = words.length;
    const remaining = maxLength - wordCountValue;
    if (remaining <= 0) {
      const trimValue = words.slice(0, maxLength).join(" ");
      setDescription(trimValue);
    }else{
      setDescription(value);
    }

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
              id="description"
              placeholder="Add a description"
              required
              value={description}
              onChange={handleChange}
            />
            {/* <span id="wordCount">{maxLength - description.length} words remaining</span> */}
          </div>
        </form>
      </div>

      <div className="m-t-lg">
        <ul className="list-inline">
          <li>
            <input className="btn btn--form" type="submit" value="Create" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CreatePlayList;
