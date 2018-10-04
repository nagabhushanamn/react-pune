

import 'bootstrap/dist/css/bootstrap.css';


// step-1: define component class

// class Greeting extends React.Component {
//     render() {
//         let spanEle = React.createElement('span',
//             { className: 'badge badge-primary' },
//             this.props.message)
//         let divEle = React.createElement(
//             'div',
//             { className: 'alert alert-info' },
//             spanEle);
//         return divEle;
//     }
// }

// or using JSX

class Greeting extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                <span className="badge badge-primary">{this.props.message}</span>
            </div>
        );
    }
}

// step-2: instantiate & render on virtual DOM

// let greeting = React.createElement(Greeting, { message: 'Hello World' }, null);
// or
let greeting = <Greeting message="good evening" />
ReactDOM.render(greeting, document.getElementById('root'));