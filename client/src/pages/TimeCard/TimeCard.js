import React from "react";
import moment from "moment";
import "rc-time-picker/assets/index.css";
import HourTypes from "../../components/HourTypes/HourTypes";
import InputMoment from "../../components/InputMoment/InputMoment";
import "./time-card.css";

import { Button } from 'react-bootstrap';


import API from '../../utils/API';
// import { start } from "repl";


function convertDate(date) {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
}

class TimeCard extends React.Component {
  state = {
    m: moment(),
    startTime: moment(),
    endTime: moment(),
    shiftType: "",
    editStartTime: true
  };



  handleChange = m => {
    // var myDate =  moment(m).format("YYYY-MM-DD HH:mm:ss");

    console.log(
      this.state.editStartTime,
      this.state.startTime,
      this.state.endTime,
      m
    );

    console.log("input time", m._d);

    var convertedTime = convertDate(m);
    console.log(convertedTime)

    // var activity = {
    //     startDateTime: "",

    // }

    // API.saveActivity

    if (this.state.editStartTime) {
      this.setState({ startTime: moment(m) });
    } else if (!this.state.editStartTime) {
      this.setState({ endTime: moment(m) });
    }
  };

  handleClick = () => {
    console.log(this.state.startTime, this.state.endTime);
    var startDateTime = convertDate(this.state.startTime);
    var endDateTime = convertDate(this.state.endTime);

    console.log(startDateTime, endDateTime);

    API.saveActivity({ startDateTime: startDateTime, endDateTime: endDateTime});

  };

  handleSave = () => {
    if (this.state.editStartTime) {
      this.setState({ editStartTime: false });
    } else {
      this.setState({ editStartTime: true });
    }
  };

  render() {
    return (
      <div className="app">
        <h1>Add a shift</h1>
        <div>
          <h1>Add Start Date and Time</h1>
          <form>
            <div className="input">
              <input
                type="text"
                value={this.state.startTime.format("llll")}
                readOnly
              />
            </div>
          </form>
        </div>

        <div>
          <h1>End Time</h1>
          <form>
            <div className="input">
              <input
                type="text"
                value={this.state.endTime.format("llll")}
                readOnly
              />
            </div>
          </form>
        </div>

        <HourTypes />

        {/* <EndShift onClick={this.endFocus} ref={this.endShift} value={this.state.m.format('llll')} readOnly /> */}

        <InputMoment
          moment={this.state.m}
          onChange={this.handleChange}
          minStep={5}
          onSave={this.handleSave}
          editStartTime={this.state.editStartTime}
        />

        <Button onClick={this.handleClick}
        >

        </Button>
      </div>
    );
  }
}

export default TimeCard;
