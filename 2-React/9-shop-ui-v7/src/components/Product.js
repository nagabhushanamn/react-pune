import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';

import { submitNewReview, loadReviews } from '../actions/reviews';
import { buy } from '../actions/cart'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
        }
    }
    changeTab(index) {
        this.setState({ tab: index }, function () {
            let { value: product, actions } = this.props;
            actions.loadReviews(product.id);
        });
    }
    addNewReview(review) {
        let { value: product, actions } = this.props;
        actions.submitNewReview(product.id, review);
    }
    handleBuy() {
        let { value: product, actions } = this.props;
        actions.buy(product);
    }
    renderBuyButton(product) {
        let { value: item } = this.props;
        if (true) return <button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>
        else return null;
    }
    renderReviews() {
        let { reviews } = this.props;
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

function mapStateToProps(state, props) {
    console.log("id" + props.value.id);
    return {
        reviews: state.reviews[props.value.id] || []
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ loadReviews, submitNewReview, buy }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);