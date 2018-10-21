import React from "react";

import Icon from "@material-ui/core/Icon";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import tvStyle from "assets/jss/customStyle";

import store from "../../redux/store/configureStore";
import {
  getTv,
  getTvStatus,
  turnOnTv,
  turnOffTv,
  upChannel,
  downChannel,
  upVolume,
  downVolume,
  muteVolume
} from "../../redux/actions/tvAction";

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
    deviceID: ""
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
  handlePower = () => {
    if (this.state.power === "OFF") {
      const abc = store.store.dispatch(turnOnTv(this.state.deviceID));
      abc.tvOnPayload.then(res => {
        console.log(res);
        // this.selectChange();
        const def = store.store.dispatch(getTvStatus(this.state.deviceID));
        def.getTvStatus.then(res => {
          console.log(res);
          this.setState({
            power: res.data.data.status
          });
          console.log(this.state);
        });
      });
    } else {
      const abc = store.store.dispatch(turnOffTv(this.state.deviceID));
      abc.tvOffPayload.then(res => {
        console.log(res);
        // this.selectChange();
        const def = store.store.dispatch(getTvStatus(this.state.deviceID));
        def.getTvStatus.then(res => {
          console.log(res);
          this.setState({
            power: res.data.data.status
          });
          console.log(this.state);
        });
      });
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

  muteVolume = () => {
    const abc = store.store.dispatch(muteVolume(this.state.deviceID));
    abc.muteVolumePayload.then(res => console.log(res));
  };

  // Dropdown
  selectChange = () => {
    const abc = store.store.dispatch(
      getTvStatus(document.getElementById("selectTv").value)
    );
    abc.getTvStatus.then(res => {
      console.log(res);
      this.setState({
        name: res.data.data.name,
        deviceID: res.data.data.id,
        power: res.data.data.status,
        channel: res.data.data.channelNumber,
        volume: res.data.data.volume,
        muted: res.data.data.muted
      });
      console.log(this.state);
    });
  };

  //rendering process down here
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} lg={12}>
            <div style={tvStyle.cardStyle}>
              <div style={tvStyle.divStyle}>
                {/* POWER BUTTON */}
                <button style={tvStyle.powerButton} onClick={this.button}>
                  <Icon>power_settings_new</Icon>
                </button>
                <br />
                <h3>{this.state.power}</h3>
              </div>
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
                </GridItem>
                {/* AC Temperature */}
                <GridItem xs={6} sm={6} md={6} lg={6}>
                  <div style={tvStyle.divStyle}>
                    <div style={tvStyle.backStyle}>
                      <button
                        style={tvStyle.buttonStyle}
                        onClick={this.upProgram}
                      >
                        <Icon>add</Icon>
                      </button>
                      <p style={tvStyle.pStyle}>Channel</p>
                      <br />
                      <button
                        style={tvStyle.buttonStyle}
                        onClick={this.downProgram}
                      >
                        <Icon>remove</Icon>
                      </button>
                    </div>
                  </div>
                </GridItem>
                {/* TV VOLUME */}
                <GridItem xs={6} sm={6} md={6} lg={6}>
                  <div style={tvStyle.divStyle}>
                    <div style={tvStyle.backStyle}>
                      <button
                        style={tvStyle.buttonStyle}
                        onClick={this.upVolume}
                      >
                        <Icon>volume_up</Icon>
                      </button>
                      <p style={tvStyle.pStyle}>Volume</p>
                      <br />
                      <button
                        style={tvStyle.buttonStyle}
                        onClick={this.downVolume}
                      >
                        <Icon>volume_down</Icon>
                      </button>
                    </div>
                  </div>
                </GridItem>
                {/* Mute Button */}
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <div style={tvStyle.divStyle}>
                    <div style={tvStyle.backStyle}>
                      <button
                        style={tvStyle.buttonStyle}
                        onClick={this.muteVolume}
                      >
                        <Icon>volume_off</Icon>
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

export default TV;
