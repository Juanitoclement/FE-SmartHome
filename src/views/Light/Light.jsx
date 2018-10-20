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
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default Light;
