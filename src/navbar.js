import React from "react";
import SearchBox from "./header";
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <SearchBox
        className="search"
        placeholder={props.search}
        handleChange={(e) => props.setSearch(e.target.value)}
        onSubmit={(e) => props.handleSubmit(e)}
      />
    </nav>
  );
};
export default Navbar;
