import React, { Component } from 'react';
import C from './C';

import ValueContext from './ValueContext'

class B extends Component {
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <ValueContext.Consumer>
                        {
                            data => data.value
                        }
                    </ValueContext.Consumer>

                    <C />
                </div>
            </div>
        );
    }
}

export default B;