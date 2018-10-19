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
import dashboardStyle from "assets/jss/smart-home-react/views/dashboardStyle.jsx";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const powerButton = {
  background: "#ed1a3d",
  border: "none",
  color: "#ffffff",
  padding: "50px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "25px",
  marginTop: "35px",
  cursor: "pointer",
  borderRadius: "100%",
  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.5)"
};

const cardStyle = {
  border: "0",
  marginBottom: "30px",
  marginTop: "30px",
  paddingBottom: "100px",
  borderRadius: "30%",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff",
  width: "100%",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minWidth: "0",
  wordWrap: "break-word",
  fontSize: ".875rem",
  textAlign: "center"
}

const divStyle = {
  textAlign: "center"
}

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

  componentWillMount () {




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
          <GridItem xs={12} sm={6} md={3} lg={12}>
            <div style={cardStyle}>
              <div style={divStyle}>
                {/* POWER BUTTON */}
                <button style={powerButton} onClick={this.button}>
                  <Icon>power_settings_new</Icon>
                </button>
              </div>
            </div>
          </GridItem>
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
        </GridContainer>
      </div>
    );
  }
}
Light.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Light);