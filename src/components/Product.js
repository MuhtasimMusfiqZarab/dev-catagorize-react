import React, { Component } from "react";
import Highlighter from "react-highlight-words";

class Product extends Component {
  state = {};

  render() {
    //getting props value
    const products = this.props.products;
    const searchText = this.props.searchText;
    const hasSearch = !!this.props.searchText;
    //filtering according to the searchText
    const filteredProducts = products.filter(product =>
      product.Name.toLowerCase().includes(searchText.toLowerCase())
    );
    //getting the parent catagories
    const parentProduct = products.filter(product => {
      return product.ParentCategoryId === 0;
    });

    return (
      <div>
        {/*Initial parent catagory rendering*/}
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

        {/* filtered product rendering */}
        {filteredProducts.map(filtered => {
          return (
            <div key={filtered.Id}>
              {/* filtered Catagory initial Rendering Here */}
              {hasSearch && filtered.ParentCategoryId === 0 && (
                <p className="list-item__title list-item ">
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[searchText]}
                    autoEscape={true}
                    textToHighlight={filtered.Name}
                  />
                </p>
              )}
              {hasSearch && filtered.ParentCategoryId !== 0 && (
                <p className="child-item__title child-item">
                  <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={[searchText]}
                    autoEscape={true}
                    textToHighlight={filtered.Name}
                  />
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
