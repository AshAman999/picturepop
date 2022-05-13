import React from "react";
import ImageBox from "./imagebox";
import { useEffect, useState } from "react";

const ImageList = (props) => {
  //make api call to pexels
  // const [images, setImages] = useState([]);

  fetch(`https://api.pexels.com/v1/search?query=cat&per_page=15&page=1`, {
    headers: {
      Authorization: "563492ad6f91700001000001a9c8f8c9d9c8f8c9d9c8f8c9d",
      ContetntType: "application/json",
    },
  })
    // .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="image-list">
      {props.images.map((image) => (
        <ImageBox
          key={image.id}
          image={image.urls.regular}
          title={image.user.name}
          description={image.description}
        />
      ))}
    </div>
  );
};
export default ImageList;
