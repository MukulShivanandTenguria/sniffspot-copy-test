import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { baseUrl, placeholderThumbnailSrc } from "../helper/constants";

const ParkDetailPage = () => {

  const { id } = useParams();

  const [cardDetail, setCardDetails] = useState({})

  useEffect(() => {
    axios
      .get(baseUrl + "/spots/" + id)
      .then((value) => setCardDetails([...value.data]));
  }, [id]);
  
  const { imgURL, description, title, price } = cardDetail;

  return (
    <div className="flex justify-center m-10 ">
      <div className="w-[50%] rounded overflow-hidden">
        <img
          className="w-full rounded-md"
          src={imgURL ? imgURL : placeholderThumbnailSrc}
          alt=""
        />
        <div className="py-2">
          <div className=" text-sm mb-2 font-sans">{title}</div>
          <p className="text-gray-700 text-sm font-serif">
            {description}
          </p>
        </div>
        <div className="flex justify-between align-top">
          <div className="py-1"> 
            <span className="inline-block font-serif bg-gray-100 rounded-full px-3 py-1 text-sm  text-gray-900 mr-2 mb-2">
              &#36;{price} dog/hour
            </span>
          </div>
          <div className="px-3 font-serif">
            <span>
              <FontAwesomeIcon color="#f2d00c" icon={faStar} /> 5&#91;16&#93;
            </span>
          </div>
         </div>
      </div>
    </div>
  );
};

export default ParkDetailPage;
