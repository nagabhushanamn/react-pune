import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import Greeting from './Greeting';
import PropTypes from 'prop-types';
import Box from './Box';
import Product from './Product';
import A from './A';
import ValueContext from './ValueContext'
import B from './B';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'good evening'
    };

    //this.changeMessage=this.changeMessage.bind(this);

    console.log('App::constructor()');
  }

  changeMessage(message) {
    this.setState({ message });
  }

  renderGreetingBtns() {
    let arr = [{ GM: 'good morning' }, { GN: 'good noon' }, { GE: 'good evening' }];
    return arr.map((obj, idx) => <button key={idx} className="btn btn-secondary" onClick={e => this.changeMessage(obj[Object.keys(obj)[0]])}>{Object.keys(obj)[0]}</button>)
  }
  renderGreeting() {
    let { message } = this.state;
    if (message)
      return <Greeting message={message} />
    else
      return null;
  }

  render() {
    console.log('App::render()');
    //let title=this.props.title;
    //or
    let { title } = this.props; // de-structuring
    let data = { value: 500.00 }
    return (
      <div className="container">
        <hr />
        <h1>{title}</h1>
        <hr />
        {
          /* 
          <button className="btn btn-secondary" onClick={this.changeMessage.bind(this, 'good morning')}>GM</button>
          <button className="btn btn-secondary" onClick={this.changeMessage.bind(this, 'good noon')}>GN</button>
          <button className="btn btn-secondary" onClick={e=>this.changeMessage('good evening')}>GE</button> 
          */
        }
        {
          /* 
          <button className="btn btn-secondary" onClick={this.changeMessage('good morning')}>GM</button>
          <button className="btn btn-secondary" onClick={this.changeMessage('good noon')}>GN</button>
          <button className="btn btn-secondary" onClick={e=>this.changeMessage('good evening')}>GE</button> 
          */
        }
        {
          //  [{GE:'good morning'},{GN:'good noon'},{GE:'good evening'}]
          //  .map((obj,idx)=><button key={idx} className="btn btn-secondary" onClick={e=>this.changeMessage(obj[Object.keys(obj)[0]])}>{Object.keys(obj)[0]}</button> )
        }

        {
          this.renderGreetingBtns()
        }
        <button className="btn btn-danger" onClick={e => this.changeMessage('')}>Remove</button>

        <hr />
        {
          this.renderGreeting()
        }

        <A />

        <ValueContext.Provider value={data}>
          <B />
        </ValueContext.Provider>

        <Box>
          <Product />
          <Product />
          <Product />
        </Box>

        <Box>
          <li>list-1</li>
          <li>list-2</li>
        </Box>

      </div>
    );
  }

  componentDidMount() {
    console.log('App::componentDidMount()');
    //n/w call
    // setTimeout(() => {
    //   let response = "greetings from server-side";
    //   this.setState({ message: response })
    // }, 3000);
  }

  componentDidCatch(error, info) {
    console.log('App::componentDidCatch');
    // Display fallback UI
    this.setState({ message: '' });
  }

}

App.propTypes = {
  title: PropTypes.string
};
App.defaultProps = {
  title: 'react-api'
}

export default App;
