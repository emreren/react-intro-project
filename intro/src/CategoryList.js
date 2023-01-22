import React, { Component } from "react";

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  componentDidMount() {
    this.getCategories();
  }

  render() {
    return (
      <div>
        <h3 className="uppercase text-center font-semibold mb-1">
          {this.props.info.title}
        </h3>
        <ul className="list-none divide-y-2 border-2 text-center">
          {this.state.categories.map((category) => (
            <li
              onClick={() => this.props.changeCategory(category)}
              className={
                category.categoryName === this.props.currentCategory
                  ? "p-1 text-lg font-semibold hover:cursor-default bg-white even:bg-gray-100"
                  : "p-1 hover:text-lg hover:cursor-pointer hover:font-semibold bg-white even:bg-gray-100"
              }
              key={category.id}
            >
              {category.categoryName}
            </li>
          ))}
        </ul>
        {/* <h4 className="m-4">Current Category: {this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
