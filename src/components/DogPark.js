import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import { spotlist } from '../data'
import DogParkCard from './DogParkCard'
import axios from "axios";

const DogPark = () => {
  const [dogparklist, setDogParkLIst] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/spots/")
      .then((value) => setDogParkLIst([...value.data]));
  }, []);
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center m-10">
      {
        spotlist&&spotlist.map((values,index)=>{
          return(
            <div key={index}>
            <Link to={`/spots/${values.id}`}>
            <DogParkCard
            value={values}
            />
            </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default DogPark
