import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import AccountCircle from "@material-ui/icons/AccountCircle";
import withStyles from "@material-ui/core/styles/withStyles";

import dashboardStyle from "assets/jss/smart-home-react/views/dashboardStyle.jsx";

const cardStyle = {
  border: "0",
  marginBottom: "30px",
  marginTop: "30px",
  paddingBottom: "100px",
  paddingTop: "100px",
  paddingLeft: "-100px",
  paddingRight: "-100px",
  borderRadius: "6px",
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
};

class Login extends React.Component {
  handleSubmit() {
    alert("Logging you in");
  }
  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div style={cardStyle}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <form onSubmit={this.handleSubmit}>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <TextField id="input-with-icon-grid" label="Username" />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <TextField id="input-with-icon-grid" label="Password" />
                </GridItem>
                <br />
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <Button variant="contained" type="submit">
                    Login
                  </Button>
                </GridItem>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}
export default withStyles(dashboardStyle)(Login);
