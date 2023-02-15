import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { spotlist } from '../data'
import DogParkCard from './DogParkCard'
const DogPark = () => {
  console.log(spotlist);
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center m-10">
      {
        spotlist&&spotlist.map((values)=>{
          return(
            <Link to={`/spots/${values.id}`}>
            <DogParkCard
            value={values}
            />
            </Link>
          )
        })
      }
    </div>
  )
}

export default DogPark
