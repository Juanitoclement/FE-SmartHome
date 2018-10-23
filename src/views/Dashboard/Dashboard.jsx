import React from "react";
import Icon from "@material-ui/core/Icon";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import store from "../../redux/store/configureStore";

import { getTv } from "../../redux/actions/tvAction";
import { getAc } from "../../redux/actions/acActions";
import { getLamp } from "../../redux/actions/lightAction";
import { getCurrentData } from "../../redux/actions/environmentalAction";

import dashboardStyle from "assets/jss/customStyle";
const acGradient = {
  width: "100%",
  color: "#ffffff",
  paddingTop: "10%",
  paddingBottom: "10%",
  marginBottom: "10%",
  textAlign: "center",
  fontSize: "20px",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)",
  borderRadius: "3%",
  backgroundImage: "linear-gradient(-90deg, #FF0000,#FF007F)"
};
const tvGradient = {
  width: "100%",
  color: "#ffffff",
  paddingTop: "10%",
  paddingBottom: "10%",
  marginBottom: "10%",
  textAlign: "center",
  fontSize: "20px",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)",
  borderRadius: "3%",
  backgroundImage: "linear-gradient(-90deg, #FF0000,#FF007F)"
};
const lightGradient = {
  width: "100%",
  color: "#ffffff",
  paddingTop: "10%",
  paddingBottom: "10%",
  marginBottom: "10%",
  textAlign: "center",
  fontSize: "20px",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)",
  borderRadius: "3%",
  backgroundImage: "linear-gradient(-90deg, #FF0000,#FF007F)"
};
const environmentGradient = {
  width: "100%",
  color: "#ffffff",
  paddingTop: "10%",
  paddingBottom: "10%",
  marginBottom: "10%",
  textAlign: "center",
  fontSize: "20px",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)",
  borderRadius: "3%",
  backgroundImage: "linear-gradient(-90deg, #FF0000,#FF007F)"
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acTemperature: 0,
      acDeviceID: "",
      acPower: "ON",
      tvDeviceID: "",
      tvPower: "ON",
      lightDeviceID: "",
      lightPower: "ON",
      currentTemperature: 0,
      currentHumidity: 0
    };
  }

  componentWillMount() {
    // AC dashboard
    const ac = store.store.dispatch(getAc());
    ac.getAcPayload.then(res => {
      if (res.data.data.length == 0) {
        this.setState({
          acPower: "You have no AC",
          acTemperature: 0,
          acDeviceID: ""
        });
      } else {
        this.setState({
          acDeviceID: res.data.data[0].id,
          acTemperature: res.data.data[0].temperature,
          acPower: res.data.data[0].status
        });
      }
      console.log(this.state.acPower);
      console.log(this.state.acDeviceID);
    });

    //  TV dashboard
    const tv = store.store.dispatch(getTv());
    tv.getTvPayload.then(res => {
      if (res.data.data.length == 0) {
        this.setState({
          tvPower: "You have no TV",
          tvDeviceID: ""
        });
      } else {
        this.setState({
          tvDeviceID: res.data.data[0].id,
          tvPower: res.data.data[0].status
        });
      }
      console.log(this.state.tvPower);
      console.log(this.state.tvDeviceID);
    });

    // Light dashboard
    const light = store.store.dispatch(getLamp());
    light.getLampPayload.then(res => {
      if (res.data.data.length == 0) {
        this.setState({
          lightPower: "You have no Lamp",
          lightDeviceID: ""
        });
      } else {
        this.setState({
          lightPower: res.data.data[0].status,
          lightDeviceID: res.data.data[0].id
        });
      }
      console.log(this.state.lightPower);
      console.log(this.state.lightDeviceID);
    });

    // Environment dashboard
    const environment = store.store.dispatch(getCurrentData());
    environment.getCurrentPayload.then(res => {
      console.log(res);
      if (res.data.data.length == 0) {
        this.setState({
          currentTemperature: 0,
          currentHumidity: 0
        });
      } else {
        this.setState({
          currentTemperature: res.data.data[0],
          currentHumidity: res.data.data[1]
        });
        console.log(this.state.currentTemperature);
        console.log(this.state.currentHumidity);
      }
    });
  }

  // Redirect Dashboard
  redirectToTv = () => {
    this.props.history.push("tv");
  };

  redirectToAc = () => {
    this.props.history.push("ac");
  };

  redirectToLight = () => {
    this.props.history.push("light");
  };

  redirectToEnvironment = () => {
    this.props.history.push("environmental");
  };
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} md={6}>
            <button style={acGradient} onClick={this.redirectToAc}>
              <GridContainer>
                <GridItem xs={6} md={6}>
                  <i className="fas fa-wind fa-4x" />
                  <p>
                    <strong>Air Conditioner</strong>
                  </p>
                </GridItem>
                <GridItem xs={6} md={6}>
                  <p>
                    <strong>{this.state.acTemperature} &#8451;</strong>
                  </p>
                  <p>
                    <strong>{this.state.acPower}</strong>
                  </p>
                </GridItem>
              </GridContainer>
            </button>
          </GridItem>
          <GridItem xs={12} md={6}>
            <button style={tvGradient} onClick={this.redirectToTv}>
              <GridContainer>
                <GridItem xs={6} md={6}>
                  <i className="fas fa-tv fa-4x" />
                  <p>
                    <strong>Television</strong>
                  </p>
                </GridItem>
                <GridItem xs={6} md={6}>
                  <p>
                    <strong>Status:</strong>
                  </p>
                  <p>
                    <strong>{this.state.tvPower}</strong>
                  </p>
                </GridItem>
              </GridContainer>
            </button>
          </GridItem>
          <GridItem xs={12} md={6}>
            <button style={lightGradient} onClick={this.redirectToLight}>
              <GridContainer>
                <GridItem xs={6} md={6}>
                  <i className="fas fa-lightbulb fa-4x" />
                  <p>
                    <strong>Light</strong>
                  </p>
                </GridItem>
                <GridItem xs={6} md={6}>
                  <p>
                    <strong>Status:</strong>
                  </p>
                  <p>
                    <strong>{this.state.lightPower}</strong>
                  </p>
                </GridItem>
              </GridContainer>
            </button>
          </GridItem>
          <GridItem xs={12} md={6}>
            <button
              style={environmentGradient}
              onClick={this.redirectToEnvironment}
            >
              <GridContainer>
                <GridItem xs={6} md={6}>
                  <i className="fas fa-mountain fa-4x" />
                  <p>
                    <strong>Environment</strong>
                  </p>
                </GridItem>
                <GridItem xs={6} md={6}>
                  <p>
                    <strong>
                      Temperature: {this.state.currentTemperature}
                    </strong>
                  </p>
                  <p>
                    <strong>Humidity: {this.state.currentHumidity}</strong>
                  </p>
                </GridItem>
              </GridContainer>
            </button>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default Dashboard;
