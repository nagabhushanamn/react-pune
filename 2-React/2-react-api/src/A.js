import React, { Component } from 'react';
import B from './B';

import ValueContext from './ValueContext'

class A extends Component {
    render() {
        let data = { value: 1000.00 }
        return (
            <div className="card card-default">
                <div className="card-body">
                    <ValueContext.Provider value={data}>
                        <B />
                    </ValueContext.Provider>
                </div>
            </div>
        );
    }
}

export default A;