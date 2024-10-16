import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AnotherPage from './Pages/RecipeDetails/RecipeDetails';
import AddRecipe from './Pages/AddRecipePage/AddRecipe';


function App() {
  const url = "http://localhost:3000/dishes";
  const [items, setItems] = useState([]);

  async function fetchDataAW() {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  async function postItemAW( item ) {
    try {
      const response = await fetch(url, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( item ),
      });

      const newItemWithId = await response.json();
      return newItemWithId; 
    } catch (error) {
      console.log("Error posting data: ", error);
    }
  }

  async function deleteItemAW( item ) {
    try {
      await fetch(url + `/${ item.id }`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  }
  
  useEffect(() => {
    let itemsPromise = fetchDataAW();

    itemsPromise.then((data) => {
      setItems([...data]);
    });
  }, []);

  const updateItemAW = async (updatedRecipe) => {
    try {
      const response = await fetch(`${url}/${updatedRecipe.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedRecipe),
      });
    } catch (error) {
      console.log('Error updating item: ', error);
    }
  };

  const addItem = async (name, description, type, preparation, image) => {
    const newItem = {
      name: name,
      description: description,
      type: type,
      preparation: preparation,
      image: image,
    };
    const newItemWithId = await postItemAW(newItem);
    setItems([...items, newItemWithId]);
  };

  const deleteItem = (item) => {
    deleteItemAW( item ).then(() => {
      setItems([
      ...items.filter((currentItem) => currentItem.id !== item.id),
    ])});
  };

  const updateRecipe = (updatedRecipe) => {
    updateItemAW(updatedRecipe);
    setItems([
      ...items.map((item) =>
        item.id === updatedRecipe.id ? updatedRecipe : item),
    ]);
  };

  return (
    <Routes>
      <Route path="/*" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<HomePage items={items} deleteItem={deleteItem}/>} />
      <Route path="/agregar" element={<AddRecipe items={items} addItem={addItem}/>} />
      <Route path="/recipes/:itemId" element={<AnotherPage items={items} updateItem={updateRecipe}/>} />
    
    </Routes>
  )
}

export default App
