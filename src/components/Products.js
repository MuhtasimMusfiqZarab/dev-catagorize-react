import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    searchText: "",
    products: {}
  };

  componentDidMount() {
    fetch("/json/json.json")
      .then(res => res.json())
      .then(products => {
        console.log(products);
        this.setState({ products });
      });
  }

  //input in searchField
  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    console.log(this.state.searchText);
    return (
      <div>
        {/*This is the search Text (input)*/}
        <div className="actions">
          <div className="actions__container">
            <input
              type="text"
              id="search-text"
              className="input"
              //   value={this.state.searchText}
              onChange={this.handleChange}
              placeholder="Search Products"
            />
          </div>
        </div>
        {/*Here Product is rendered*/}
        <Product
          products={this.state.products}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

export default Products;
