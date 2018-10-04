
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {

    constructor(props) {
        super();
        // this.state = {
        //     now: null
        // };
        console.log('Greeting::constructor()');
    }
    render() {
        console.log('Greeting::render()');
        let { message } = this.props;
        //let { now } = this.state;
        let now = new Date().toLocaleTimeString();
        //throw new Error('oops from greeting comp');
        return (
            <div className="alert alert-info">
                {message}
                <hr />
                {now}
            </div>
        );
    }
    componentDidMount() {
        console.log('Greeting::componentDidMount()');
        this.interval = setInterval(() => {
            //this.setState({ now: new Date().toLocaleTimeString() });
            this.forceUpdate();
        }, 500)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting::shouldComponentUpdate()');
        if (this.props.message === nextProps.message) return false
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Greeting::componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('Greeting::componentWillUnmount()');
        clearInterval(this.interval);
    }


}

Greeting.propTypes = {
    message: PropTypes.string
};

Greeting.defaultProps = {
    message: 'greetings'
};


Greeting.displayName = 'oops'

export default Greeting;

