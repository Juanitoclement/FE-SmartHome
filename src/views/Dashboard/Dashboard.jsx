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
import LocalOffer from "@material-ui/icons/LocalOffer";
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
import { Route, Link } from "react-router-dom";

import { bugs, website, server } from "variables/general";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/smart-home-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0,
    tvStatus: 0,
    acStatus: 0,
    ligStatus: 0,
    powerTv: "OFF",
    powerLig: "OFF",
    powerAc: "OFF"
  };
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

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={6} sm={6} md={3}>
            <Card>
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
                <p className={classes.cardCategory} onClick={this.redirectToTv}>TV</p>
                <h3 className={classes.cardTitle} onClick={this.redirectToTv}>
                  {this.state.powerTv}  - <small>Bedroom</small>
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
          <GridItem xs={6} sm={6} md={3}>
            <Card>
              <CardHeader stats icon>
                <CardIcon
                  onClick={this.buttonLig}
                  color={this.handleColorLig(this.state.ligStatus)}
                >
                  <Icon>wb_incandescent</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Light Intensity</p>
                <h3 className={classes.cardTitle}>
                  {this.state.powerLig} - <small>Bedroom</small>
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
          <GridItem xs={6} sm={6} md={3}>
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
                  {this.state.powerAc} -24 C
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
          <GridItem xs={6} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>photo_camera</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Camera</p>
                <h3 className={classes.cardTitle}>Garage</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <LocalOffer />
                  Tracked from Github
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Room Temperature</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today avaerage temperature.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Bugs",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Website",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Server",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "2Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
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
