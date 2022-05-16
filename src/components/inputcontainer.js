import React from "react";

const InputContainer = (props) => {
  return (
    <>
      <div className="search-bar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleSubmit();
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
