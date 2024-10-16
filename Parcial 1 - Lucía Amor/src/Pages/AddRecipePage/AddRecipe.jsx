import React, { useState } from "react";
import classes from "./AddRecipe.module.css";
import Modal from '../../Components/Modal/Modal.jsx';

function AddRecipe({ addItem }) {
return (
<div>
    <Modal addItem={addItem}/>
</div>
);
}

export default AddRecipe;
