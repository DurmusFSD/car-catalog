import styles from "./CreateCarForm.module.css";
import React, { useState } from "react";

const clearData = {
  price: "",
  image: "",
  name: "",
};

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState(clearData);

  const createCar = (e) => {

    e.preventDefault();
    setCars((prev) => [{ id: prev.length + 1, ...data }, ...prev]);
    setData(clearData);
    
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="Marka"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
        value={data.name}
      />
      <br />
      <input
        placeholder="Fiyat"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            price: e.target.value,
          }))
        }
        value={data.price}
      />
      <br />
      <input
        placeholder="Görsel"
        onChange={(e) =>
          setData((prev) => ({
            ...prev,
            image: e.target.value,
          }))
        }
        value={data.image}
      />
      <br />
      <button className="btn" onClick={(e) => createCar(e)}>
        EKLE
      </button>
    </form>
  );
};

export default CreateCarForm;
