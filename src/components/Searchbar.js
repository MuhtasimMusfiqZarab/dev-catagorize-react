import React from "react";

const Searchbar = () => {
  return (
    <div className="actions">
      <div className="actions__container">
        <input
          type="text"
          id="search-text"
          className="input"
          placeholder="Search Products"
        />
      </div>
    </div>
  );
};

export default Searchbar;
