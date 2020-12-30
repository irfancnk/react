// PACKAGES
import React, { Component } from 'react';
import { Button, Spinner } from 'react-bootstrap';
// MODULES
// STYLES

class PrimaryButton extends Component {

    constructor(props) {
        super(props);
        const { isLoading, ...rest } = props;
        this.rest = rest;
        this.buttonStyle = {
            backgroundColor: "var(--c-border)",
            border: "1px solid var(--c-light-theme)",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold"
        };
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Button style={this.buttonStyle} {...this.rest} disabled>
                    <Spinner animation='border' size='sm' />
                </Button>
            );
        }
        return (
            <Button style={this.buttonStyle} {...this.rest}>
                {this.props.children}
            </Button>
        );
    }
}

export default PrimaryButton;
