import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { fetchData } from "../userState/animalsSlice";
import { useEffect } from "react";

function ShowAnimals() {
  const { animals, loading } = useSelector((state) => state.animals.appData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <img src={require("../loading.gif")} alt=""></img>;
  } else {
    return animals.map((animal) => {
      return (
        <div className="animal" key={animal.id}>
          <h1>Name: {animal.name}</h1>
          <p>Type: {animal.animal_type}</p>
          <p>Lifespan: {animal.lifespan}</p>
          <img src={animal.image_link} alt={animal.name} className="image" />
        </div>
      );
    });
  }
}

export default ShowAnimals;
