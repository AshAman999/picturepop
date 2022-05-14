import React from "react";
import { TextField, IconButton, Button } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
const SearchBox = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <TextField
          className="search"
          type="search"
          placeholder={props.placeholder}
          onChange={props.handleChange}
          InputProps={{
            onSubmit: props.onSubmit,
            endAdornment: (
              <IconButton>
                <SearchOutlined />
              </IconButton>
            ),
          }}
        />
        <Button onClick={props.onSubmit}>submit</Button>
      </form>
    </div>
  );
};
export default SearchBox;
