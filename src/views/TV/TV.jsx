import React from "react";

import Icon from "@material-ui/core/Icon";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardIconCustom from "components/Card/CardIconCustom.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Dropdown from "react-dropdown";

import store from "../../redux/store/configureStore";
import {
  getTv,
  getTvStatus,
  turnOnTv,
  turnOffTv,
  upChannel,
  downChannel,
  upVolume,
  downVolume
} from "../../redux/actions/tvAction";

const powerButton = {
  background: "#4CAF50",
  border: "none",
  color: "#ffffff",
  padding: "50px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "25px",
  marginTop: "4px",
  marginLeft: "2px",
  cursor: "pointer",
  borderRadius: "100%",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)"
}

const buttonStyle = {
  background: "#4CAF50",
  border: "none",
  color: "#ffffff",
  padding: "25px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "25px",
  marginTop: "4px",
  marginLeft: "2px",
  cursor: "pointer",
  borderRadius: "100%",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)"
}

class TV extends React.Component {
  state = {
    name: "",
    tvStatus: 0,
    power: "OFF",
    channel: 0,
    volume: 0,
    muted: false,
    tv: [],
    options: [],
    deviceID: "",
  };

  // What will happen before render
  componentWillMount() {
    const abc = store.store.dispatch(getTv());
    abc.getTvPayload.then(res => {
      this.setState({
        tv: res.data.data,
        options: res.data.data,
        name: res.data.data[0].name,
        deviceID: res.data.data[0].id,
        power: res.data.data[0].status,
        channel: res.data.data[0].channelNumber,
        volume: res.data.data[0].volume,
        muted: res.data.data[0].muted
      });
      console.log(res.data.data);
      console.log(this.state);
    });
  }

  // ON&OFF
  button = () => {
    if (this.state.tvStatus === 0) {
      this.setState({
        tvStatus: 1,
        power: "ON"
      });
    } else {
      this.setState({
        tvStatus: 0,
        power: "OFF"
      });
    }
  };

  handleColor = int => {
    if (this.state.power === 0) {
      return "info";
    } else {
      return "rose";
    }
  };

  // Channels
  upProgram = () => {
    const abc = store.store.dispatch(upChannel(this.state.deviceID));
    abc.upChannelPayload.then(res => console.log(res));
  };

  downProgram = () => {
    const abc = store.store.dispatch(downChannel(this.state.deviceID));
    abc.downChannelPayload.then(res => console.log(res));
  };

  upVolume = () => {
    const abc = store.store.dispatch(upVolume(this.state.deviceID));
    abc.upVolumePayload.then(res => console.log(res));
  };

  downVolume = () => {
    const abc = store.store.dispatch(downVolume(this.state.deviceID));
    abc.downVolumePayload.then(res => console.log(res));
  };

  // Dropdown
  selectChange = () => {
    const abc = store.store.dispatch(
      getTvStatus(document.getElementById("selectTv").value)
    );
    abc.getTvStatus.then(res => {
      console.log(res);
      this.setState({
        tv: res.data.data,
        deviceID: res.data.data.id,
        power: res.data.data.status,
        channel: res.data.data.channelNumber,
        volume: res.data.data.volume,
        muted: res.data.data.muted
      });
    });
    console.log(this.state);
  };

  //rendering process down here
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} lg={12}>
            <Card>
              <CardHeader color="rose" stats icon>
                <CardIconCustom
                  onClick={this.button}
                  color={this.handleColor(this.state.tvStatus)}
                >
                  <Icon>power_settings_new</Icon>
                </CardIconCustom>
                <button style={powerButton}><Icon>power_settings_new</Icon></button>
                <button style={buttonStyle}><Icon>power_settings_new</Icon></button>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  {/*Select TV*/}
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <h3>Select TV:</h3>
                    <select id="selectTv" onChange={this.selectChange}>
                      {this.state.options.map(item => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {/*<Dropdown*/}
                    {/*options={room}*/}
                    {/*onChange={this._onSelect}*/}
                    {/*value={room[0]}*/}
                    {/*placeholder="Choose a room..."*/}
                    {/*/>*/}
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6} lg={6}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon onClick={this.upProgram} color="warning">
                          <Icon>keyboard_arrow_up</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                  <GridItem xs={6} sm={6} md={6} lg={6}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon onClick={this.upVolume} color="warning">
                          <Icon>add_circle</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                  <GridItem xs={4} sm={6} md={3} lg={4} />
                  <GridItem xs={4} sm={6} md={3} lg={4} height={"2px"}>
                    <p>Channel</p>
                    <br />
                    <p>{this.state.channel}</p>
                  </GridItem>
                  <GridItem xs={4} sm={6} md={3} lg={4} height={"2px"}>
                    <p>Volume</p>
                    <br />
                    <p>{this.state.volume}</p>
                  </GridItem>
                  <GridItem xs={4} sm={6} md={3} lg={4} />
                  <GridItem xs={4} sm={6} md={3} lg={4}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon onClick={this.downProgram} color="warning">
                          <Icon>keyboard_arrow_down</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                  <GridItem xs={4} sm={6} md={3} lg={4}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon onClick={this.downVolume} color="warning">
                          <Icon>remove_circle</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
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

export default TV;
