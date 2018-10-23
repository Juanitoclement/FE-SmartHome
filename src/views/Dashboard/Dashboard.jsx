import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import store from "../../redux/store/configureStore";

import { getTv } from "../../redux/actions/tvAction";
import { getAc } from "../../redux/actions/acActions";
import { getLamp } from "../../redux/actions/lightAction";

import { askForPermissioToReceiveNotifications } from "../../firebase/push-notification";

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
      tvDeviceID: "",
      tvPower: "ON",
      lightDeviceID: "",
      lightPower: "ON"
    };
  }

  componentWillMount() {
    // AC dashboard
    const ac = store.store.dispatch(getAc());
    ac.getAcPayload.then(res => {
      if (res.data.data.length == 0) {
        this.setState({
          acTemperature: 0,
          acDeviceID: ""
        });
      } else {
        this.setState({
          acTemperature: res.data.data[0].temperature,
          acDeviceID: res.data.data[0].id
        });
      }
    });

    //  TV dashboard
    const tv = store.store.dispatch(getTv());
    tv.getTvPayload.then(res => {
      if (res.data.data.length == 0) {
        this.setState({
          acPower: "You have no TV",
          tvDeviceID: ""
        });
      } else {
        this.setState({
          tvDeviceID: res.data.data[0].id,
          acPower: res.data.data[0].status
        });
      }
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
    });
  }

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
          <button onClick={askForPermissioToReceiveNotifications}>
            Clique aqui para receber notificações
          </button>
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
                    <strong>Current Temperature:</strong>
                  </p>
                  <p>
                    <strong>{this.state.acTemperature} &#8451;</strong>
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
                <GridItem xs={6} md={6} />
              </GridContainer>
            </button>
          </GridItem>
          <GridItem xs={12} md={6}>
            <button style={lightGradient} onClick={this.redirectToLight}>
              <i className="fas fa-lightbulb fa-4x" />
              <p>
                <strong>Light</strong>
              </p>
            </button>
          </GridItem>
          <GridItem xs={12} md={6}>
            <button
              style={environmentGradient}
              onClick={this.redirectToEnvironment}
            >
              <i className="fas fa-mountain fa-4x" />
              <p>
                <strong>Environment</strong>
              </p>
            </button>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default Dashboard;
