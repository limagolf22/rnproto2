import Svg, {
  Circle,
  G,
  Line,
  NumberProp,
  Polygon,
  Rect,
  Text,
} from "react-native-svg";

import React, { Component } from "react";
import { View, Animated, Easing, TouchableOpacity } from "react-native";
import WidgetContainer from "./WidgetContainer";

const minPress = 950;
const maxPress = 1050;

export default class PressureV2
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
          <Svg
            viewBox="0 0 100 100"
            width={this.state.width}
            height={this.state.width}
          >
            <Circle
              cx={50}
              cy={75}
              strokeWidth={3}
              stroke="grey"
              r={45}
              fillOpacity={0}
            />
            <Rect
              x={5}
              y={75}
              width={90}
              height={25}
              stroke="grey"
              fill="grey"
            />
            <Text
              fill="darkgreen"
              stroke="darkgreen"
              fontSize="12"
              x={50}
              y={92}
              textAnchor="middle"
            >
              {this.props.pressure + " HPa"}
            </Text>
            <G transform={"rotate(" + this.convertVal() + ", 50, 75)"}>
              <Circle cx={50} cy={75} r={5} stroke="#060" fill="#060" />
              <Line x1="50" y1="75" x2="10" y2="75" stroke="#060" />
              <Polygon
                points="10,80 5,75 10,70"
                fill="#060"
                stroke="#060"
                strokeWidth="1"
              />
            </G>

            {/* <Path
          d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
          stroke="black"
        /> */}
          </Svg>
        </TouchableOpacity>
      </View>
    );
  }

  convertVal() {
    return (180 * (this.props.pressure - minPress)) / (maxPress - minPress);
  }
}
