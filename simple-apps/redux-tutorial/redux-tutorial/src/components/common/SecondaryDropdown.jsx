// PACKAGES
import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
// MODULES
// STYLES

class SecondaryDropdown extends Component {

    constructor(props) {
        super(props);
        this.dropdownStyle = {
            backgroundColor: "var(--c-light-theme)",
            border: "1px solid var(--c-border)",
            cursor: "pointer",
            color: "var(--c-border)",
            fontWeight: "bold"
        };
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle style={this.dropdownStyle} id="dropdown-basic">
                    {this.props.children}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        Notification
                        <Badge className="mx-2" variant="secondary">3</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default SecondaryDropdown;
