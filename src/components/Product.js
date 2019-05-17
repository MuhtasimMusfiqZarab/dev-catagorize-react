import React from "react";

const Product = props => {
  const products = props.products;
  const searchText = props.searchText;
  const valid = !!props.searchText;
  console.log(valid);
  return (
    <div>
      {Object.keys(products).map(key => {
        return (
          !valid &&
          products[key].ParentCategoryId === 0 && (
            <p className="list-item__title textHighlight list-item">
              {products[key].Name}
            </p>
          )
        );
      })}
    </div>
  );
};

export default Product;
