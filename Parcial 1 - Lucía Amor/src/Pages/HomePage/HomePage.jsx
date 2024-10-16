import React, { useState } from "react";
import classes from "./HomePage.module.css";
import Card from '../../Components/Card/Card.jsx';
import Modal from '../../Components/Modal/Modal.jsx';
import { useNavigate } from "react-router-dom";

function HomePage({ items, deleteItem }) {
  const navigate = useNavigate();

  const addRecipeHandler = () => {
      navigate("/agregar");
  };

  return (
  <div>
    <header>
        <div className={classes.titleContainer}>
        <p className="title is-1 mt-6 has-text-danger">Recipes</p>
        </div>
        <div className={classes.buttonContainer}>
        <button className={`button is-primary mr-4 mt-3`} onClick={addRecipeHandler}>
            Add recipe
        </button>
        </div>
    </header>
    <div className={classes.cardsContainer}>
        {items.map((currentItem, index) => {
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
