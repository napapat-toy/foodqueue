import React, { Component } from 'react';
import FoodList from './Component/FoodList'
import FoodInput from './Component/FoodInput'
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      name: this.state.item
    }
    const updateItem = [...this.state.items, newItem]
    this.setState({
      items: updateItem,
      item: "",
      id: uuid(),
      editItem: false
    })
    // console.log("Submit Data");
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
    // console.log("Data Change");
  }
  handleDelete = (e) => {
    console.log("Remove Item");
  }
  handleEdit = (e) => {
    console.log("Edit Item");
  }
  clearList = () => {
    console.log("Clear Data");
  }

  render() {
    return (
      <div className="container" >
        <h2 align="center">Food Queue Application</h2>
        <div className="row">
          <FoodInput
            item={this.state.item}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            editItem={this.state.editItem}
          />
        </div>
        <FoodList
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
