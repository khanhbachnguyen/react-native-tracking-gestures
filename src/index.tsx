import { Animated, useWindowDimensions, View } from 'react-native';
import React, { useEffect, useRef, useImperativeHandle } from 'react';

import Indicator from './core/Indicator';

import type TrackingGesturesCore from './core/core';
import type { SetOptions } from './types/SetOptions';
import type { TrackingElement } from './types/TrackingElement';
import type { TrackingGesturesProps } from './types/TrackingGesturesProps';

const TrackingGestures = React.forwardRef<TrackingElement, TrackingGesturesProps>((props, ref) => {
  const {
    setOptions = {} as SetOptions,
    animatedValue,
    width = 30,
    widthContentReference,
    isVisibleInSight = false,
    type = "classic",
    hidden = false
  } = props;

  const { width: w } = useWindowDimensions();

  let _indic: JSX.Element;
  let _indicator = useRef<TrackingGesturesCore>();

  useImperativeHandle(ref, () => ({
    setContenSize() { }
  }));

  useEffect(() => {
    if (_indicator.current) {
      _indicator.current.setType = type;
    }
  }, []);


  setOptions.trackingStyle = {
    position: "relative",
    height: 4,
    backgroundColor: "rgba(204, 204, 204, 0.3)",
    borderRadius: 50,
    overflow: "hidden",
    width,
    ...setOptions.trackingStyle as object
  };
  setOptions.indicatorStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#F01D7C",
    borderRadius: 50,
    ...setOptions.indicatorStyle as object
  };

  _indicator.current = Indicator.create(widthContentReference, animatedValue, {
    screenW: w,
    widthIndicator: width,
    ...setOptions,
  });

  if (!isVisibleInSight && (widthContentReference <= w)) return null;

  if (type === "classic") {
    let _is = (widthContentReference - w) < 0 ? true : false;
    let _x = _is ? 0 : _indicator.current.x;
    _indic = <Animated.View style={[_indicator.current.getIndicatorStyle, { width: _is ? "100%" : "50%", left: _x }]} />;
  } else {
    _indic = <Animated.View style={[_indicator.current.getIndicatorStyle, { width: _indicator.current.indicator + "%", transform: [{ translateX: _indicator.current.translateX }] }]} />;
  }
  if (hidden) {
    return (
      <View style={[_indicator.current.getTrackingStyle, { backgroundColor: "transparent" }]} />
    );
  }
  return (
    <View style={[_indicator.current.getTrackingStyle]}>
      {_indic}
    </View>
  );
});
export default TrackingGestures;