import React, { Component } from "react"

export default class FoodInput extends Component {
    render() {
        // console.log(this.props);
        const { handleSubmit, item, handleChange, editItem } = this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>ป้อนรายการอาหาร</label>
                        <input type="text" className="form-control" value={item} onChange={handleChange} />
                    </div>
                    <input type="submit" className="btn btn-primary" value="บันทึกรายการ" />
                </form>
            </div>
        )
    }
}