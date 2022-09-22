import axios from 'axios';
import { useDispatch } from "react-redux/es/exports"
import { addData } from '../userState/User';
import {useEffect, useState} from 'react';


const FetchData = () => {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get('https://zoo-animal-api.herokuapp.com/animals/rand/10')
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const dispatch = useDispatch();
    dispatch(addData(data));
    return 
}
    
export default FetchData;


