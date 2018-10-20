import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// core components
import { Table } from "reactstrap";
import TimeInput from "material-ui-time-picker";
import acStyle from "assets/jss/customStyle";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/smart-home-react/views/dashboardStyle.jsx";

import store from "../../redux/store/configureStore";
import {
  getAc,
  getAcStatus,
  turnOnAc,
  turnOffAc
} from "../../redux/actions/acActions";

import "react-dropdown/style.css";
import { Container, Col, Row} from 'reactstrap';

const styles = {
  cardColorTest: {
    backgroundColor: "rgba(255,255,255,.62)"
  }
};

const options = ["Bedroom", "Livingroom", "Kamar Pembantu"];

class AC extends React.Component {
  constructor(props) {
    super(props);
    // noinspection JSAnnotator
    this.state = {
      value: 0,
      // acStatus: 0,
      acStatus: true,
      power: "ON",
      temperatureNow: 0,
      ac: [],
      options: [],
      initOption: "12",
      index: "12",
      schedulerstatus: "toggle_off",
      hourFrom: "2018-01-01 12:00",
      hourTo: "2018-01-01 13:00"
    };
  }

  // What will happen before render
  componentWillMount() {
    const abc = store.store.dispatch(getAc());
    abc.getacPayload.then(res => {
      this.setState({
        ac: res.data.data,
        options: res.data.data,
        initOption: res.data.data[0].id,
        index: res.data.data[0].id,
        temperatureNow: res.data.data[0].temperature
      });
      console.log(res.data.data);
      console.log(this.state);
    });
  }

  showUI() {
    window.location = "/table";
  }

  // Turn AC ON/OFF
  // acStatus:
  // true = On
  // false = Off
  handleColor = () => {
    if (this.state.acStatus === true) {
      return "info";
    } else if (this.state.acStatus === false) {
      return "rose";
    }
  };

  turnAc = () => {
    console.log(this.state.index);
    if (this.state.acStatus === true) {
      const abc = store.store.dispatch(turnOffAc(this.state.index));
      abc.acOffPayload.then(res => {
        console.log(res);
        this.setState({
          acStatus: false,
          power: "Off"
        });
      });
    } else if (this.state.acStatus === false) {
      const abc = store.store.dispatch(turnOnAc(this.state.index));
      abc.acOnPayload.then(res => {
        console.log(res);
        this.setState({
          acStatus: true,
          power: "On"
        });
      });
    }
  };

  onChange = () => {
    const abc = store.store.dispatch(
      getAcStatus(document.getElementById("selectAc").value)
    );
    abc.getAcStatus.then(res => {
      this.setState({
        temperatureNow: res.data.data.temperature,
        index: res.data.data.id
      });
    });
    console.log(this.state.temperatureNow);
    console.log(this.state.index);
  };
  convertMonth(m) {
    if (m === "Oct") {
      return 10;
    } else if (m === "Jan") {
      return 1;
    } else if (m === "Feb") {
      return 2;
    } else if (m === "Mar") {
      return 3;
    } else if (m === "Apr") {
      return 4;
    } else if (m === "May") {
      return 5;
    } else if (m === "Jun") {
      return 6;
    } else if (m === "Jul") {
      return 7;
    } else if (m === "Aug") {
      return 8;
    } else if (m === "Sep") {
      return 9;
    } else if (m === "Nov") {
      return 11;
    } else if (m === "Dec") {
      return 12;
    } else {
      return -1;
    }
  }
  formatDate(s) {
    let stringDate = s.toString();
    let myArray = stringDate.split(" ");
    let month = this.convertMonth(myArray[1]);
    let answer = myArray[3] + "-" + month + "-" + myArray[2] + " " + myArray[4];
    console.log(answer);
    return answer;
  };

  // Scheduler
  handleTimeFrom(time) {
    console.log(time);
    let message = this.formatDate(time);
    this.setState({
      hourFrom: message
    });
  }
  handleTimeTo(time) {
    let message = this.formatDate(time);
    this.setState({
      hourTo: message
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} lg={12}>
            <div style={acStyle.cardStyle}>
              <div style={acStyle.divStyle}>
                {/* POWER BUTTON */}
                <button style={acStyle.powerButton}>
                  <Icon>power_settings_new</Icon>
                </button>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <h3>Select AC:</h3>
                  <select id="selectAc" onChange={this.onChange}>
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
                      <button style={acStyle.buttonStyle}>
                        <Icon>add</Icon>
                      </button>
                      <br />
                      <p style={acStyle.pStyle}>{this.state.temperatureNow} &#8451;</p>
                      <button style={acStyle.buttonStyle}>
                        <Icon>remove</Icon>
                      </button>
                    </div>
                    <hr />
                  </div>
                </GridItem>
                <GridItem xs={9} sm={6} md={12} lg={12}>
                  <div style={acStyle.divStyle}>
                    <div style={acStyle.tableStyle}>
                      <h3 align="center">Schedule</h3>
                      <Table
                        border="1px solid black"
                        style={{ width: "50%", margin: "auto" }}
                      >
                        <tbody>
                          <tr>
                            <th>
                              <h6>Hour From</h6>
                            </th>
                            <td>
                              <TimeInput
                                mode="12h"
                                onChange={time => this.handleTimeFrom(time)}
                              />
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <h6>Hour From</h6>
                            </th>
                            <td>
                              <TimeInput
                                mode="12h"
                                onChange={time => this.handleTimeTo(time)}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <p style={acStyle.pStyle}><button>Submit</button></p>
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

AC.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(AC);
