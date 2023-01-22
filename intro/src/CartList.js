import React, { Component } from "react";

export default class CartList extends Component {
  renderCart() {
    return (
      <div>
        <h3 className="uppercase text-center font-semibold mb-1">Cart List</h3>
        <table className="w-full border-2 text-center divide-y-2">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-1">#</th>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Quantity</th>
              <th>Remove From Cart</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr
                key={cartItem.product.id}
                className="bg-white even:bg-gray-100 font-normal"
              >
                <td className="font-medium">{cartItem.product.id}</td>
                <td>{cartItem.product.categoryId}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitInStock}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <button
                    className="button text-sm m-1 bg-red-400 text-white"
                    onClick={() => this.props.removeFromCart(cartItem.product)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
