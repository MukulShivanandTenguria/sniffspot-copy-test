import React from "react";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { placeholderThumbnailSrc } from "../helper/constants";

const DogParkCard = (props) => {
  
  const {title, description, price, imgURL } = props.data;
  // const { id, title, description, price, created_at, updated_at, imgURL } = props.data;

  return (
    <div className="rounded overflow-hidden mb-5">
      <img
        className="w-full rounded-md mb-2"
        src={imgURL ? imgURL : placeholderThumbnailSrc}
        alt=""
      />
      <div className="py-2">
        <div className=" text-sm mb-2 font-sans">{title}</div>
        <p className="text-gray-700 text-sm font-serif">{description}</p>
      </div>
      <div className="flex justify-between">
        <div className="py-2">
          <span className="inline-block font-serif bg-gray-100 rounded-full px-3 py-1 text-sm  text-gray-900 mr-2 mb-2">
            &#36;{price} dog/hour
          </span>
        </div>
        <div className="font-serif">
          <span>
            <FontAwesomeIcon color="#f2d00c" icon={faStar} /> 5&#91;16&#93;
          </span>
        </div>
      </div>
    </div>
  );
};

export default DogParkCard;
