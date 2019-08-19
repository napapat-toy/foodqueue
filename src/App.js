import React, { Component } from 'react';
import FoodList from './Component/FoodList'
import FoodItem from './Component/FoodItem'
import FoodInput from './Component/FoodInput'


class App extends Component {
  render() {
    return (
      <div className="container" >
        <div className="row">
          <FoodInput />
          <FoodList />
          <FoodItem />
        </div>
      </div>
    );
  }
}

export default App;
