import React, { Component } from 'react';
import classNames from 'classnames';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      products: [
        {
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canbuy: true,
          image: 'images/Laptop.png'
        },
        {
          name: 'Mobile',
          price: 18000,
          description: 'New pro',
          canbuy: true,
          image: 'images/Mobile.png'
        }
      ]
    };
  }

  changeTab(index) {
    this.setState({ tab: index });
  }

  renderBuyButton(product) {
    if (product.canbuy) return <button className="btn btn-sm btn-primary">buy</button>
    else return null;
  }
  renderTabPanel(product) {
    let { tab } = this.state;
    switch (tab) {
      case 1: return (<div>{product.description}</div>)
      case 2: return (<div>Not Yet</div>)
      case 3: return (<div>None Yet</div>)
      default: return null
    }
  }
  renderProducts() {
    let { products, tab } = this.state;
    return products.map((product, idx) => {
      return (
        <div className="list-group-item" key={idx}>
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
              <img src={product.image} className="img-fluid" alt={product.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-9">
              <span className="badge badge-dark">{idx + 1}</span>
              <h4>{product.name}</h4>
              <h5>&#8377;{product.price}</h5>
              {this.renderBuyButton(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={tab === 1 ? 'nav-link active' : 'nav-link'} href="#/" onClick={e => this.changeTab(1)}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: tab === 2 })} href="#/" onClick={e => this.changeTab(2)}>Specification</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link', { active: tab === 3 })} href="#/" onClick={e => this.changeTab(3)}>Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-primary">
          <a className="navbar-brand" href="/">shopIT</a>
        </nav>
        <hr />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
