import React from "react";
import { TextField, IconButton } from "@material-ui/core";

import { SearchOutlined } from "@material-ui/icons";
// make a search box component
const SearchBox = (props) => {
  return (
    <TextField
      className="search"
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
      onSubmit={props.handleSubmit}
      InputProps={{
        endAdornment: (
          <IconButton>
            <SearchOutlined />
          </IconButton>
        ),
      }}
    />
  );
};
export default SearchBox;
