import React, { Component } from "react"

export default class FoodItem extends Component {
    render() {
        // console.log(this.props);
        const { name, handleDelete, handleEdit } = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{name}</h6>
                <span onClick={handleEdit}><i className="far fa-edit"></i></span>
                <span onClick={handleDelete}><i className="fas fa-trash"></i></span>
            </li>
        )
    }
}