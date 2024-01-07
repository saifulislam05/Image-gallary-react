import React from "react";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ imageData }) => {
  const { id, user, urls, created_at, alt_description, description } =
    imageData;
  const { name } = user;

  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(`/imageDetails/${id}`);
  };

  return (
    <div
      className="w-full h-fit relative rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:scale-[.98] duration-300 mb-6"
      onClick={navigateHandler}
    >
      <img src={urls.thumb} alt={alt_description} className="w-full h-auto " />
      <div className="absolute top-0 p-6 text-gray-200 mx-auto min-h-full">
        <p className="text-xl font-semibold">{name}</p>
        <p className="my-3 text-lg">{description}</p>
        <p>{created_at}</p>
      </div>
    </div>
  );
};

export default ImageCard;
