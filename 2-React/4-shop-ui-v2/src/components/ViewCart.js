import React, { Component } from 'react';

class ViewCart extends Component {
    renderCartItems() {
        let { cart } = this.props;
        return cart.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                </tr>
            );
        })
    }
    render() {

        return (
            <div>
                <div className="card card-default">
                    <div className="card-header">Items in cart</div>
                    <div className="card-body">
                        <table className="table table-sm">
                            <tbody>
                                {this.renderCartItems()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}

export default ViewCart;