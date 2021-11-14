import Svg, { Circle, Rect, Text } from "react-native-svg";

import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import WidgetContainer from "./WidgetContainer";

const tmax = 50;
const tmin = -20;

export default class Temperature
  extends Component<
    {
      temperature: number;
    },
    {
      width: number;
    }
  >
  implements WidgetContainer
{
  constructor(props: any) {
    super(props);
    this.state = {
      width: 125,
    };
  }

  changeWidth = (_event: any) => {
    if (this.state.width > 200) {
      this.setState({ width: 125 });
    } else {
      this.setState({ width: 250 });
    }
  };

  render() {
    //console.log("render k=" + this.state.k);
    return (
      <View
        style={{
          backgroundColor: "cyan",
          borderRadius: 25,
          margin: 5,
          padding: 25,
          maxHeight: this.state.width + 50,
        }}
      >
        <TouchableOpacity onPress={this.changeWidth}>
          <View
            style={{
              justifyContent: "center",
              alignContent: "space-around",
              flexDirection: "row",
            }}
          >
            <TemperatureGauge
              temperature={this.props.temperature}
              width={this.state.width}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export class TemperatureGauge extends Component<
  {
    temperature: number;
    width: number;
  },
  {}
> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let val = this.updateCompt();
    return (
      <View>
        <Svg
          viewBox="0 0 100 100"
          width={this.props.width}
          height={this.props.width}
        >
          <Circle cx={50} cy={11} stroke="grey" r={6} fill="grey" />
          <Rect
            x={44}
            y={11}
            width={12}
            height={69}
            stroke="grey"
            fill="grey"
          />
          <Circle cx={50} cy={80} stroke="grey" r={16} fill="grey" />

          <Circle cx={50} cy={val} stroke="red" r={4} fill="red" />
          <Rect
            x={46}
            y={val}
            width={8}
            height={80 - val}
            stroke="red"
            fill="red"
          />
          <Circle cx={50} cy={80} stroke="red" r={14} fill="red" />
          <Text
            fill="red"
            stroke="red"
            fontSize="12"
            x={41}
            y={val}
            textAnchor="end"
          >
            {this.props.temperature + "°C"}
          </Text>
          {/* <Path
          d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
          stroke="black"
        /> */}
        </Svg>
      </View>
    );
  }

  updateCompt() {
    return 80 - ((this.props.temperature - tmin) / (tmax - tmin)) * 69;
  }
}
