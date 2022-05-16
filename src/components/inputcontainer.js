import React from "react";
import pexels from "../api/pexels";

const InputContainer = (props) => {
  return (
    <>
      <div className="search-bar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(props.search);
            props.setPageNo(1);
            props.setLoading(true);
            try {
              pexels
                .get("/search", {
                  params: { query: props.search, per_page: 9 },
                })
                .then((response) => {
                  props.setImages(response.data.photos);
                  props.setLoading(false);
                });
            } catch (error) {
              console.log(error);
              props.setError(error);
              props.setLoading(false);
            }
          }}
        >
          <div className="search-box">
            <div className="">
              <input
                onChange={(e) => props.setSearch(e.target.value)}
                className="form-cont"
                placeholder="Search for images..."
                type="text"
              />
            </div>
            <div className="submit-btn">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default InputContainer;
