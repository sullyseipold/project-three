import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import InputMoment from "../components/DatePicker"
import moment from 'moment';

class Books extends Component {
  state = {
    m: moment()
  };

  componentDidMount() {
    // this.loadBooks();
  };

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = m => {
    this.setState({
      m
    });
  };

  handleSave = event => {
    event.preventDefault();
    console.log('saved', this.state.m.format('llll'));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>

            <form>
              <InputMoment
                moment={this.state.m}
                onChange={this.handleChange}
                minStep={15}
                onSave={this.handleSave}
              />
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>

            (
                <h3>No Results to Display</h3>
            )
          </Col>
        </Row>
      </Container>
    )
  }
}




// export default Books;
