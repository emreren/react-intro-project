import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div className="shadow-md w-full md:fixed top-0 left-0">
        <div className="block md:flex justify-between bg-white py-4 px-10">
          <div className="font-bold text-xl cursor-pointer text-gray-600 text-center md:text-left">
            Northwind App
          </div>
          <ul className="flex justify-center pr-11 bg-white transition-all duration-500 ease-in">
            <li className="ml-8 mt-3 md:mt-0">
              <CartSummary
                cart={this.props.cart}
                removeFromCart={this.props.removeFromCart}
              />
            </li>
            <li className="ml-8 mt-3 md:mt-1">
              <Link
                to=""
                className="uppercase font-semibold text-gray-800 hover:text-gray-400 duration-500"
              >
                Product List
              </Link>
            </li>
            <li className="ml-8 mt-3 md:mt-1">
              <Link
                to="form1"
                className="uppercase font-semibold text-gray-800 hover:text-gray-400 duration-500"
              >
                Form Demo  1
              </Link>
            </li>
            <li className="ml-8 mt-3 md:mt-1">
              <Link
                to="form2"
                className="uppercase font-semibold text-gray-800 hover:text-gray-400 duration-500"
              >
                Form Demo 2
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
