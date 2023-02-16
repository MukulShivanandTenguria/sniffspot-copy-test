import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { spotlist } from '../data'
import DogParkCard from './DogParkCard'
import axios from "axios";
import { baseUrl } from '../helper/constants';
import { getSortedList } from '../helper/utils';

const DogPark = () => {

  const [dogparklist, setDogParkLIst] = useState(spotlist);

  useEffect(() => {
    axios
      .get(baseUrl + "/spots/")
      .then((value) => setDogParkLIst([...value.data]));
  }, []);
  
  const sortedSpotList= getSortedList(dogparklist)

  return (
    <div className='container mx-auto'>
      <h2 className="mt-5 font-bold text-3xl mb-6">Popular private dog parks near Seattle, Washington</h2>  
      <div className="grid sx:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          sortedSpotList && sortedSpotList.map((item)=>{
            return(
              <div className='card-item' key={`card_idx_${item.id}`}>
                <Link to={`/spots/${item.id}`}>
                  <DogParkCard
                    data={item}
                  />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DogPark;