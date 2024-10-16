import React from "react";
import classes from "./Card.module.css";
import { useNavigate } from "react-router-dom";

function Card({ item, deleteItem }) {
  const navigate = useNavigate();

  const handleDeletBtn = () => {
    deleteItem(item);
  };

  const handleDetailsBtn = () => {
    navigate(`/recipes/${item.id}`);
  };

  return (
    <div className={`${classes.cardContainer} has-background-link`}>
      <div className={`${classes.image}`}>
        {item.image}
      </div>
      <h4 className="mt-1 has-text-white" id={classes.title}>
        {item.name}
      </h4>
      <p className="has-text-white" id={classes.type}>
        {item.type}
      </p>
      <div className={classes.buttonsContainer}>
        <button className="button is-success" id={classes.button} onClick={handleDetailsBtn}>
            Details
          </button>
          <button className="button is-warning" id={classes.button} onClick={handleDeletBtn}>
            Delete
          </button>
        </div>
    </div>
  );
}

export default Card;
