import React from "react";

const LoadingIndicator = (props) => {
  return (
    <div className="col-12 col-md-12 col-xl-12 loading">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};
export default LoadingIndicator;
