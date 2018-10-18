import React from "react";
// import Swiper from "react-id-swiper";

import withStyles from "@material-ui/core/styles/withStyles";

import dashboardStyle from "assets/jss/smart-home-react/views/dashboardStyle.jsx";
import ChartistGraph from "react-chartist";
import ArrowUpward from "@material-ui/core/SvgIcon/SvgIcon";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import AccessTime from "@material-ui/icons/AccessTime";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

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
    const { classes } = this.props;
    const params = {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <Carousel>
                  <div color={"white"}>
                    <ChartistGraph
                      className="ct-chart"
                      style={{color: 'red'}}
                      data={dailySalesChart.data}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
                    />
                    <img src="" />
                  </div>
                  <div>
                    <ChartistGraph
                      className="ct-chart"
                      data={dailySalesChart.data}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
                    />
                    <img src="" />
                  </div>
                  <div>
                    <ChartistGraph
                      className="ct-chart"
                      data={dailySalesChart.data}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
                    />
                    <img src="" />
                  </div>
                </Carousel>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Room Temperature</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today avaerage temperature.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default withStyles(dashboardStyle)(Environmental);
