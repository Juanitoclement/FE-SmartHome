import React from "react";

import Humidity from "../../assets/img/sidebar-1.jpg";
import Temperature from "../../assets/img/sidebar-2.jpg";

import ChartistGraph from "react-chartist";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import store from "../../redux/store/configureStore";
import {
  getTemperatureData,
  getHumidityData
} from "../../redux/actions/environmentalAction";

var today = new Date();
var dd = today.getDay();
var weekDays = [];
weekDays[-6] = "M";
weekDays[-5] = "T";
weekDays[-4] = "W";
weekDays[-3] = "T";
weekDays[-2] = "F";
weekDays[-1] = "S";
weekDays[0] = "S";
weekDays[1] = "M";
weekDays[2] = "T";
weekDays[3] = "W";
weekDays[4] = "T";
weekDays[5] = "F";
weekDays[6] = "S";

class Environmental extends React.Component {
  state = {
    // temperature: {label: {temperatureDate}, series: {temperatureData}},
    temperatureData: {
      labels: [
        weekDays[dd - 6],
        weekDays[dd - 5],
        weekDays[dd - 4],
        weekDays[dd - 3],
        weekDays[dd - 2],
        weekDays[dd - 1],
        weekDays[dd]
      ],
      series: [[12.5, 17.7, 1.9, 17, 23, 18, 38]]
    },
    humidityData: {
      labels: [
        weekDays[dd - 6],
        weekDays[dd - 5],
        weekDays[dd - 4],
        weekDays[dd - 3],
        weekDays[dd - 2],
        weekDays[dd - 1],
        weekDays[dd]
      ],
      series: [[12.5, 17.7, 1.9, 17, 23, 18, 38]]
    }
  };

  componentWillMount() {
    const abc = store.store.dispatch(getTemperatureData());
    abc.getTemperaturePayload.then(res => {
      this.setState({
        temperatureData: {
          labels: [
            weekDays[dd - 6],
            weekDays[dd - 5],
            weekDays[dd - 4],
            weekDays[dd - 3],
            weekDays[dd - 2],
            weekDays[dd - 1],
            weekDays[dd]
          ],
          series: [res.data.data]
        }
      });
      console.log(res.data.data);
      console.log(this.state);
    });

    const def = store.store.dispatch(getHumidityData());
    def.getHumidityPayload.then(res => {
      this.setState({
        humidityData: {
          labels: [
            weekDays[dd - 6],
            weekDays[dd - 5],
            weekDays[dd - 4],
            weekDays[dd - 3],
            weekDays[dd - 2],
            weekDays[dd - 1],
            weekDays[dd]
          ],
          series: [res.data.data]
        }
      });
      console.log(res.data.data);
      console.log(this.state);
    });

    console.log(dailySalesChart.data);
    console.log(dailySalesChart.options);
    console.log(dailySalesChart.animation);
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
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <Carousel>
                  <div color={"white"}>
                    <ChartistGraph
                      className="ct-chart"
                      style={{ color: "red" }}
                      data={this.state.temperatureData}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
                    />
                    <img src={Temperature} />
                  </div>
                  <div>
                    <ChartistGraph
                      className="ct-chart"
                      data={this.state.humidityData}
                      type="Line"
                      options={dailySalesChart.options}
                      listener={dailySalesChart.animation}
                    />
                    <img src={Humidity} />
                  </div>
                </Carousel>
              </CardHeader>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default Environmental;
