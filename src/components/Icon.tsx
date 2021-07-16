import {
  ColorValue,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import React, { FC } from "react";

import Bars from "../assets/bars-solid.svg";
import Bell from "../assets/bell-regular.svg";
import CheckSquare from "../assets/check-square-regular.svg";
import Clock from "../assets/clock-regular.svg";
import Search from "../assets/search-solid.svg";
import Square from "../assets/square-regular.svg";

interface IconDescriptionProps {
  width: number;
  height: number;
  Component: any;
}

export type IconNames =
  | "bars"
  | "bell"
  | "check-square"
  | "clock"
  | "search"
  | "square";

type Descriptions = Record<IconNames, IconDescriptionProps>;

export const IconsDescription: Descriptions = {
  bars: { Component: Bars, width: 24, height: 24 },
  bell: { Component: Bell, width: 24, height: 24 },
  "check-square": { Component: CheckSquare, width: 24, height: 24 },
  clock: { Component: Clock, width: 24, height: 24 },
  search: { Component: Search, width: 24, height: 24 },
  square: { Component: Square, width: 24, height: 24 },
};

export interface IconProps {
  color?: ColorValue;
  scale?: number;
  name: IconNames;
  style?: StyleProp<ViewStyle>;
}

export const Icon: React.FC<IconProps> = ({
  color,
  scale = 1,
  name,
  style,
}) => {
  const themeContext = useContext(ThemeContext);
  console.log("name", name);
  console.log("Current theme: ", themeContext);
  const { Component, width, height } = IconsDescription[name];
  return (
    <Component
      width={width * scale}
      height={height * scale}
      color={"#000000"}
      style={style}
    />
  );
};
