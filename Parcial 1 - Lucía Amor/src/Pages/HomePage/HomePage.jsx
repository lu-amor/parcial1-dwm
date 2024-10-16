import React, { useState } from "react";
import classes from "./HomePage.module.css";
import Card from '../../Components/Card/Card.jsx';
import Modal from '../../Components/Modal/Modal.jsx';
import { useNavigate } from "react-router-dom";

function HomePage({ items, deleteItem }) {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const addRecipeHandler = () => {
        navigate("/agregar");
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredRecipes = items.filter((item) =>
        item.type.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
    <div>
        <header>
            <div className={classes.titleContainer}>
            <p className="title is-1 mt-6 has-text-danger">Recipes</p>
            </div>
            <div className={`field is-grouped is-align-content-center ${classes.buttonContainer}`}>
                <p className="control ml-6 mt-3">
                    <input
                        className="input"
                        type="text"
                        placeholder="Find a product"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </p>
                <div className={classes.buttonContainer}>
                    <button className={`button is-primary mr-6 mt-3`} onClick={addRecipeHandler}>
                        Add recipe
                    </button>
                </div>
            </div>
        </header>
        <div className={classes.cardsContainer}>
            {filteredRecipes.map((currentItem, index) => {
            return (
                <Card
                key={index}
                item={currentItem}
                deleteItem={deleteItem}
                />
            );
            })}
        </div>
    </div>
    );
}

export default HomePage;
