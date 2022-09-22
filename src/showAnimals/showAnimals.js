import { useSelector } from "react-redux/es/exports";

function ShowAnimals() {
    const data = useSelector(state => state.user.user.fetchData);
    return (
        <div>
            {data && data.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.name}</h1>
                        <p>{item.animal_type}</p>
                    </div>
                )
            })}
        </div>
    )

}


export default ShowAnimals;