import { useState } from "react";
import Formulario from "./components/formulario/form.jsx";
import Listado from "./components/listado/listado.jsx"
import styles from "./styles.module.css";


export default function App() {

  const [items, setItems] = useState([]);


  function addItem(item) {
    setItems([...items, item]);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <main>
      <div className={styles.row}>
      <Formulario  onAdd={addItem} />
      <Listado onDelete={deleteItem} items={items}/>
      </div>
    </main>
  );
}
