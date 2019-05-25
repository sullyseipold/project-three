import cx from "classnames";
import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import Calendar from "../Calendar/Calendar";
import Time from "../Time/Time";
import "./input-moment.css";

export default class InputMoment extends Component {
  static defaultProps = {
    prevMonthIcon: "ion-ios-arrow-left",
    nextMonthIcon: "ion-ios-arrow-right",
    minStep: 1,
    hourStep: 1
  };

  state = {
    tab: 0
  };

  handleClickTab = (e, tab) => {
    e.preventDefault();
    this.setState({ tab: tab });
  };

  handleClick = e => {
      console.log(this.props);
  }

  handleSave = e => {
    e.preventDefault();
    if (this.props.onSave) this.props.onSave();
    console.log(this.props);
  };

  render() {
    const { tab } = this.state;

    const {
      moment: m,
      className,
      prevMonthIcon,
      nextMonthIcon,
      minStep,
      hourStep,
      onSave,
      ...props
    } = this.props;
    const cls = cx("m-input-moment", className);

    return (
      <div className={cls} {...props}>
        <Jumbotron>
          <div className="options">
            <Button
              type="button"
              className={cx("ion-calendar im-btn", { "is-active": tab === 0 })}
              onClick={e => this.handleClickTab(e, 0)}
            >
              Date
            </Button>
            <Button
              type="button"
              className={cx("ion-clock im-btn", { "is-active": tab === 1 })}
              onClick={e => this.handleClickTab(e, 1)}
            >
              Time
            </Button>
          </div>

          <div className="tabs">
            <Calendar
              className={cx("tab", { "is-active": tab === 0 })}
              moment={m}
              onChange={this.props.onChange}
              prevMonthIcon={this.props.prevMonthIcon}
              nextMonthIcon={this.props.nextMonthIcon}
            />
            <Time
              className={cx("tab", { "is-active": tab === 1 })}
              moment={m}
              minStep={this.props.minStep}
              hourStep={this.props.hourStep}
              onChange={this.props.onChange}
            />
          </div>

          {/* {this.props.onSave ? ( */}
            <Button
              type="button"
              className="im-btn btn-save ion-checkmark"
              onClick={this.handleSave}
            >
            {this.props.editStartTime ? "Edit End Time" : "Edit Start Time"}

            </Button>

            <Button
            onClick={this.handleClick}>Save</Button>
          {/* ) : null} */}
        </Jumbotron>
      </div>
    );
  }
}
