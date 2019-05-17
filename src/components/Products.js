import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    data: {},
    searchText: "",
    products: []
  };

  componentDidMount() {
    fetch("/json/json.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ data });
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
        <Product products={this.state.data} />
      </div>
    );
  }
}

export default Products;
