import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ImageDetails = () => {
  const [imageData, setImageData] = useState({});
  const params = useParams();

  console.log(params);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/${params.id}?&client_id=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => setImageData(response.data));
  }, [params.id]);

  const { urls, user, created_at, description, width, height, links } =
    imageData;

  return (
    <div className="w-11/12 mx-auto px-4 mt-8">
      <h1 className="text-center text-xl font-semibold mb-3">Details</h1>
      {imageData.id ? (
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full md:w-1/2">
            <img src={urls.full} alt="Album" />
          </figure>
          <div className="p-8 flex flex-col gap-2">
            <h2 className="card-title">
              Uploaded By: {user.name} ({user.id})
            </h2>
            <p className="">
              Uploaded on <span className="font-semibold">{created_at}</span>
            </p>
            <p>
              <span className="font-semibold block">Description:</span>
              {description}
            </p>
            <div className="">
              <p>
              {" "}
              <span className="font-semibold">Width: </span>
              {width}
            </p>
            <p>
              {" "}
              <span className="font-semibold">Height: </span>
              {height}
            </p>
            </div>
            
            <div className="card-actions">
              <a
                className="btn btn-primary"
                href={links.download}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      ) : (
          <div className="w-fit mx-auto mt-6">
            <span className="loading loading-dots loading-lg"></span>
          </div>
      )}
    </div>
  );
};

export default ImageDetails;
