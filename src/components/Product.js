import React from "react";

const Product = props => {
  const product = props.products;
  return (
    <div>
      {Object.keys(product).map(key => {
        return (
          product[key].ParentCategoryId === 0 && (
            <p className="list-item__title textHighlight list-item">
              {product[key].Name}
            </p>
          )
        );
      })}
    </div>
  );
};

export default Product;

// {
//     props.products.map(product => {
//         return <p key={product}>{product}</p>;
//     })
// }
