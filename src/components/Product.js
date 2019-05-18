import React, { Component } from "react";

class Product extends Component {
  state = {};

  render() {
    const products = this.props.products;
    const hasSearch = !!this.props.searchText;
    const parentProduct = products.filter(product => {
      return product.ParentCategoryId === 0;
    });
    console.log(parentProduct);
    console.log(products);

    return (
      <div>
        {parentProduct.map(parent => {
          return (
            <div key={parent.Id}>
              {/* Parent Catagory Rendering Here */}
              {!hasSearch && (
                <p className="list-item__title textHighlight list-item">
                  {parent.Name}
                </p>
              )}
              {/* Child Catagory Rendering Here for every parent if needed*/}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Product;

// //fetching all the childs for a parent catagory
// getChild = id => {
//   const children = this.props.products.filter(child => {
//     return child.ParentCategoryId === id;
//   });
//   return children;
// };

// {
//   this.getChild(parent.Id).map(child => {
//     return (
//       <p
//         key={child.Id}
//         className="child-item__title textHighlight child-item"
//       >
//         {child.Name}
//       </p>
//     );
//   })
// }
