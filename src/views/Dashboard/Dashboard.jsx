import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";
import Button from "components/CustomButtons/Button.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import dashboardStyle from "assets/jss/smart-home-react/views/dashboardStyle.jsx";

import AddAlert from "@material-ui/icons/AddAlert";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      tvStatus: 0,
      acStatus: 0,
      ligStatus: 0,
      powerTv: "OFF",
      powerLig: "OFF",
      powerAc: "OFF",
      items: 0,
      items2: [],
      messages: [],
      tr: false
    };
  }
  componentWillUnmount() {
    this.clearAlertTimeout();
  }
  clearAlertTimeout() {
    if (this.alertTimeout !== null) {
      clearTimeout(this.alertTimeout);
    }
  }
  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    this.clearAlertTimeout();
    this.alertTimeout = setTimeout(
      function() {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      3000
    );
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  handleColorTv = () => {
    if (this.state.tvStatus === 0) {
      return "info";
    } else if (this.state.tvStatus === 1) {
      return "rose";
    }
  };

  handleColorLig = () => {
    if (this.state.ligStatus === 0) {
      return "info";
    } else if (this.state.ligStatus === 1) {
      return "success";
    }
  };
  handleColorAc = () => {
    if (this.state.acStatus === 0) {
      return "info";
    } else if (this.state.acStatus === 1) {
      return "warning";
    }
  };

  buttonTv = () => {
    if (this.state.tvStatus === 0) {
      this.setState({
        tvStatus: 1,
        powerTv: "ON"
      });
    } else if (this.state.tvStatus === 1) {
      this.setState({
        tvStatus: 0,
        powerTv: "OFF"
      });
    }
  };

  buttonAc = () => {
    if (this.state.acStatus === 0) {
      this.setState({
        acStatus: 1,
        powerAc: "ON"
      });
    } else if (this.state.acStatus === 1) {
      this.setState({
        acStatus: 0,
        powerAc: "OFF"
      });
    }
  };

  buttonLig = () => {
    if (this.state.ligStatus === 0) {
      this.setState({
        ligStatus: 1,
        powerLig: "ON"
      });
    } else if (this.state.ligStatus === 1) {
      this.setState({
        ligStatus: 0,
        powerLig: "OFF"
      });
    }
  };

  redirectToTv = () => {
    this.props.history.push("tv");
  };

  redirectToAc = () => {
    this.props.history.push("ac");
  };

  redirectToLig = () => {
    this.props.history.push("light");
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={6} sm={6} md={4}>
            <Card>
              {/*<button onClick={askForPermissionToReceiveNotifications}>*/}
              {/*anc*/}
              {/*</button>*/}
              <CardHeader
                color={this.handleColorTv(this.state.tvStatus)}
                stats
                icon
              >
                <CardIcon
                  onClick={this.buttonTv}
                  color={this.handleColorTv(this.state.tvStatus)}
                >
                  <Icon>tv</Icon>
                </CardIcon>
                <p className={classes.cardCategory} onClick={this.redirectToTv}>
                  TV
                </p>
                <h3 className={classes.cardTitle} onClick={this.redirectToTv}>
                  {this.state.powerTv} - <small>Bedroom</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  On for 5hrs
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <Card>
              <CardHeader stats icon>
                <CardIcon
                  onClick={this.buttonLig}
                  color={this.handleColorLig(this.state.ligStatus)}
                >
                  <Icon>wb_incandescent</Icon>
                </CardIcon>
                <p
                  className={classes.cardCategory}
                  onClick={this.redirectToLig}
                >
                  Light Intensity
                </p>
                <h3 className={classes.cardTitle} onClick={this.redirectToLig}>
                  {this.state.powerLig} - <small>{this.state.items}</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Get more space
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={6} sm={6} md={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon
                  onClick={this.buttonAc}
                  color={this.handleColorAc(this.state.acStatus)}
                >
                  <Icon>ac_unit</Icon>
                </CardIcon>
                <p className={classes.cardCategory} onClick={this.redirectToAc}>
                  Air Conditioner
                </p>
                <h3 className={classes.cardTitle} onClick={this.redirectToAc}>
                  {this.state.powerAc} - abc
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
