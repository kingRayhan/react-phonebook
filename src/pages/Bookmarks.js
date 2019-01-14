import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { removeFromBookmark } from '../store/actions/removeFromBookmark'
class BookMarks extends Component {
    render() {
        return (
            <Layout>
                <h1>Bookmarks</h1>
                <h3>Total bookmarks: {this.props.bookmarks.length}</h3>

                {this.props.bookmarks.map(contact => (
                    <Card className="my-3" key={contact.id}>
                        <CardHeader>{contact.name}</CardHeader>
                        <CardBody>
                            <p>Name: {contact.name}</p>
                            <p>Email: {contact.email}</p>
                            <p>Phone: {contact.phone}</p>
                        </CardBody>
                        <CardFooter>
                            <Button
                                color="secondary"
                                onClick={() =>
                                    this.props.addToBookMark(contact)
                                }
                            >
                                <i className="fa fa-heart" />
                            </Button>
                            <Button
                                color="danger"
                                className="ml-2"
                                onClick={() =>
                                    window.confirm('Sure to delete?') &&
                                    this.props.removeFromBookmark(contact.id)
                                }
                            >
                                <i className="fa fa-times" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </Layout>
        )
    }
}

export default connect(
    state => ({ ...state }),
    { removeFromBookmark }
)(BookMarks)
