import styles from "../Home.module.css";

function CarItem({ car }) {
  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${car.image})` }}
      />
      <div className={styles.info}>
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
          }).format(car.price)}
        </p>

        <button className="btn">Oku</button>
      </div>
    </div>
  );
}

export default CarItem;
