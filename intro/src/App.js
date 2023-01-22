import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import Form1 from "./Form1";
import Form2 from "./Form2";

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id == product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!");
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart!");
  };

  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };

    return (
      <div>
        <div className="container mx-auto">
          <div className="grid grid-flow-row auto-rows-max">
            <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
            <div className="grid grid-flow-row md:grid-cols-6 mt-10 md:mt-24">
              <div className="md:col-span-1">
                <CategoryList
                  currentCategory={this.state.currentCategory}
                  changeCategory={this.changeCategory}
                  info={categoryInfo}
                />
              </div>
              <div className="md:col-span-5 md:ml-3 mt-3 md:mt-0">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => (
                      <ProductList
                        {...props}
                        products={this.state.products}
                        addToCart={this.addToCart}
                        currentCategory={this.state.currentCategory}
                        info={productInfo}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/cart"
                    render={(props) => (
                      <CartList
                        {...props}
                        cart={this.state.cart}
                        removeFromCart={this.removeFromCart}
                      />
                    )}
                  />
                  <Route path="/form1" component={Form1} />
                  <Route path="/form2" component={Form2} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
