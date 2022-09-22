import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { fetchData } from "../userState/User";
import { useEffect } from "react";

function ShowAnimals() {
  const data = useSelector((state) => state.user.user.fetchData);
  const loading = useSelector((state) => state.user.user.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (loading) {
    return <img src={require("../loading.gif")} alt=""></img>;
  } else {
    return data.map((animal) => {
        console.log(animal)
      return (
        <div id={animal.id} className="animal">
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
