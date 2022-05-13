import React from "react";

const ImageBox = (props) => {
  return (
    <div className="image-box">
      <img src={props.image} alt="" />
      <div className="image-box-content">
        <h3>{props.title}</h3>
        {/* <p>{props.description}</p> */}
      </div>
    </div>
  );
};
export default ImageBox;
