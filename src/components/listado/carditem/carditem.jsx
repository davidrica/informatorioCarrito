/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";

export default function CardItem(props) {
  const { name, description, price, id, addToCart, fixNum, onDelete: deleteItem } = props;
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function addOneItem() {

    
    setItemCount( itemCount + 1);
    setTotalPrice(totalPrice  + parseFloat(price ));
    addToCart(price);
  }

  function removeOneItem() {
    setItemCount(itemCount ? itemCount- 1:0 );
    
    if (itemCount > 0) {
      setTotalPrice(totalPrice - parseFloat(price) );
      addToCart(-price);
    }
  }

  function handleDeleteItem() {
    setTotalPrice(totalPrice - parseFloat(price) );
    addToCart(-totalPrice);

    deleteItem(id);
  }

  return (
    <div  className={styles.col} >
      <h1>{name}</h1>
      <p>{description}</p>
      <h4>$ {price}</h4>
      <div  >
        <button   onClick={removeOneItem}>
          -
        </button>
        <span  >{itemCount}</span>
        <button  onClick={addOneItem}>
          +
        </button>
        <h3>Subtotal $ {totalPrice}</h3>
        <button  onClick={handleDeleteItem}>
          borrar
        </button>
      </div>
    </div>
  );
}
