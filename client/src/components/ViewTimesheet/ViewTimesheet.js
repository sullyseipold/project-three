import React, { Component } from "react";
import { Table, Jumbotron } from "react-bootstrap";
import API from "../../utils/API";

class ViewTimesheet extends Component {

  // state = {
  //   activities: [],
  //   timesheet_id: ""
  // }


  // Auth0
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

  // componentDidMount() {

  //   this.getSavedTimesheets();

  // }



  render() {
    const { profile } = this.state;
    console.log(API);
    return (
      <div className="container">
        <h1> View Timesheet </h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              {profile.name}
              {/* based on pdf */}

              {/* blank but Day of week */}
              <th> </th>

              {/* same but Date */}
              <th> </th>

              {/* omitting Comp Used and Comp Earned */}
              <th>Reg Hours</th>
              <th>Overnight Hours</th>
              <th>Holiday Hours</th>
              <th>Overtime</th>
              <th>Sick</th>
              <th>Vacation</th>
              <th>Detail</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {/* Sunday */}
            <tr>
              <td>
                {/* Sequelize query -- SELECT DATENAME(dw,GETDATE()) --  */}
                Sunday
              </td>
            </tr>

            <tr>
              <td>Monday</td>
            </tr>

            <tr>
              <td>Tuesday</td>
            </tr>

            <tr>
              <td>Wednesday</td>
            </tr>

            <tr>
              <td>Thursday</td>
            </tr>

            <tr>
              <td>Frida</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ViewTimesheet;
