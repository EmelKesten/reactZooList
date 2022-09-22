import { useSelector } from "react-redux/es/exports";

function ShowAnimals() {
    const data = useSelector(state => state.user.user.fetchData);
    return (
        <div>
            {data && data.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <p>{item.species}</p>
                        <p>{item.age}</p>
                    </div>
                )
            })}
        </div>
    )

}


export default ShowAnimals;