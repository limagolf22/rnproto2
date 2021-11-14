import Slider from "@react-native-community/slider";
import React, { Component } from "react";
import { Text, View } from "react-native";
import Pressure from "./Pressure";
import PressureV2 from "./PressureV2";
import Temperature from "./Temperature";
import Wind from "./Wind";
import { Orientation, unlockAsync } from "expo-screen-orientation";

export default class DataManager extends Component<
  {},
  {
    windSpeed: number;
    windHeading: number;
    pressure: number;
    temperature: number;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      windSpeed: 20,
      windHeading: 30,
      pressure: 1013,
      temperature: 12,
    };
  }
  componentDidMount() {
    unlockAsync();
  }

  render() {
    return (
      <View style={{}}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "grey",
            borderColor: "black",
            borderStyle: "solid",
            borderRadius: 4.0,
            padding: 10,
            margin: 10,
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <Slider
              minimumValue={0}
              maximumValue={99}
              value={20}
              step={1}
              onValueChange={(value: number) => {
                this.changewindSpeed(value);
              }}
              style={{ width: 200, height: 40 }}
            />
            <Text> Wind intensity</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <Slider
              minimumValue={0}
              maximumValue={360}
              value={30}
              step={1}
              onValueChange={(value: number) => {
                this.changewindHeading(value);
              }}
              style={{ width: 200, height: 40 }}
            />
            <Text> Wind direction</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <Slider
              minimumValue={950}
              maximumValue={1050}
              value={1013}
              step={1}
              onValueChange={(value: number) => {
                this.changePressure(value);
              }}
              style={{ width: 200, height: 40 }}
            />
            <Text>Pressure</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <Slider
              minimumValue={-20}
              maximumValue={50}
              value={12}
              step={1}
              onValueChange={(value: number) => {
                this.changeTemperature(value);
              }}
              style={{ width: 200, height: 40 }}
            />
            <Text>Temperature</Text>
          </View>

          <View />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignContent: "flex-end",
            flexWrap: "wrap",
          }}
        >
          <Wind speed={this.state.windSpeed} heading={this.state.windHeading} />
          <PressureV2 pressure={this.state.pressure} />

          <Temperature temperature={this.state.temperature} />
        </View>
      </View>
    );
  }

  changewindSpeed(value: number) {
    //console.log(value);
    this.setState({ windSpeed: value });
  }

  changewindHeading(value: number) {
    //console.log(value);
    this.setState({ windHeading: value });
  }

  changePressure(value: number) {
    //console.log(value);
    this.setState({ pressure: value });
  }

  changeTemperature(value: number) {
    //console.log(value);
    this.setState({ temperature: value });
  }
}
