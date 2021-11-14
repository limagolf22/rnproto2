import Svg, { Line, NumberProp, Polygon } from "react-native-svg";

import React, { Component } from "react";
import { View, Animated, Easing, TouchableOpacity } from "react-native";

export default class Wind extends Component<
  {
    speed: number;
    heading: number;
  },
  {
    speed: number;
    heading: number;
    rotatePosition: Animated.Value;
    width: number;
  }
> {
  timer1: NodeJS.Timer | undefined;
  animation: Animated.CompositeAnimation;

  constructor(props: any) {
    super(props);
    this.state = {
      speed: props.speed,
      heading: props.heading,
      rotatePosition: new Animated.Value(0),
      width: 125,
    };
    this.animation = Animated.timing(this.state.rotatePosition, {
      useNativeDriver: true,
      toValue: 1,
      duration: 2000,
      easing: Easing.elastic(4),
    });
  }
  componentDidMount() {
    this.timer1 = setInterval(() => {
      //this.animation.reset();
      //this.animation.stop();
      //this.animation.reset();
      this.state.rotatePosition.setValue(0);
      this.animation.start(() => this.animation.reset());
    }, 4000);
  }
  changeWidth = (_event: any) => {
    if (this.state.width > 200) {
      this.setState({ width: 125 });
    } else {
      this.setState({ width: 250 });
    }
  };
  convert() {
    return this.state.rotatePosition.interpolate({
      inputRange: [0, 1],
      outputRange: ["-5deg", "0deg"],
    });
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
          maxHeight: this.state.width + 50,
        }}
      >
        <TouchableOpacity onPress={this.changeWidth}>
          <View
            style={{
              transform: [
                {
                  rotate: this.props.heading.toString() + "deg",
                },
              ],

              justifyContent: "center",
              alignContent: "space-around",
              flexDirection: "row",
            }}
          >
            <Animated.View style={{ transform: [{ rotate: this.convert() }] }}>
              <WindFlag speed={this.props.speed} width={this.state.width} />
            </Animated.View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export class WindFlag extends Component<
  {
    speed: number;
    width: number;
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
      <Svg
        viewBox="0 0 100 100"
        width={this.props.width}
        height={this.props.width}
      >
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
