import React, { Component } from "react";

class Product extends Component {
  state = {};

  render() {
    const products = this.props.products;
    const searchText = this.props.searchText;
    const hasSearch = !!this.props.searchText;
    const filteredProducts = products.filter(product =>
      product.Name.toLowerCase().includes(searchText.toLowerCase())
    );
    const parentProduct = products.filter(product => {
      return product.ParentCategoryId === 0;
    });
    console.log(parentProduct);
    console.log(products);

    return (
      <div>
        {/*Initial parent rendering*/}
        {parentProduct.map(parent => {
          return (
            <div key={parent.Id}>
              {/* Parent Catagory initial Rendering Here */}
              {!hasSearch && (
                <p className="list-item__title textHighlight list-item">
                  {parent.Name}
                </p>
              )}
            </div>
          );
        })}

        {/* Here are the filtered product rendering */}
        {filteredProducts.map(filtered => {
          return (
            <div key={filtered.Id}>
              {/* filtered Catagory initial Rendering Here */}
              {hasSearch && filtered.ParentCategoryId === 0 && (
                <p className="list-item__title textHighlight list-item">
                  {filtered.Name}
                </p>
              )}
              {hasSearch && filtered.ParentCategoryId !== 0 && (
                <p className="child-item__title textHighlight child-item">
                  {filtered.Name}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Product;
