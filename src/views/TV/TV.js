import React from 'react';

import Icon from "@material-ui/core/Icon";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardIconCustom from "components/Card/CardIconCustom.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Dropdown from 'react-dropdown';


// for choice of TV Place
const room = [ 'Bedroom', 'Master Room', 'Living Room'];

class tv extends React.Component {
  state = {
    device: room[0],
    tvstatus: 0,
    power: "OFF",
    programNumber: 1,
    Volume: 7
  };

  _onSelect(event) {
    this.setState({
      device: event.target.value
    });
  }

  button = () =>{
    if(this.state.tvstatus === 0){
      this.setState({
        tvstatus: 1,
        power: "ON"
      });
    } else {
      this.setState({
        tvstatus: 0,
        power: "OFF"
      });
    }
  }

  handleColor = () => {
    if(this.state.tvstatus === 0){
      return "info";
    }
    else {
      return "rose";
    }
  }

  upProgram = () => {
    this.setState({ programNumber: this.state.programNumber + 1 });
  };

  showUI() {
    window.location = "/table";
  }


  //rendering process down here
  render() {
    const { classes } = this.props;
    let allRoom = room;
    const roomList = allRoom.map((x) => {return(<option key={x}>{x}</option>)});
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} lg={12}>
            <Card>
              <CardHeader color="rose" stats icon>
                <CardIconCustom onClick={this.button} color={this.handleColor(this.state.tvstatus)}>
                  <Icon>power_settings_new</Icon>
                </CardIconCustom>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={4} sm={5} md={3} lg={4}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                          <Icon>keyboard_arrow_up</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                  <GridItem  xs={4} sm={2} md={3} lg={4}>
                  </GridItem>
                  <GridItem  xs={4} sm={5} md={3} lg={4}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon onClick={this.upProgram} color="warning">
                          <Icon>add_circle</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                  <GridItem xs={4} sm={5} md={3} lg={4} height={"2px"}>
                    <p>Change Program</p>
                  </GridItem>
                  <GridItem xs={4} sm={2} md={3} lg={4} height={"2px"}>
                  </GridItem>
                  <GridItem xs={4} sm={5} md={3} lg={4} height={"2px"}>
                    <p>Change Volume</p>
                  </GridItem>
                  <GridItem xs={4} sm={5} md={3} lg={4}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                          <Icon>keyboard_arrow_down</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                  <GridItem xs={4} sm={2} md={3} lg={4}>
                  </GridItem>
                  <GridItem xs={4} sm={5} md={3} lg={4}>
                    <Card>
                      <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                          <Icon>remove_circle</Icon>
                        </CardIcon>
                      </CardHeader>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <h3>Select TV:</h3>
                    {/*<Dropdown options={room} onChange={this._onSelect} value={this.state.device} placeholder="Choose a room..." />*/}
                    <select onChange={this._onSelect.bind(this)} value={this.state.device} style={{width: '50%'}}>
                      {roomList}
                    </select>
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