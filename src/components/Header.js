import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <h1 className="header__title">Catagorize</h1>
          <h2 className="header__subtitle">Showing Product Catagories</h2>
        </div>
      </header>
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
    </div>
  );
};

export default Header;
