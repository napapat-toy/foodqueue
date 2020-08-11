import React, { Component } from "react";
import FoodItem from "./FoodItem";

export default class FoodList extends Component {
    render() {
        // console.log(this.props);
        const { items, handleEdit, handleDelete, clearList } = this.props
        return (
            <ul className="list-group my-5">
                <h3>รายการอาหาร</h3>
                {items.map(item => {
                    // console.log(item.id);
                    return (
                        <FoodItem
                            key={item.id}
                            name={item.name}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                        />
                    )
                })}
                <button className="btn btn-danger" onClick={clearList}>Clear all list</button>
            </ul>
        )
    }
}