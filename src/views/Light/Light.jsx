import React from "react";
import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import lightStyle from "assets/jss/customStyle";

import "react-dropdown/style.css";

import store from "../../redux/store/configureStore";
import {
  turnOnLamp,
  turnOffLamp,
  getLamp,
  getLampStatus,
  setTimer
} from "../../redux/actions/lightAction";

import { Table, Input } from "reactstrap";

const styles = {
  cardColorTest: {
    backgroundColor: "rgba(255,255,255,.62)"
  }
};

class Light extends React.Component {
  state = {
    lamp: [],
    options: [],
    name: "",
    power: "OFF",
    deviceID: "",
    hourFrom: "",
    hourTo: ""
  };

  componentWillMount() {
    const abc = store.store.dispatch(getLamp());
    abc.getLampPayload.then(res => {
      if (res.data.data.length == 0) {
        alert("You have no Lamp!");
        window.location.replace("/dashboard");
      } else {
        this.setState({
          lamp: res.data.data,
          options: res.data.data,
          name: res.data.data[0].name,
          power: res.data.data[0].status,
          deviceID: res.data.data[0].id,
          hourTo: "",
          hourFrom: ""
        });
        console.log(res.data.data);
        console.log(this.state);
      }
    });
  }

  // Scheduler (TIMER)
  convertMonth(m) {
    if (m === 1) {
      return "01";
    } else if (m === 2) {
      return "02";
    } else if (m === 3) {
      return "03";
    } else if (m === 4) {
      return "04";
    } else if (m === 5) {
      return "05";
    } else if (m === 6) {
      return "06";
    } else if (m === 7) {
      return "07";
    } else if (m === 8) {
      return "08";
    } else if (m === 9) {
      return "09";
    } else if (m === 10) {
      return "10";
    } else if (m === 11) {
      return "11";
    } else if (m === 12) {
      return "12";
    } else {
      return -1;
    }
  }

  handleFromTime = e => {
    let a = e.target.value;
    console.log(a);
    this.setState({
      hourFrom: a + ":00"
    });
  };

  handleToTime = e => {
    let a = e.target.value;
    console.log(a);
    this.setState({
      hourTo: a + ":00"
    });
  };

  validateTime() {
    let date = new Date();
    let dd = date.getDate();
    let mmRaw = date.getMonth();
    let mm = this.convertMonth(mmRaw);
    let yyyy = date.getFullYear();

    let fromTime = this.state.hourFrom;
    let toTime = this.state.hourTo;

    let currentFromTime = yyyy + "-" + mm + "-" + dd + " " + fromTime + ":00";
    let currentToTime = yyyy + "-" + mm + "-" + dd + " " + toTime + ":00";

    let timeFrom = Date.parse(currentFromTime);
    let timeTo = Date.parse(currentToTime);

    console.log(currentFromTime);
    console.log(currentToTime);
    console.log(this.state);

    if (timeFrom < timeTo) {
      const abc = store.store.dispatch(
        setTimer(this.state.deviceID, currentFromTime, currentToTime)
      );
      abc.setACTime.then(res => {
        console.log(res);
        alert("Schedule has been submitted");
      });
    } else {
      let newDD = dd + 1;
      currentToTime = yyyy + "-" + mm + "-" + newDD + " " + toTime + ":00";
      console.log(currentToTime);
      const abc = store.store.dispatch(
        setTimer(this.state.deviceID, currentFromTime, currentToTime)
      );
      abc.setACTime.then(res => {
        console.log(res);
        alert("Schedule has been submitted");
      });
    }
  }

  submitSchedule = () => {
    console.log(this.state.hourFrom);
    console.log(this.state.hourTo);
    if (this.state.hourTo === "" || this.state.hourFrom === "") {
      alert("Input the time first!");
    } else {
      this.validateTime();
    }
  };

  // Power
  handlePower = () => {
    if (this.state.power === "OFF") {
      const abc = store.store.dispatch(turnOnLamp(this.state.deviceID));
      abc.lampOnPayload.then(res => {
        console.log(res);
        // this.selectChange();
        const def = store.store.dispatch(getLampStatus(this.state.deviceID));
        def.getLampStatus.then(res => {
          console.log(res);
          this.setState({
            power: res.data.data.status
          });
          console.log(this.state);
        });
      });
    } else {
      const abc = store.store.dispatch(turnOffLamp(this.state.deviceID));
      abc.lampOffPayload.then(res => {
        console.log(res);
        // this.selectChange();
        const def = store.store.dispatch(getLampStatus(this.state.deviceID));
        def.getLampStatus.then(res => {
          console.log(res);
          this.setState({
            power: res.data.data.status
          });
          console.log(this.state);
        });
      });
    }
  };

  // Dropdown
  selectChange = () => {
    const abc = store.store.dispatch(
      getLampStatus(document.getElementById("selectLamp").value)
    );
    abc.getLampStatus.then(res => {
      console.log(res);
      this.setState({
        name: res.data.data.name,
        power: res.data.data.status,
        deviceID: res.data.data.id
      });
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} lg={12}>
            <div style={lightStyle.cardStyle}>
              <div style={lightStyle.divStyle}>
                {/* POWER BUTTON */}
                <button
                  style={lightStyle.powerButton}
                  onClick={this.handlePower}
                >
                  <Icon>power_settings_new</Icon>
                </button>
                <br />
                <h3>{this.state.power}</h3>
              </div>
              <GridItem xs={12} sm={6} md={3} lg={12}>
                <div style={lightStyle.divStyle}>
                  <hr />
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <h3>Select Lamp:</h3>
                    <select id="selectLamp" onChange={this.selectChange}>
                      {this.state.options.map(item => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </GridItem>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <div style={lightStyle.divStyle}>
                  <hr />
                  <div style={lightStyle.tableStyle}>
                    <h3 align="center">Schedule</h3>
                    <table style={lightStyle.myTable}>
                      <tr>
                        <th style={lightStyle.myRow}>
                          <h3>
                            <strong>From:</strong>
                          </h3>
                        </th>
                        <td style={lightStyle.myRow}>
                          <Input
                            type="time"
                            name="time"
                            id="exampleTime"
                            placeholder="time placeholder"
                            onChange={this.handleFromTime}
                            style={lightStyle.myTimer}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th style={lightStyle.myRow}>
                          <h3>
                            <strong>To:</strong>
                          </h3>
                        </th>
                        <td style={lightStyle.myRow}>
                          <Input
                            type="time"
                            name="time"
                            id="exampleTime"
                            placeholder="time placeholder"
                            onChange={this.handleToTime}
                            style={lightStyle.myTimer}
                          />
                        </td>
                      </tr>
                    </table>
                    <button
                      onClick={this.submitSchedule}
                      style={lightStyle.timerButton}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </GridItem>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default Light;
