import { useEffect, useState } from "react";
import { cars as carsData } from "./Cars.data";
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";

function Home() {
  const [cars, setCars] = useState(carsData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4200/cars");
      const data = await response.json();

      setCars(data);
    };
  }, [cars]);

  return (
    <div>
      <h1>Araç Katalogu</h1>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>Araç bulunamadı</p>
        )}
      </div>
    </div>
  );
}

export default Home;
