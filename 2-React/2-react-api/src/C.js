import React, { Component } from 'react';
import ValueContext from './ValueContext'
class C extends Component {
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <ValueContext.Consumer>
                        {
                            data => data.value
                        }
                    </ValueContext.Consumer>
                </div>
            </div>
        );
    }
}

export default C;