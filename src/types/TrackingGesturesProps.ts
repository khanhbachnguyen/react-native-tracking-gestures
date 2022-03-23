import type { Animated } from "react-native";
import type { SetOptions } from "./SetOptions";



export interface TrackingGesturesProps {
    /**
     * set options
     */
    setOptions?: SetOptions,
    /**
     * @description animated value 
     * @example
     * <ScrollView
     *      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: _scrollX } } }], { useNativeDriver: false })}
     * >
     * //
     * </ScrollView>
     */
    animatedValue: Animated.Value,
    /**
     * width of indicator
     */
    width?: number,
    /**
     * @description get width directive reference content
     * @example
     * <ScrollView
     *      onContentSizeChange={(w:number, h:number) =>
     *          setWidthContent(w)
     *      }}
     * >
     * //
     * </ScrollView>
     */
    widthContentReference: number,
    /**
     * @description show directive when content is less than device width?
     */
    isVisibleInSight?: boolean,
    /**
     * tracking gestures type
     */
    type?: 'flexible' | 'classic',
    /**
     * hidden/visibility indicator
     */
    hidden?: boolean
};


