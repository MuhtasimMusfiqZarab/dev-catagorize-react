import React from "react";

const Product = props => {
  const products = props.products;
  const parentProduct = products.filter(product => {
    return product.ParentCategoryId === 0;
  });
  console.log(parentProduct);
  const hasSearch = !!props.searchText;

  // childRender(){

  // }

  return (
    <div>
      {parentProduct.map(parent => {
        return (
          <div key={parent.Id}>
            <p className="list-item__title textHighlight list-item">
              {parent.Name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
