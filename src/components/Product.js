import React from "react";

const Product = props => {
  return (
    <div>
      {props.products.map(product => {
        return <p key={product}>{product}</p>;
      })}
    </div>
  );
};

export default Product;