import React from 'react'

import AppNavbar from './AppNavbar'

// import {} from 'reactstrap'

export default class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AppNavbar />
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <p>Footer text</p>
            </React.Fragment>
        )
    }
}
