
import { useState } from "react";
import styles from "./styles.module.css";
import Inputs from "./inputs.jsx"

export default function Formulario(props) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const { onAdd: addItem } = props;
  const [newItem, setNewItem] = useState({ id: "", name: "", description: "", price: "" });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(newItem);
    addItem(newItem);
    setNewItem({ id:  getRandomInt(1,200000), name: "", description: "", price: "" });
    
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewItem((prevProduct) => {
      return { ...prevProduct, [name]: value };
    });
  }

  return (
    <div className={styles.col}>
      <h3 >Cargar Producto</h3>
      <form  onSubmit={handleSubmit}>
         <Inputs 
            name="name" 
            value={newItem.name} 
            type="text" 
            labelContent="Nombre" 
            onChange={handleChange} />
         <Inputs
          name="description"
          value={newItem.description}
          type="text"
          labelContent="Descripción"
          onChange={handleChange}
        />
        <Inputs
          name="price"
          value={newItem.price}
          type="number"
          labelContent="Precio"
          onChange={handleChange}
          args={{ min: "0", step: "0.01" }}
        /> 
        <button  type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
}
