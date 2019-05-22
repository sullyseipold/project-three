import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon, ButtonToolbar, Button } from 'react-bootstrap';
import './Profile.css';

import { Link } from 'react-router-dom';


class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">

        <ButtonToolbar>

        <Button variant="primary">
          <Link to="addshift">Add Shift</Link>
        </Button>

        <Button variant="primary">
          <Link to="viewtimesheet">View Timesheet</Link>
        </Button>

        </ButtonToolbar>
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
