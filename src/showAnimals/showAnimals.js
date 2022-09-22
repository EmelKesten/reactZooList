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
          <h1>Name: <span className="spany">{animal.name}</span></h1>
          <p>Type: <span className="spany">{animal.animal_type}</span></p>
          <p>Lifespan: <span className="spany">{animal.lifespan}</span></p>
          <img src={animal.image_link} alt={animal.name} className="image" />
        </div>
      );
    });
  }
}

export default ShowAnimals;
