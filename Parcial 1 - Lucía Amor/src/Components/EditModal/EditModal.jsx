import React, { useState, useEffect } from "react";
import classes from "./EditModal.module.css";
import { useNavigate } from "react-router-dom";

function EditModal({ recipe, updateItem, closeModal }) {
const [name, setName] = useState('');
const [description, setDescription] = useState(recipe ? recipe.description : '');
const [type, setType] = useState(recipe ? recipe.type : '');
const [preparation, setPreparation] = useState(recipe ? recipe.preparation : '');
const [image, setImage] = useState(recipe ? recipe.image : '');
const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = { ...recipe, name, description, type, preparation, image };
    updateItem(updatedRecipe);
    closeModal();
};

useEffect(() => {
    if (recipe) {
        setName(recipe.name);
        setDescription(recipe.description);
        setType(recipe.type);
        setPreparation(recipe.preparation);
        setImage(recipe.image);
    }
}, [recipe]);
// si la recargas queda actualizada

const handleGoHomeBtn = () => {
    navigate("/home");
};

return (
    <div className={classes.modal}>
    <div className={`${classes.modalContent} has-background-success`}>
        <p className="title is-4 has-text-link ">Edit Recipe</p>
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
            onClick={closeModal}
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

export default EditModal;
