import React from "react";

import Icon from "@material-ui/core/Icon";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
<<<<<<< HEAD
=======
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardIconCustom from "components/Card/CardIconCustom.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Dropdown from "react-dropdown";
import tvStyle from "assets/jss/smart-home-react/tvStyle";
>>>>>>> 4652c55f729341d8ffa0ff2db070b9d6e1c317ea

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

// const cardStyle = {
//   border: "0",
//   marginBottom: "30px",
//   marginTop: "30px",
//   paddingBottom: "100px",
//   borderRadius: "30%",
//   color: "rgba(0, 0, 0, 0.87)",
//   background: "#fff",
//   width: "100%",
//   boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
//   position: "relative",
//   display: "flex",
//   flexDirection: "column",
//   minWidth: "0",
//   wordWrap: "break-word",
//   fontSize: ".875rem",
//   textAlign: "center"
// }
//
// const powerButton = {
//   background: "#ed1a3d",
//   border: "none",
//   color: "#ffffff",
//   padding: "50px",
//   textAlign: "center",
//   textDecoration: "none",
//   display: "inline-block",
//   fontSize: "25px",
//   marginTop: "35px",
//   cursor: "pointer",
//   borderRadius: "100%",
//   boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)"
// };
//
// const buttonStyle = {
//   background: "#ffffff",
//   border: "none",
//   color: "#000000",
//   padding: "25px",
//   textAlign: "center",
//   textDecoration: "none",
//   display: "inline-block",
//   fontSize: "20px",
//   marginTop: "10px",
//   marginLeft: "2px",
//   cursor: "pointer",
//   borderRadius: "100%",
//   boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)"
// };
//
// const backStyle = {
//   background: "#000000",
//   border: "none",
//   color: "#ffffff",
//   padding: "20px",
//   textAlign: "center",
//   textDecoration: "none",
//   display: "inline-block",
//   fontSize: "10px",
//   margin: "auto",
//   cursor: "pointer",
//   borderRadius: "50%",
//   boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)"
// }
//
// const pStyle = {
//   fontSize: "24px"
// }
//
// const divStyle = {
//   textAlign: "center"
// }

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
    if (this.state.power === "ON") {
      const abc = store.store.dispatch(turnOnTv(this.state.deviceID));
      abc.tvOnPayload.then(res => console.log(res));
    } else {
      const abc = store.store.dispatch(turnOffTv(this.state.deviceID));
      abc.tvOffPayload.then(res => console.log(res));
    }
  }

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
                {/* TV CHANNEL */}
                <GridItem xs={6} sm={6} md={6} lg={6}>
                  <div style={tvStyle.divStyle}>
                    <div style={tvStyle.backStyle}>
                      <button style={tvStyle.buttonStyle} onClick={this.upProgram}>
                        <Icon>add</Icon>
                      </button>
                      <p style={tvStyle.pStyle}>Channel</p>
                      <br />
                      <p style={tvStyle.pStyle}>{this.state.channel}</p>
                      <button style={tvStyle.buttonStyle} onClick={this.downProgram}>
                        <Icon>remove</Icon>
                      </button>
                    </div>
                  </div>
                </GridItem>
                {/* TV VOLUME */}
                <GridItem xs={6} sm={6} md={6} lg={6}>
                  <div style={tvStyle.divStyle}>
                    <div style={tvStyle.backStyle}>
                      <button style={tvStyle.buttonStyle} onClick={this.upVolume}>
                        <Icon>volume_up</Icon>
                      </button>
                      <p style={tvStyle.pStyle}>Volume</p>
                      <br />
                      <p style={tvStyle.pStyle}>{this.state.volume}</p>
                      <button style={tvStyle.buttonStyle} onClick={this.downVolume}>
                        <Icon>volume_down</Icon>
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
