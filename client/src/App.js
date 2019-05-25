import React, { Component } from "react";
import { Navbar, Button, Image } from "react-bootstrap";
import "./App.css";


// var apiUrl = "http://localhost:3001/api";

// function callAPI(endpoint, secured) {
//   var url = apiUrl + endpoint;
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   if (secured) {
//     xhr.setRequestHeader("Authoriation", "Bearer " + accessToken);
//   }
//   xhr.onload = function() {
//     if (xhr.status == 200) {
//       // update message
//       document.querySelector("#ping-view h2").innerHTML = JSON.parse(
//         xhr.responseText
//       ).message;
//     } else {
//       alert("Request failed: " + xhr.statusText);
//     }
//   };
// }

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar bg="dark" variant="dark" fluid>
          {" "}
          {/* <Navbar.Header> */}{" "}
          <Navbar.Brand>
            <Image
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
              src="https://png.pngtree.com/png_detail/20181017/flame-png-clipart_489949.png"
            />
            {"HotTime"}{" "}
          </Navbar.Brand>
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.goTo.bind(this, "home")}
          >
            Home{" "}
          </Button>{" "}
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.goTo.bind(this, "timecard")}
          >
            Time Card{" "}
          </Button>
          {!isAuthenticated() && (
            <Button
              id="qsLoginBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.login.bind(this)}
            >
              Log In{" "}
            </Button>
          )}{" "}
          {isAuthenticated() && (
            <Button
              id="qsLogoutBtn"
              bsStyle="primary"
              className="btn-margin"
              onClick={this.logout.bind(this)}
            >
              Log Out{" "}
            </Button>
          )}{" "}
          {/* </Navbar.Header> */}{" "}
        </Navbar>{" "}
      </div>
    );
  }
}

export default App;
