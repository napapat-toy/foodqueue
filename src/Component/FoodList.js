import React, { Component } from "react";
import FoodItem from "./FoodItem";

export default class FoodList extends Component {
    render() {
        // console.log(this.props);
        const { items, handleEdit, handleDelete } = this.props
        return (
            <ul className="list=group my-5">
                <h3>รายการอาหาร</h3>
                {items.map(item => {
                    return (
                        <FoodItem
                            key={item.id}
                            name={item.name}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    )
                })}
            </ul>
        )
    }
}