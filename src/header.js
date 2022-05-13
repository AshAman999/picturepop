import React from "react";
import { TextField, IconButton } from "@material-ui/core";

import { SearchOutlined } from "@material-ui/icons";
// make a search box component
const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <TextField
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
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
