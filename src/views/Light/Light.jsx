import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
<<<<<<< HEAD
import CardIconLig from "components/Card/CardIconLig.jsx"
import dashboardStyle from "assets/jss/smart-home-react/views/dashboardStyle.jsx";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const powerButton = {
  background: "#ed1a3d",
  border: "none",
  color: "#ffffff",
  padding: "50px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "25px",
  marginTop: "35px",
  cursor: "pointer",
  borderRadius: "100%",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)"
};

const cardStyle = {
  border: "0",
  marginBottom: "30px",
  marginTop: "30px",
  paddingBottom: "100px",
  borderRadius: "30%",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff",
  width: "100%",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minWidth: "0",
  wordWrap: "break-word",
  fontSize: ".875rem",
  textAlign: "center"
}

const divStyle = {
  textAlign: "center"
}
=======
import CardIconLig from "components/Card/CardIconLig.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/smart-home-react/views/dashboardStyle.jsx";
import lightStyle from "assets/jss/customStyle";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import store from "../../redux/store/configureStore";
import {
  turnOnLamp,
  turnOffLamp,
  getLamp,
  getLampStatus
} from "../../redux/actions/lightAction";
import TV from "../TV/TV";
import { getTvStatus, turnOffTv, turnOnTv } from "../../redux/actions/tvAction";
>>>>>>> d76dee286b2c7212d19b362867232e7ba2839fb7

const options = ["Bedroom", "Livingroom", "Kamar Pembantu"];

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
    deviceID: ""
  };

<<<<<<< HEAD
  componentWillMount () {




=======
  componentWillMount() {
    const abc = store.store.dispatch(getLamp());
    abc.getLampPayload.then(res => {
      this.setState({
        lamp: res.data.data,
        options: res.data.data,
        name: res.data.data[0].name,
        power: res.data.data[0].status,
        deviceID: res.data.data[0].id
      });
      console.log(res.data.data);
      console.log(this.state);
    });
>>>>>>> d76dee286b2c7212d19b362867232e7ba2839fb7
  }

  // Power
  handlePower = () => {
    if (this.state.power === "OFF") {
      const abc = store.store.dispatch(turnOnLamp(this.state.deviceID));
      abc.lampOnPayload.then(res => console.log(res));
    } else {
      const abc = store.store.dispatch(turnOffLamp(this.state.deviceID));
      abc.lampOffPayload.then(res => console.log(res));
    }
  }

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

  // Timer
  handleTimer = () => {
    this.setState({
      h: this.state.number,
      m: 0,
      s: 0
    });
  };


  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} lg={12}>
<<<<<<< HEAD
            <div style={cardStyle}>
              <div style={divStyle}>
                {/* POWER BUTTON */}
                <button style={powerButton} onClick={this.button}>
                  <Icon>power_settings_new</Icon>
                </button>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <h3>Select TV:</h3>
            <select id="selectTv" onChange={this.selectChange}>
              {this.state.options.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
=======
            <div style={lightStyle.cardStyle}>
              <div style={lightStyle.divStyle}>
                {/* POWER BUTTON */}
                <button style={lightStyle.powerButton} onClick={this.handlePower}>
                  <Icon>power_settings_new</Icon>
                </button>
                <br />
                <h3>{this.state.power}</h3>
              </div>
              <GridItem xs={12} sm={6} md={3} lg={12}>
                <div style={lightStyle.divStyle}>
                  <hr/>
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
            </div>
>>>>>>> d76dee286b2c7212d19b362867232e7ba2839fb7
          </GridItem>
        </GridContainer>

        {/*OLD*/}
        {/*<GridContainer>*/}
        {/*/!*Power Off button*!/*/}
        {/*<GridItem xs={12} sm={6} md={3} lg={12}>*/}
        {/*<Card>*/}
        {/*/!* Power Off / Main Card *!/*/}
        {/*<CardHeader color="info" stats icon>*/}
        {/*<CardIconLig*/}
        {/*onClick={this.button}*/}
        {/*color={this.handleColor(this.state.acstatus)}*/}
        {/*>*/}
        {/*<Icon>power_settings_new</Icon>*/}
        {/*<p>{this.state.power}</p>*/}
        {/*</CardIconLig>*/}
        {/*</CardHeader>*/}

        {/*<CardBody>*/}
        {/*<GridContainer>*/}

        {/*<GridItem xs={12} sm={12} md={12} lg={12}>*/}
        {/*<h3>Select Light:</h3>*/}
        {/*<Dropdown*/}
        {/*options={options}*/}
        {/*onChange={this.onSelect}*/}
        {/*value={options[0]}*/}
        {/*placeholder="TEsting123"*/}
        {/*/>*/}
        {/*</GridItem>*/}

        {/*/!* Timer Menu *!/*/}
        {/*<GridItem xs={12} sm={12} md={12} lg={12}>*/}
        {/*<h3>Timer</h3>*/}
        {/*<form>*/}
        {/*<input*/}
        {/*name="number"*/}
        {/*type="number"*/}
        {/*placeholder="Time in hours"*/}
        {/*onChange={event => this.handleInput(event)}*/}
        {/*/>*/}
        {/*/!*<p>{this.state.number}</p>*!/*/}
        {/*<button type="button" onClick={this.handleTimer}>*/}
        {/*Submit*/}
        {/*</button>*/}
        {/*<br />*/}
        {/*h: {this.state.h} m: {this.state.m} s:{" "}*/}
        {/*{this.state.s}*/}
        {/*</form>*/}
        {/*</GridItem>*/}
        {/*</GridContainer>*/}
        {/*</CardBody>*/}
        {/*</Card>*/}
        {/*</GridItem>*/}
        {/*</GridContainer>*/}
      </div>
    );
  }
}
<<<<<<< HEAD
Light.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Light);
=======

export default Light;
>>>>>>> d76dee286b2c7212d19b362867232e7ba2839fb7
