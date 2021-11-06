import Slider from "@react-native-community/slider";
import React, { Component } from "react";
import { Text, View } from "react-native";
import Wind from "./Wind";

export default class DataManager extends Component<
  {},
  { windSpeed: number; windHeading: number }
> {
  constructor(props: any) {
    super(props);
    this.state = { windSpeed: 20, windHeading: 30 };
  }

  render() {
    return (
      <View>
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
              onValueChange={(value: number) => {
                this.changewindHeading(value);
              }}
              style={{ width: 200, height: 40 }}
            />
            <Text> Wind direction</Text>
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
}
