import React, { Component } from "react";
import Searchbar from "./Searchbar";
import Product from "./Product";

class Products extends Component {
  state = {
    data: [],
    searchText: "",
    products: ["New york", "Dhaka"]
  };

  componentDidMount() {
    fetch("/json/json.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // this.setState({ data: data[0] });
      });
  }

  render() {
    return (
      <div>
        <Searchbar />
        <Product products={this.state.data} />
        <h1>Hello All</h1>
      </div>
    );
  }
}

export default Products;
