import type { StyleProp, ViewStyle } from "react-native";

export interface SetOptionsCore extends SetOptions {
    screenW?: number,
    widthIndicator?: number,
}

export interface IndicatorStyle extends ViewStyle { }

export interface SetOptions {
    trackingStyle?: StyleProp<IndicatorStyle>,
    indicatorStyle?: StyleProp<IndicatorStyle>,
}