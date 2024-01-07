import React from 'react'
import ImageCard from './ImageCard';

const ImageList = ({images}) => {
  return (
    <div className="w-full [column-fill:_balance] columns-1 md:columns-3 lg:columns-4 gap-6">
      {images.map((imageData,index) => {
        return <ImageCard key={index} imageData={imageData} />;
      })}
      
    </div>
  );
}

export default ImageList