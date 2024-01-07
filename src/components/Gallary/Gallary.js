import React from "react";
import ImageList from "./ImageList";

const Gallary = ({images}) => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="w-fit mx-auto flex flex-col gap-2 mb-6">
        <h1 className="text-xl font-semiboldold text-center">Images</h1>
        <hr className="h-1 bg-primary border-none rounded-lg" />
      </div>
      <ImageList images={ images} />
    </div>
  );
};

export default Gallary;
