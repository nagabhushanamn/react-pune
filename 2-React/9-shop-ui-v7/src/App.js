import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { connect } from 'react-redux'


class App extends Component {
  renderProducts() {
    let { products } = this.props;
    return products.map((product, idx) => {
      return (
        <Product value={product} key={idx} onBuy={item => this.addToCart(item)} />
      );
    })
  }
  render() {
    let { cart } = this.props;
    return (
      <div className="container">
        <Router>
          <div>
            <nav className="navbar navbar-light bg-primary">
              <Link className="navbar-brand" to="/">shopIT</Link>
            </nav>
            <hr />
            <i className="fa fa-shopping-cart"></i>&nbsp;
            {cart.length} item(s) in cart
            <hr />
            <ul className="nav">
              <li className="nav-item"><Link className="nav-link" to="products">View products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="cart">View cart</Link></li>
            </ul>
            <hr />
            <Route exact={true} path={'/'} component={Home} />
            <Route path={'/products'} render={() => this.renderProducts()} />
            <Route path={'/cart'} render={() => <ViewCart cart={cart} />} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(App);
