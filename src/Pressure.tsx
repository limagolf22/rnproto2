import Svg, { Line, NumberProp, Polygon } from "react-native-svg";

import React, { Component } from "react";
import { View, Animated, Easing, TouchableOpacity } from "react-native";
import WidgetContainer from "./WidgetContainer";
import ReactSpeedometer from "react-d3-speedometer";

export default class Pressure
  extends Component<
    { pressure: number },
    {
      width: number;
      change: boolean;
    }
  >
  implements WidgetContainer
{
  constructor(props: any) {
    super(props);
    this.state = {
      width: 125,
      change: false,
    };
  }

  changeWidth = (_event: any) => {
    this.setState({ change: true });
    if (this.state.width > 200) {
      this.setState({ width: 125 });
    } else {
      this.setState({ width: 250 });
    }
  };

  switchTO() {
    if (this.state.change) {
      this.setState({ change: false });
      return true;
    }
    return false;
  }

  render() {
    //console.log("render k=" + this.state.k);
    return (
      <View
        style={{
          backgroundColor: "cyan",
          borderRadius: 25,
          margin: 5,
          padding: 25,
          width: this.state.width + 50,
          height: this.state.width + 50,
        }}
      >
        <TouchableOpacity onPress={this.changeWidth}>
          <ReactSpeedometer
            forceRender={this.switchTO()}
            minValue={950}
            maxValue={1050}
            value={this.props.pressure}
            needleColor="red"
            startColor="green"
            segments={1}
            endColor="green"
            fluidWidth={false}
            width={this.state.width}
            height={this.state.width}
            ringWidth={10}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
