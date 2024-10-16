import React, { useState, useEffect } from "react";
import classes from "./RecipeDetails.module.css";
import { useParams, useNavigate } from "react-router-dom";
import EditModal from "../../Components/EditModal/editModal";

function RecipeDetails({updateItem}) {
  let { itemId } = useParams();
  const [recipe, setRecipe] = useState("");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function fetchRecipe() {
    try {
        const response = await fetch("http://localhost:3000/dishes" + `/${itemId}`, { method: "GET" });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching data: ", error);
    }
}

  useEffect(() => {
      let promise = fetchRecipe();
      promise.then((incomingRecipe) => {
          setRecipe(incomingRecipe);
      });
  }, [recipe]);

  const handleGoHomeBtn = () => {
    navigate("/home");
  };

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  return (
    <div className={classes.detailsPageContainer}>
      <div className={`has-background-info ${classes.detailsContent}`}>
        <button id={classes.goHomeButton} onClick={handleGoHomeBtn}>
          {"<"} go back
        </button>
        <div className={`${classes.image}`}>{recipe.image}</div>
        <h1 className="title is-2 has-text-white" id={classes.title}>
          {recipe.name}
        </h1>
        <div className={classes.dataContainer}>
          <p>
            <b>Description:</b> {recipe.description}
          </p>
          <p>
            <b>Type:</b> {recipe.type}
          </p>
          <p>
            <b>Preparation:</b> {recipe.preparation}
          </p>
        </div>
        <button className="button is-success mt-4" onClick={() => openModal()}>Edit Recipe</button>
      </div>
      {isModalOpen && (
        <EditModal recipe={recipe} closeModal={closeModal} updateItem={updateItem}/>
      )}
    </div>
  );
}

export default RecipeDetails;
