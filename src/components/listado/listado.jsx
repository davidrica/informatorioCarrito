/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";
import CardItem from "./carditem/carditem.jsx";

export default function Listado(props) {
  const { onDelete,items } = props;
  const [subTotal, setsubTotal] = useState(0);


  function addToCart(value) {

    setsubTotal(  subTotal + parseFloat(value)  );
  }
  return (
    <div  className={styles.textocentrado}>
      <div className={styles.textoTotal}>
        <h1 >Listado</h1>
        <div >
          <h3  > Total: $ {subTotal}</h3>
        </div>
      </div>
      <div  className={styles.row}>
         {items.map((item) => {
          return (
            <CardItem
              name={item.name}
              description={item.description}
              price={item.price}
              id={item.id}
              key={item.id}
              onDelete={onDelete}
              addToCart={addToCart}
            />
          );
        })} 
      </div>
    </div>
  );
}
