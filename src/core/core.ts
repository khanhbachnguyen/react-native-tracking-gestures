import type { Animated } from "react-native";
import type { SetOptionsCore } from "src/types/SetOptions";

export default class TrackingGesturesCore {
    /**
     * get width directive reference content
     */
    private _w
    /**
     * tracking type 'classic' | 'flexible'
     */
    private _type: string = ""
    /**
     * animation value of indicator
     */
    private _animated: Animated.Value;
    /**
     * set options
     */
    private _setOptions: SetOptionsCore = {}

    constructor(w: number, anmValue: Animated.Value, setOptions: SetOptionsCore) {
        this._w = w;
        this._setOptions = { ...this._setOptions, ...setOptions };
        this._animated = anmValue;
    };

    public set setContenSize(w: number) {
        this._w = w;
    }

    public set setType(type: string) {
        this._type = type;
    }


    public get getType() {
        return this._type;
    }

    public get getContenSize() {
        return this._w;
    }

    public get getTrackingStyle() {
        return this._setOptions.trackingStyle;
    }
    public get getIndicatorStyle() {
        return this._setOptions.indicatorStyle;
    }

    public get indicator() {
        return this._w > this._setOptions.screenW! ? (this._setOptions.screenW! / this._w) * 100 : 100;
    }

    public get x(): Animated.AnimatedInterpolation {
        return this._animated.interpolate({
            inputRange: [0, (this._w - this._setOptions.screenW!)],
            outputRange: ["0%", "50%"],
        });
    }
    public get translateX(): Animated.AnimatedInterpolation {
        return this._animated.interpolate({
            inputRange: [0, this._w!],
            outputRange: [0, this._setOptions.widthIndicator!],
            extrapolate: "clamp"
        });
    }
}