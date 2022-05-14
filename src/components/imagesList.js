import React from "react";
import ImageBox from "./imagebox";
import { useEffect, useState } from "react";
import pexels from "../api/pexels";

const ImageList = (props) => {
  return (
    <div className="image-list">
      {props.images.map(
        (image) =>
          image
          // <ImageBox
          //   key={image.id}
          //   image={image}
          //   title={image.user.name}
          //   description={image.description}
          // />
      )}
    </div>
  );
};
export default ImageList;
