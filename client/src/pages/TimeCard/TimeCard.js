import React, { Component } from 'react';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
import HourTypes from '../../components/HourTypes/HourTypes';
import InputMoment from '../../components/InputMoment/InputMoment'
import './time-card.css';



class TimeCard extends Component {
    state = {
        m: moment(),
        startTime: moment(),
        endTime: moment(),
        shiftType: "",
        editStartTime: true

    };

    // componentDidMount = () => {
    //   // this.endShift.currenta
    // }


    handleChange = (m) => {


        console.log(this.state.editStartTime, this.state.startTime, this.state.endTime, m)

        if (this.state.editStartTime) {
            this.setState({ startTime: moment(m) })
        } else if (!this.state.editStartTime) {
            this.setState({ endTime: moment(m) })
        }


    };

    handleSave = () => {
        if (this.state.editStartTime) {
            this.setState({ editStartTime: false })
        } else {
            this.setState({ editStartTime: true })
        }
    };



    render() {
        return (
            <div className="app">
                <h1>
                    Input your time
            </h1>
                <div>
                    <h1>
                        Start time
            </h1>
                    <form>
                        <div className="input">
                            <input type="text" value={this.state.startTime.format('llll')} readOnly />
                        </div>
                    </form>
                </div>


                <div>
                    <h1>
                        End Time
            </h1>
                    <form>
                        <div className="input">
                            <input type="text" value={this.state.endTime.format('llll')} readOnly />
                        </div>
                    </form>
                </div>

                <HourTypes></HourTypes>



                {/* <EndShift onClick={this.endFocus} ref={this.endShift} value={this.state.m.format('llll')} readOnly /> */}

                <InputMoment
                    moment={this.state.m}
                    onChange={this.handleChange}
                    minStep={5}
                    onSave={this.handleSave}
                    editttarttime={this.state.editstarttime}
                />
            </div >
        );
    }
}

export default TimeCard;
