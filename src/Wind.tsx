import Svg, { Line, NumberProp, Polygon } from "react-native-svg";

import React, { Component } from "react";
import { View } from "react-native";

export default class Wind extends Component<
  {
    speed: number;
    heading: number;
  },
  { speed: number; heading: number }
> {
  constructor(props: any) {
    super(props);

    this.state = { speed: props.speed, heading: props.heading };
  }
  render() {
    return (
      <View
        style={{
          width: 100,
          transform: [{ rotate: this.props.heading.toString() + "deg" }],
        }}
      >
        <WindFlag speed={this.props.speed} />
      </View>
    );
  }
}

export class WindFlag extends Component<
  {
    speed: number;
  },
  { speed: number }
> {
  compt50: number;
  compt10: number;
  compt5: number;

  constructor(props: any) {
    super(props);

    this.compt50 = 0;
    this.compt10 = 0;
    this.compt5 = 0;
    this.state = { speed: props.speed };
  }
  render() {
    this.updateCompt();
    return (
      <Svg viewBox="0 0 100 100" width="100" height="100">
        <Line
          x1="50"
          x2="50"
          y1={this.compt50 == 0 && this.compt10 > 0 ? "10" : "0"}
          y2="100"
          stroke="black"
          strokeWidth="1.5"
        />
        {this.compt50 > 0 ? (
          <Polygon points="50,0 75,5 50,10" fill="black" stroke="black" />
        ) : null}

        {[...Array(this.compt10)].map((x, i) => (
          <Line
            x1="50"
            y1={10 + this.compt50 * 5 + i * 5}
            x2="75"
            y2={5 + this.compt50 * 5 + i * 5}
            stroke="black"
            strokeWidth="1"
          />
        ))}

        {[...Array(this.compt5)].map((x, i) => (
          <Line
            x1="50"
            y1={10 + this.compt50 * 5 + this.compt10 * 5 + i * 5}
            x2="62.5"
            y2={7.5 + this.compt50 * 5 + this.compt10 * 5 + i * 5}
            stroke="black"
            strokeWidth="1"
          />
        ))}
      </Svg>
    );
  }

  updateCompt() {
    this.compt50 = Math.floor(this.props.speed / 50);
    this.compt10 = Math.floor((this.props.speed - this.compt50 * 50) / 10);
    this.compt5 = Math.floor(
      (this.props.speed - this.compt50 * 50 - this.compt10 * 10) / 5
    );
  }
}
