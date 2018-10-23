import React from "react";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import store from "../../redux/store/configureStore";
import { doLogin, doVerify, doLogout } from "../../redux/actions/authAction";

import Modal from "react-responsive-modal";

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
      email: "",
      password: "",
      code: "",
      open: false,
      open2: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    const abc = store.store.dispatch(doLogin(data));
    abc.loginPayload.then(test => {
      if (test === "SUCCESS") {
        // var person = prompt("Please Insert TOken");
        // this.setState({
        //   code: person
        // });
        // this.verifyLogin();
        this.onOpenModal2(data);
        // window.location.href = "/dashboard";
      } else {
        this.onOpenModal();
      }
    });
  }

  verifyLogin(c) {
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.code);
    let data = {
      email: this.state.email,
      password: this.state.password,
      code: c
    };
    console.log(data);
    const abc = store.store.dispatch(doVerify(data));
    abc.verifyPayload.then(res => {
      console.log(res);
      window.location.reload();
    });
  }

  handleCodeChange = (e) => {
    this.setState({
      code: e.target.value
    });
  }

  handleLogout() {
    const abc = store.store.dispatch(doLogout());
    console.log(abc);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onOpenModal2 = (d) => {
    console.log(d.email);
    this.setState({
      open2: true,
      // email: d.email,
      // password: d.password,
      // code: ""
    });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  onCloseModal2 = () => {
    var code = document.getElementById("code").value;
    this.setState({ open2: false });
    this.verifyLogin(code);
  };

  render() {
    return (
      <div>
        <div style={cardStyle}>
          <div style={cardHeader}>Welcome!!!</div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <form onSubmit={this.handleSubmit}>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    name="email"
                    id="1 input-with-icon-grid"
                    label="Email"
                    onChange={this.handleInput}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    name="password"
                    type="password"
                    id="2 input-with-icon-grid"
                    label="Password"
                    onChange={this.handleInput}
                  />
                </GridItem>
                <br />
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    type="submit"
                  >
                    Login
                  </Button>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    type="button"
                    onClick={this.handleLogout}
                  >
                    Logout
                  </Button>
                </GridItem>
              </form>
            </GridItem>
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
              <h2>Login Failed</h2>
              <p>bye</p>
            </Modal>
            <Modal open={this.state.open2} onClose={this.onCloseModal2} center>
              <h2>Insert Code from Your Email</h2>
              <form onSubmit={this.onCloseModal2}>
                <input type="text" id="code" onChange={this.handleCodeChange} value={this.state.code} />
                <input type="submit"/>
              </form>
            </Modal>
          </GridContainer>
        </div>
      </div>
    );
  }
}
export default Login;
