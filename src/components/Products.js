import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Product from "./Product";

class Products extends Component {
  state = {
    searchText: "",
    products: ["New york", "Dhaka"]
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <Searchbar />
        <Product products={this.state.products} />
        <h1>Hello All</h1>
      </div>
    );
  }
}

export default Products;
