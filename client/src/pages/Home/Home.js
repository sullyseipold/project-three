import React, { Component } from "react";
// import TimePicker from "rc-time-picker";
// import moment from "moment";
// import "rc-time-picker/assets/index.css";

import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
// import API from "../../utils/API";
// import { Profile } from "../../components/Profile/Profile";

const showSecond = false;
const str = showSecond ? "HH:mm:ss" : "HH:mm";

class Home extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.getProfiles();
  }

  getProfiles = () => {
    console.log(this.props.auth);
    // API.getUser()
    //   .then(res =>
    //     this.setState({
    //       user: res.data
    //     })
    //   )
    //   .catch(err => console.log(err));
  };

  // function onChange(value) {
  //   console.log(value && value.format(str));
  // }

  changeValue = value => {
    console.log(value && value.format(str));
  };

  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    // var firstName = "profile.given_name";
    // var lastName = "profile.family_name";
    // var email = "kellydavis@gmail.com";
    // var memberNumber = "22";

    // console.log(email);

    // API.saveUser({ firstName: firstName, lastName: lastName, email:email, memberNumber:memberNumber });

    return (
      <div className="container">
        {" "}
        {isAuthenticated() && (
          <div>
            <Button variant="info">
              <Link to="profile">View Profile</Link>
            </Button>
            <Button variant="info">
              <Link to="timecard">Add Shift</Link>
            </Button>
            <Button variant="info">
              <Link to="calendar">View Calendar</Link>
            </Button>

            {/* <TimePicker
              style={{
                width: 100
              }}
              showSecond={showSecond}
              defaultValue={moment("00")}
              className="xxx"
              onChange={this.changeValue}
            />{" "} */}
          </div>
        )}{" "}
        {!isAuthenticated() && (
          <h4>
            You are not logged in !Please{" "}
            <a
              href={"#"}
              style={{
                cursor: "pointer"
              }}
              onClick={this.login.bind(this)}
            >
              Log In{" "}
            </a>{" "}
            to continue.{" "}
          </h4>
        )}{" "}
      </div>
    );
  }
}

export default Home;
