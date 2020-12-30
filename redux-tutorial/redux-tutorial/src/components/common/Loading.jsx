// PACKAGES
import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
// MODULES
// STYLES

class Loading extends Component {

    render() {
        return (
            <div className="d-flex h-100 w-100 align-items-center justify-content-center" >
                <Spinner animation="border" role="status">
                    <span className="sr-only" animation="grow">Loading...</span>
                </Spinner>
            </div>
        );
    }
}

export default Loading;
