import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3 className="uppercase text-center font-semibold mb-1">
          {this.props.info.title} - {this.props.currentCategory}
        </h3>
        <table className="w-full border-2 text-center divide-y-2">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-1">#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th>Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr className="bg-white even:bg-gray-100" key={product.id}>
                <th className="font-medium">{product.id}</th>
                <th className="font-normal">{product.productName}</th>
                <th className="font-normal">{product.unitPrice}</th>
                <th className="font-normal">{product.quantityPerUnit}</th>
                <th className="font-normal">{product.unitsInStock}</th>
                <th>
                  <button
                    onClick={() => this.props.addToCart(product)}
                    className="button text-sm m-1"
                  >
                    Add
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
