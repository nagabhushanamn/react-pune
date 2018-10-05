import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      isCartOpen: false,
      products: [
        {
          id: 111,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canbuy: true,
          image: 'images/Laptop.png'
        },
        {
          id: 222,
          name: 'Mobile',
          price: 18000,
          description: 'New pro',
          canbuy: true,
          image: 'images/Mobile.png'
        }
      ]
    };
  }

  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(item) {
    let { cart } = this.state;
    cart = cart.concat(item);
    this.setState({ cart })
  }


  renderProducts() {
    let { products, isCartOpen, cart } = this.state;
    if (!isCartOpen)
      return products.map((product, idx) => {
        return (
          <Product value={product} key={idx} onBuy={item => this.addToCart(item)} />
        );
      })
    else return <ViewCart cart={cart} />
  }

  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="/">shopIT</a>
        </nav>
        <hr />
        <i className="fa fa-shopping-cart"></i>&nbsp;
        {cart.length} item(s) in cart
        |
        <a href="/#" onClick={e => this.toggleCart()}>{isCartOpen ? 'View Products' : 'View Cart'}</a>
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
