import alertify from "alertifyjs";
import React, { Component } from "react";

export default class Form2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="px-36 py-10">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            className="input"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="input"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter description"
            className="input"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label for="city">City</label>
          <select
            name="city"
            id="city"
            placeholder="Enter city"
            className="input"
            onChange={this.handleChange}
          >
            <option value="Ankara">Ankara</option>
            <option value="Bursa">Bursa</option>
            <option value="İzmir">İzmir</option>
            <option value="İstanbul">İstanbul</option>
            <option value="Bolu">Bolu</option>
          </select>
          <br />
          <br />
          <button type="submit" className="button">
            Save
          </button>
        </form>
      </div>
    );
  }
}
