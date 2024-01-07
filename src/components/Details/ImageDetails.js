import React from "react";

const ImageDetails = () => {
  return (
    <div className="w-11/12 mx-auto px-4 mt-8">
      <h1 className="text-center text-xl font-semibold mb-3">Details</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full md:w-1/2">
          <img
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div className="p-8 flex flex-col gap-2">
          <h2 className="card-title">Uploaded By: NEOM (@mYizSrdJkkU)</h2>
          <p className="">
            Uploaded on{" "}
            <span className="font-semibold">2023-05-02T06:42:00Z</span>
          </p>
          <p>
            <span className="font-semibold block">Description:</span>
            Trojena – The Mountains of NEOM, Saudi Arabia | A unique mountain
            destination in NEOM, Trojena will offer year-round outdoor skiing
            and adventure sports.
          </p>
          <p>
            {" "}
            <span className="font-semibold">Width: </span>8000
          </p>
          <p>
            {" "}
            <span className="font-semibold">Height: </span>9000{" "}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
