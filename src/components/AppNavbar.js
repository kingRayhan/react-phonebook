import React from 'react'

import { Link } from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'

export default class Example extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return (
            <div>
                <Navbar color="danger" dark expand="md">
                    <NavbarBrand href="/">Contact Manager</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/add">
                                    New Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/bookmarks">
                                    Bookmarks
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
