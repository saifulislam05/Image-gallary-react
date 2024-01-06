import React from 'react'
import ImageCard from './ImageCard';

const ImageList = () => {
    return <div className="w-full [column-fill:_balance] columns-3 gap-6">
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
  </div>;
}

export default ImageList