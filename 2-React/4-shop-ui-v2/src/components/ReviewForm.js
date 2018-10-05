import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            stars: 5,
            author: 'who@email.com',
            body: ''
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    handleSubmit(e) {
        e.preventDefault();
        let { stars, author, body } = this.state
        let newReview = {
            stars,
            author,
            body
        };
        let { onNewReview } = this.props;
        onNewReview(newReview);
        this.toggleForm();
    }
    handleChange(e) {
        let value = e.target.value;
        let field = e.target.id;
        this.setState({ [field]: value });
    }
    disableSubmitBtn() {
        let { stars } = this.state;
        if (stars < 3) return true
        else return false
    }
    renderForm() {
        let { isOpen, stars, author, body } = this.state;
        if (!isOpen) return <button className="btn btn-sm btn-dark" onClick={e => this.toggleForm()}><i className="fa fa-plus"></i></button>
        else return (
            <div className="card card-default">
                <div className="card-header">Review Form</div>
                <div className="card-body">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label>stars</label>
                            <select id="stars" className="form-control" onChange={e => this.handleChange(e)} value={stars}>
                                {[1, 2, 3, 4, 5].map((n, idx) => <option key={idx}>{n}</option>)}
                            </select>
                            {stars < 3 ? 'pls give 5 stars' : ''}
                        </div>
                        <div className="form-group">
                            <label>author</label>
                            <input id="author" className="form-control" onChange={e => this.handleChange(e)} value={author} />
                        </div>
                        <div className="form-group">
                            <label>body</label>
                            <textarea id="body" value={body} className="form-control" onChange={e => this.handleChange(e)}></textarea>
                        </div>
                        <button disabled={this.disableSubmitBtn()} className="btn btn-dark">submit</button>
                        <button type="button" className="btn btn-danger" onClick={e => this.toggleForm()}>cancel</button>
                    </form>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="row">
                <div className="col-8 col-sm-10 col-md-6">
                    {this.renderForm()}
                </div>
            </div>
        );
    }
}

export default ReviewForm;