import React from "react";
// import Swiper from "react-id-swiper";

import withStyles from "@material-ui/core/styles/withStyles";

import dashboardStyle from "assets/jss/smart-home-react/views/dashboardStyle.jsx";

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

class Environmental extends React.Component {
  handleSubmit() {
    alert("Logging you in");
  }
  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  }
  static defaultProps = {
    containerClass: "swiper-container",
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide"
  };

  render() {
    const params = {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };
    return (
      <div>
        {/*<Swiper {...params}>*/}
          {/*<div style={cardHeader}>Slide 1</div>*/}
          {/*<div style={cardHeader}>Slide 2</div>*/}
        {/*</Swiper>*/}
      </div>
    );
  }
}// baru selesaiin graph nya tapi belom ambil data dari backend sama bagusin dashboard
export default withStyles(dashboardStyle)(Environmental);
