import React from "react";
import { useParams } from "react-router-dom";
import { spotlist } from "../data";
import {
  faRulerCombined,
  faRulerHorizontal,
  faStar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ParkDetailPage = () => {
  const { id } = useParams();
  const carddetail = spotlist.filter((value)=>value.id.toString()===id);
  console.log(carddetail);
  return (
    <div className="flex justify-center m-10 ">
      <div className="w-[50%] rounded overflow-hidden shadow-lg">
        <img
          className="w-full rounded-md"
          src="https://media.istockphoto.com/id/1389600745/photo/rottweiler-dog-and-alaskan-malamute-in-the-park.jpg?s=1024x1024&w=is&k=20&c=HTcc1kw4s-i3Nik60S02pSJzmdvAQEwQeuLfS9PwD6I="
          alt="Sunset in the mountains"
        />
        <div className="px-2 py-2">
          <div className=" text-sm mb-2 font-sans">{carddetail[0].title}</div>
          <p className="text-gray-700 text-sm font-serif">
            {carddetail[0].description}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="px-2">
            <span className="inline-block bg-gray-100 font-serif rounded-full px-3 py-1 text-sm  text-gray-900 mr-2 ">
              <FontAwesomeIcon icon={faRulerHorizontal} />
              Fully Fenced
            </span>
            <span className="inline-block bg-gray-100 font-serif rounded-full px-3 py-1 text-sm  text-gray-900 mr-2 ">
              <FontAwesomeIcon icon={faRulerCombined} />
              &#60; 1 acre
            </span>
          </div>
          <div className="px-3 font-serif">
            <span>
              <FontAwesomeIcon color="#f2d00c" icon={faStar} /> 5&#91;16&#93;
            </span>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="px-2 py-1">
            <span className="inline-block font-serif bg-gray-100 rounded-full px-3 py-1 text-sm  text-gray-900 mr-2 mb-2">
              &#36;10.00 dog/hour
            </span>
          </div>
          <div className="px-3 py-1">
            <span className="font-serif text-sm text-gray-900">
              <FontAwesomeIcon icon={faLocationDot} /> Seattla, WA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkDetailPage;
