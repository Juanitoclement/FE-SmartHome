import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

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
                    <strong>Current Temperature:</strong>
                  </p>
                </GridItem>
              </GridContainer>
            </button>
          </GridItem>
          <GridItem xs={12} md={6}>
            <button style={tvGradient} onClick={this.redirectToTv}>
              <i className="fas fa-tv fa-4x" />
              <p>
                <strong>Television</strong>
              </p>
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
