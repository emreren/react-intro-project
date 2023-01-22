import React, { Component } from "react";

export default class Form1 extends Component {
  state = { userName: "", city: "" };

  onChangeHandler = (event) => {
    //this.setState({ userName: event.target.value });
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler} className="px-36 py-10">
          <h3>User Name</h3>
          <input
            type="text"
            name="userName"
            onChange={this.onChangeHandler}
            className="input"
          />
          <h3>User Name is {this.state.userName}</h3>
          <br />
          <h3>City</h3>
          <input
            type="text"
            name="city"
            onChange={this.onChangeHandler}
            className="input"
          />
          <h3>City is {this.state.city}</h3>
          <br />
          <input type="submit" value="Save" className="button" />
        </form>
      </div>
    );
  }
}
