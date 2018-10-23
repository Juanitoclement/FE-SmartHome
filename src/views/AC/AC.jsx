import React from "react";
// @material-ui/core
import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// core components
import { Input } from "reactstrap";
import acStyle from "assets/jss/customStyle";

import store from "../../redux/store/configureStore";
import {
  getAc,
  getAcStatus,
  turnOnAc,
  turnOffAc,
  setTimer,
  setAcTemperature
} from "../../redux/actions/acActions";

import "react-dropdown/style.css";

class AC extends React.Component {
  constructor(props) {
    super(props);
    // noinspection JSAnnotator
    this.state = {
      power: "ON",
      temperatureNow: 0,
      ac: [],
      options: [],
      index: "0",
      schedulerstatus: "toggle_off",
      hourFrom: "2018-01-01 12:00",
      hourTo: "2018-01-01 13:00"
    };
  }

  // What will happen before render
  componentWillMount() {
    const abc = store.store.dispatch(getAc());
    abc.getAcPayload.then(res => {
      if (res.data.data.length == 0) {
        alert("You have no AC!");
        window.location.replace("/dashboard");
      } else {
        this.setState({
          ac: res.data.data,
          options: res.data.data,
          power: res.data.data[0].status,
          index: res.data.data[0].id,
          temperatureNow: res.data.data[0].temperature
        });
        console.log(res.data.data);
        console.log(this.state);
      }
    });
  }

  turnAc = () => {
    console.log("Matiin");
    console.log(this.state.index);
    if (this.state.power === "ON") {
      const abc = store.store.dispatch(turnOffAc(this.state.index));
      abc.acOffPayload.then(res => {
        console.log(res);
        // this.selectChange();
        const def = store.store.dispatch(getAcStatus(this.state.index));
        def.getAcStatus.then(res => {
          this.setState({
            power: res.data.data.status
          });
          console.log(res.data.data);
          console.log(this.state);
        });
      });
    } else if (this.state.power === "OFF") {
      console.log("Nyalain");
      const abc = store.store.dispatch(turnOnAc(this.state.index));
      abc.acOnPayload.then(res => {
        console.log(res);
        // this.selectChange();
        const def = store.store.dispatch(getAcStatus(this.state.index));
        def.getAcStatus.then(res => {
          this.setState({
            power: res.data.data.status
          });
          console.log(this.state);
        });
      });
    }
  };

  temperatureUp = () => {
    if (this.state.temperatureNow + 1 < 31) {
      const abc = store.store.dispatch(
        setAcTemperature(this.state.index, this.state.temperatureNow + 1)
      );
      abc.setTemperaturePayload.then(res => {
        console.log(res);
        const def = store.store.dispatch(getAcStatus(this.state.index));
        def.getAcStatus.then(res => {
          this.setState({
            temperatureNow: res.data.data.temperature
          });
        });
      });
    } else {
      alert("Temperature is too HIGH!");
    }
  };

  temperatureDown = () => {
    if (this.state.temperatureNow - 1 > 15) {
      const abc = store.store.dispatch(
        setAcTemperature(this.state.index, this.state.temperatureNow - 1)
      );
      abc.setTemperaturePayload.then(res => {
        console.log(res);
        const def = store.store.dispatch(getAcStatus(this.state.index));
        def.getAcStatus.then(res => {
          this.setState({
            temperatureNow: res.data.data.temperature
          });
        });
      });
    } else {
      alert("Temperature is too LOW!");
    }
  };

  selectChange = () => {
    const abc = store.store.dispatch(
      getAcStatus(document.getElementById("selectAc").value)
    );
    abc.getAcStatus.then(res => {
      this.setState({
        power: res.data.data.status,
        temperatureNow: res.data.data.temperature,
        index: res.data.data.id
      });
      console.log(document.getElementById("selectAc").value);
      console.log("Ganti", this.state);
    });
  };

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

  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} lg={12}>
            <div style={acStyle.cardStyle}>
              <div style={acStyle.divStyle}>
                {/* POWER BUTTON */}
                <button style={acStyle.powerButton} onClick={this.turnAc}>
                  <Icon>power_settings_new</Icon>
                </button>
                <h3>{this.state.power}</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <h3>Select AC:</h3>
                  <select id="selectAc" onChange={this.selectChange}>
                    {this.state.options.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <div style={acStyle.divStyle}>
                    <hr />
                    <div style={acStyle.backStyle}>
                      <button
                        style={acStyle.buttonStyle}
                        onClick={this.temperatureUp}
                      >
                        <Icon>add</Icon>
                      </button>
                      <br />
                      <p style={acStyle.pStyle}>
                        {this.state.temperatureNow} &#8451;
                      </p>
                      <button
                        style={acStyle.buttonStyle}
                        onClick={this.temperatureDown}
                      >
                        <Icon>remove</Icon>
                      </button>
                    </div>
                    <hr />
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <div style={acStyle.divStyle}>
                    <div style={acStyle.tableStyle}>
                      <h3 align="center">Schedule</h3>
                      <table style={acStyle.myTable}>
                        <tr>
                          <th style={acStyle.myRow}>
                            <h3>
                              <strong>From:</strong>
                            </h3>
                          </th>
                          <td style={acStyle.myRow}>
                            <Input
                              type="time"
                              name="time"
                              id="exampleTime"
                              placeholder="time placeholder"
                              onChange={this.handleFromTime}
                              style={acStyle.myTimer}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th style={acStyle.myRow}>
                            <h3>
                              <strong>To:</strong>
                            </h3>
                          </th>
                          <td style={acStyle.myRow}>
                            <Input
                              type="time"
                              name="time"
                              id="exampleTime"
                              placeholder="time placeholder"
                              onChange={this.handleToTime}
                              style={acStyle.myTimer}
                            />
                          </td>
                        </tr>
                      </table>
                      <button
                        onClick={this.submitSchedule}
                        style={acStyle.timerButton}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default AC;
