import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <div className="dropdown inline-block relative ">
        <button className="uppercase button">
          <Link to="cart"> Cart ( {this.props.cart.length} ) </Link>          
        </button>
        <ul className="p-2 dropdown-menu absolute hidden divide-y-2 rounded-lg bg-gray-500 text-white w-96">
          {this.props.cart.map((cartItem) => (
            <li
              key={cartItem.product.id}
              className="p-1 flex justify-between hover:text-gray-900 cursor-pointer"
            >
              <span
                className="badge bg-red-400 font-semibold text-center"
                onClick={() => this.props.removeFromCart(cartItem.product)}
              >
                X
              </span>
              <span>{cartItem.product.productName}</span>
              <span className="badge bg-green-400">{cartItem.quantity}</span>
            </li>
          ))}
          <li>
            <Link
              to="cart"
              className="p-2 flex justify-center uppercase font-semibold text-gray-300 hover:text-blue-400 duration-500"
            >
              Go to Cart
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  renderEmptyCart() {
    return (
      <div className="inline-block relative uppercase button">Empty Cart</div>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
