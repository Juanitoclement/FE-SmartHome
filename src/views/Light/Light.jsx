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
import CardIconLig from "components/Card/CardIconLig.jsx"

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/smart-home-react/views/dashboardStyle.jsx";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = ["Bedroom", "Livingroom", "Kamar Pembantu"];

const styles = {
  cardColorTest: {
    backgroundColor: "rgba(255,255,255,.62)"
  }
};

class Light extends React.Component {
  state = {
    value: 0,
    acstatus: 0
  };

  showUI() {
    window.location = "/table";
  }

  handleColor = int => {
    if (this.state.acstatus === 0) {
      return "info";
    } else {
      return "rose";
    }
  };

  button = () => {
    if (this.state.acstatus === 0) {
      this.setState({
        acstatus: 1
      });
    } else {
      this.setState({
        acstatus: 0
      });
    }
  };

  handleTimer = () => {
    this.setState({
      h: this.state.number,
      m: 0,
      s: 0
    });
  }
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          {/*Power Off button*/}
          <GridItem xs={12} sm={6} md={3} lg={12}>
            <Card>
              {/* Power Off / Main Card */}
              <CardHeader color="info" stats icon>
                <CardIconLig
                  onClick={this.button}
                  color={this.handleColor(this.state.acstatus)}
                >
                  <Icon>power_settings_new</Icon>
                  <p>{this.state.power}</p>
                </CardIconLig>
              </CardHeader>

              <CardBody>
                <GridContainer>


                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <h3>Select Light:</h3>
                    <Dropdown
                      options={options}
                      onChange={this.onSelect}
                      value={options[0]}
                      placeholder="TEsting123"
                    />
                  </GridItem>

                  {/* Timer Menu */}
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <h3>Timer</h3>
                    <form>
                      <input
                        name="number"
                        type="number"
                        placeholder="Time in hours"
                        onChange={event => this.handleInput(event)}
                      />
                      {/*<p>{this.state.number}</p>*/}
                      <button type="button" onClick={this.handleTimer}>
                        Submit
                      </button>
                      <br />
                      h: {this.state.h} m: {this.state.m} s:{" "}
                      {this.state.s}
                    </form>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Light.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Light);
