import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            reviews: [
                { stars: 1, author: 'who@email.com', body: 'sample-review1' },
                { stars: 5, author: 'who@email.com', body: 'sample-review2' }
            ]
        }
    }
    changeTab(index) {
        this.setState({ tab: index });
    }
    addNewReview(review) {
        let { reviews } = this.state;
        reviews = reviews.concat(review);
        this.setState({ reviews })
    }
    renderBuyButton(product) {
        let { onBuy, value: item } = this.props;
        if (product.canbuy) return <button onClick={e => onBuy(item)} className="btn btn-sm btn-primary">buy</button>
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
    }
    renderTabPanel(product) {
        let { tab } = this.state;
        switch (tab) {
            case 1: return (<div>{product.description}</div>)
            case 2: return (<div>Not Yet</div>)
            case 3: return (
                <div>
                    {this.renderReviews()}
                    <ReviewForm onNewReview={review => this.addNewReview(review)} />
                </div>
            )
            default: return null
        }
    }
    render() {
        let { value: product } = this.props;
        let { tab } = this.state;
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                        <img src={product.image} className="img-fluid" alt={product.name} />
                    </div>
                    <div className="col-9 col-sm-9 col-md-9 col-lg-9">
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
    }
}

Product.propTypes = {
    value: PropTypes.object.isRequired
};

export default Product;