import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    searchText: "",
    products: []
  };

  //fetching the json data
  componentDidMount() {
    fetch("/json/json.json")
      .then(res => res.json())
      .then(products => {
        this.setState({ products });
      });
  }

  //getting seachTerm from input field
  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <div>
        {/*This is the search Text (input) field*/}
        <div className="actions">
          <div className="actions__container">
            <input
              type="text"
              id="search-text"
              className="input"
              value={this.state.searchText}
              onChange={this.handleChange}
              placeholder="Search Products"
            />
          </div>
        </div>
        {/*Here individual product is rendered*/}
        <Product
          products={this.state.products}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

export default Products;
