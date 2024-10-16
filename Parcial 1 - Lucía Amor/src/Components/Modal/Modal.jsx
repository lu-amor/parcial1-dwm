import React, { useState } from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal({ addItem }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [preparation, setPreparation] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (
    //   (title.trim() === "" && description.trim() === "") ||
    //   players === "" ||
    //   categories === ""
    // ) {
    //   window.alert("Falta completar datos!!");
    // } else {
    //   console.log(title, description, players, categories);
    //   addItem(title, description, players, categories);
    // }
    addItem(name, description, type, preparation, image);
    navigate("/home");
  };

  const handleGoHomeBtn = () => {
    navigate("/home");
  };

  return (
    <div className={classes.modal}>
      <div className={`${classes.modalContent} has-background-success`}>
        <p className="title is-4 has-text-link ">New recipe</p>
        <form onSubmit={handleSubmit} className={classes.modalContainer}>
          <div className={classes.field}>
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.field}>
            <label className="label">Description</label>
            <div className="control">
              <input
                className="input"
                type="textarea"
                placeholder="Description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.field}>
            <label className="label">Type</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                value={type}
                required
                onChange={(e) => setType(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.field}>
            <label className="label">Preparation</label>
            <div className="control">
              <input
                className="input"
                type="textarea"
                placeholder="Preparation"
                value={preparation}
                required
                onChange={(e) => setPreparation(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.field}>
            <label className="label">Image</label>
            <div className="control">
              <input
                className="input"
                type="emoji"
                placeholder="Emoji"
                value={image}
                required
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <button
              type="button"
              className="button is-danger has-text-white"
              onClick={handleGoHomeBtn}
            >
              Cancelar
            </button>
            <button type="submit" className="button is-info has-text-white">
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
