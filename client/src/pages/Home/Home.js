import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import { Link } from 'react-router-dom';


const showSecond = false;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';
const defaulTime = '00:00';

class Home extends Component {

  // function onChange(value) {
  //   console.log(value && value.format(str));
  // }

  changeValue = value => {
    console.log(value && value.format(str));
  }

  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <div>
              <h4>
              You are logged in! You can now view your{' '}
              <Link to="profile">profile area</Link>
                .
              </h4>
                <TimePicker
                  style={{ width: 100 }}
                  showSecond={showSecond}
                  defaultValue={moment('00')}
                  className="xxx"
                  onChange={this.changeValue}
                />
            </div>
          )
        }
        {
          !isAuthenticated() && (
            <h4>
              You are not logged in! Please{' '}
              <a href={"#"} style={{ cursor: 'pointer' }}
                onClick={this.login.bind(this)}>
                Log In
                </a>
              {' '}to continue.
              </h4>

          )
        }
      </div>
    );
  }
}

export default Home;
