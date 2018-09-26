import React from 'react';

import Icon from "@material-ui/core/Icon";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";


class tv extends React.Component {
  state = {
    programNumber: 1,
    Volume: 7
  };
  changeProgram = (event) => {
    this.setState({ programNumber: this.state.programNumber + 1 });
    console.log("change happened");
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  showUI() {
    window.location = "/table";
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} lg={12}>
            <Card>
              <CardHeader color="rose" stats icon>
                <CardIcon color="rose">
                  <Icon>power_settings_new</Icon>
                </CardIcon>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem  xs={4} sm={6} md={3} lg={4}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                          <Icon>keyboard_arrow_up</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                  <GridItem  xs={4} sm={6} md={3} lg={4}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon onClick={this.changeProgram} color="warning">
                          <Icon>add_circle</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                  <GridItem  xs={4} sm={6} md={3} lg={4}>
                  </GridItem>
                  <GridItem xs={4} sm={6} md={3} lg={4} height={"2px"}>
                    <p>Change Program</p>
                  </GridItem>
                  <GridItem xs={4} sm={6} md={3} lg={4} height={"2px"}>
                    <p>Change Volume</p>
                  </GridItem>
                  <GridItem  xs={4} sm={6} md={3} lg={4}>
                  </GridItem>
                  <GridItem xs={4} sm={6} md={3} lg={4}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                          <Icon>keyboard_arrow_down</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                  <GridItem xs={4} sm={6} md={3} lg={4}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                          <Icon>remove_circle</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default tv;