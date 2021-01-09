// PACKAGES
import React, { Component } from 'react';
// MODULES
// STYLES
import './Modal.css';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.modalStyle = {
            "height" : this.props.height + "%",
            "width" : this.props.width + "%",
            "minHeight": "250px",
            "minWidth": "250px"
        }

    }

    render() {
        return (
            <div className="modal-wrapper">
                <div className="modal-mask">
                </div>
                <div className="modal-container" style={this.modalStyle}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}


export default Modal;
