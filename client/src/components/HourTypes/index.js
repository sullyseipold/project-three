import React, { Component } from "react";
import {
    InputGroupAddon,
    InputGroup,
    Input,
    Button,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
} from 'reactstrap'

class HourTypes extends Component{

state = {
 hourtypeName: "Hour type",
 length: 0,
 typeList: []
}

setHourType () {
    this.setState({hourtypeName: this.selectValue()})
};
    render() {
        return (

            <InputGroup>
                    <UncontrolledButtonDropdown addonType="prepend">
                      <Button outline>{this.state.hourtypeName}</Button>
                      <DropdownToggle split outline />
                      <DropdownMenu>
                        <DropdownItem header>Shift Type</DropdownItem>
                        <DropdownItem onClick={this.setHourType} value = "Regular Hours">Regular Hours</DropdownItem>
                        <DropdownItem>Overnight Duty</DropdownItem>
                        <DropdownItem>Detail</DropdownItem>
                        <DropdownItem>OT</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header>Other</DropdownItem>
                        <DropdownItem>Sick Hours Used </DropdownItem>
                        <DropdownItem>Comp Hours Earned</DropdownItem>
                        <DropdownItem>Holiday Hours</DropdownItem>
                        <DropdownItem>Vacation Hours Used</DropdownItem>
                        <DropdownItem>Comp Hours Used</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <Input placeholder="hours.." />
                    <InputGroupAddon addonType="append"><Button color="secondary">Add</Button></InputGroupAddon>
                    </InputGroup>
        )
    }
    }
    

export default HourTypes;