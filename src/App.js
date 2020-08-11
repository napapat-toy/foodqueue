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
    // console.log("Submit Data");
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
  }
  handleChange = (e) => {
    // console.log("Data Change");
    this.setState({
      item: e.target.value
    })
  }
  handleDelete = (id) => {
    // console.log("Remove Item");
    const filterItem = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: filterItem
    })
  }
  handleEdit = (id) => {
    // console.log("Edit Item");
    const filterItem = this.state.items.filter(item => item.id !== id)
    const selectItem = this.state.items.find(item => item.id === id)

    this.setState({
      items: filterItem,
      item: selectItem.name,
      id: id,
      editItem: true
    })
  }
  clearList = () => {
    // console.log("Clear Data");
    this.setState({
      items: []
    })
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
          clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
