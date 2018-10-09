import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { testingApi } from "../../redux/actions/actions";
import store from "../../redux/store/configureStore";

const cardStyle = {
  border: "0",
  marginBottom: "30px",
  marginTop: "30px",
  paddingBottom: "100px",
  // paddingTop: "100px",
  // paddingLeft: "-100px",
  // paddingRight: "-100px",
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

const cardHeader = {
  border: "0",
  marginBottom: "50px",
  paddingBottom: "50px",
  paddingTop: "50px",
  // paddingLeft: "-100px",
  // paddingRight: "-100px",
  borderRadius: "6px",
  color: "#ffffff",
  background: "#3F51B5",
  width: "100%",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minWidth: "0",
  wordWrap: "break-word",
  fontSize: "50px",
  textAlign: "center"
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit() {
    alert("Logging you in");
    console.log(this.state.username);
    console.log(this.state.password);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <div style={cardStyle}>
          <div style={cardHeader}>
            Welcome!!!
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <form onSubmit={this.handleSubmit}>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <TextField name="username" id="input-with-icon-grid" label="Username" onChange={this.handleInput}/>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <TextField name="password" type="password" id="input-with-icon-grid" label="Password" onChange={this.handleInput}/>
                </GridItem>
                <br />
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <Button size="large" color="primary" variant="contained" type="submit">
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
export default Login;
