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
import CardIconCustom from "components/Card/CardIconCustom.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
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

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const styles = {
  cardColorTest: {
    backgroundColor: "rgba(255,255,255,.62)"
  }
};

// const CustomTableHead = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     borderBottomColor: theme.palette.common.black
//   }
// }))(TableCell);

const CustomTableCell = withStyles(theme => ({
  body: {
    fontSize: 14,
    borderBottomColor: theme.palette.common.black
  }
}))(TableCell);

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
      initOption: "",
      index: "",
      schedulerstatus: "toggle_off",
      hourFrom: "12:00",
      hourTo: "13:00"
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
  // 0 = On
  // 1 = Off
  handleColor = int => {
    if (this.state.acStatus === 0) {
      return "info";
    } else {
      return "rose";
    }
  };

  turnAc = () => {
    console.log(this.state.index);
    // if (this.state.acStatus === 0) {
    //   const abc = store.store.dispatch(turnOnAc(this.state.index));
    //   abc.acOnPayload.then(res => {
    //     console.log(res);
    //   });
    //   this.setState({
    //     acStatus: 1,
    //     power: "Off"
    //   });
    //   console.log(this.state.acStatus);
    // } else {
    //   const abc = store.store.dispatch(turnOffAc(this.state.index));
    //   abc.acOffPayload.then(res => {
    //     console.log(res);
    //   });
    //   this.setState({
    //     acStatus: 0,
    //     power: "On"
    //   });
    //   console.log(this.state.acStatus)
    if (this.state.acStatus === true) {
      const abc = store.store.dispatch(turnOffAc(this.state.index));
      abc.acOffPayload.then(res => {console.log(res);});
      this.setState({
        acStatus: false,
        power: "Off"
      });
    } else if (this.state.acStatus === false) {
      const abc = store.store.dispatch(turnOnAc(this.state.index));
      abc.acOnPayload.then(res => {console.log(res);});
      this.setState({
        acStatus: true,
        power: "On"
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

  // Scheduler
  handleTimeFrom = event => {
    this.setState({
      hourFrom: event.target.value
    });
  };
  handleTimeTo = event => {
    this.setState({
      hourTo: event.target.value
    });
  };

  handleStatus = () => {
    if (this.state.schedulerstatus === "toggle_off") {
      this.setState({
        schedulerstatus: "toggle_on"
      });
    } else {
      this.setState({
        schedulerstatus: "toggle_off"
      });
    }
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
              <CardHeader color="info" stats topIcon>
                <CardIcon
                  onClick={this.turnAc}
                  color={this.handleColor(this.state.acStatus)}
                >
                  <Icon>power_settings_new</Icon>
                  <p>{this.state.power}</p>
                </CardIcon>
              </CardHeader>

              <CardBody>
                {/* Seperate The 2 card inside */}
                <GridContainer>
                  {/* Dropdown Menu */}
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <h3>Select AC:</h3>
                    <select id="selectAc" onChange={this.onChange}>
                      {this.state.options.map(item => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {/*<Dropdown*/}
                    {/*options={this.state.options.map(item => item.name)}*/}
                    {/*onChange={this.onChange.bind(this.item)}*/}
                    {/*value={this.state.initOption}*/}
                    {/*placeholder="TEsting123"*/}
                    {/*/>*/}
                  </GridItem>

                  {/* For Temperature Display */}
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <p align="center" style={{ fontSize: 40 }}>
                      {this.state.temperatureNow} &#8451;
                    </p>
                  </GridItem>
                  {/* Minus Temperature Button */}
                  <GridItem xs={6} sm={6} md={6} lg={6}>
                    <Card>
                      <CardHeader color="rose" stats icon>
                        <CardIcon color="warning">
                          <Icon>remove_circle</Icon>
                        </CardIcon>
                      </CardHeader>
                      <CardBody>
                        <CardIcon>
                          <button>Decrease Temperature</button>
                        </CardIcon>
                      </CardBody>
                    </Card>
                  </GridItem>

                  {/* Add Temperature button */}
                  <GridItem xs={6} sm={6} md={6} lg={6}>
                    <Card>
                      <CardHeader color="rose" stats icon>
                        <CardIcon color="success">
                          <Icon>add_circle</Icon>
                        </CardIcon>
                      </CardHeader>
                      <CardBody>
                        <CardIcon>
                          <button>Increase Temperature </button>
                        </CardIcon>
                      </CardBody>
                    </Card>
                  </GridItem>

                  {/* Scheduler Menu */}
                  <GridItem xs={9} sm={6} md={12} lg={12}>
                    <h3>Schedule</h3>
                    <Table border="1px">
                      <TableHead>
                        <TableRow>
                          <CustomTableCell>From</CustomTableCell>
                          <CustomTableCell>To</CustomTableCell>
                          <CustomTableCell>Button</CustomTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <CustomTableCell>
                            <input
                              type="time"
                              onChange={this.handleTimeFrom.bind(this)}
                              value={this.state.hourFrom}
                            />
                          </CustomTableCell>
                          <CustomTableCell>
                            <input
                              type="time"
                              onChange={this.handleTimeTo.bind(this)}
                              value={this.state.hourTo}
                            />
                          </CustomTableCell>
                          <CustomTableCell>
                            <CardIcon onClick={this.handleStatus}>
                              <Icon>{this.state.schedulerstatus}</Icon>
                            </CardIcon>
                          </CustomTableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
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

AC.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(AC);