import { Animated, useWindowDimensions, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { style } from './assets/css';

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
    type = "classic"
  } = props;

  useEffect(() => {
    if (_indicator.current) {
      _indicator.current.setType = type;
    }
  }, []);

  const { width: w } = useWindowDimensions();

  let _indic;
  let _indicator = useRef<TrackingGesturesCore>();

  setOptions.trackingStyle = { ...style.tracking, width, ...setOptions.trackingStyle as object };
  setOptions.indicatorStyle = { ...style.indicator, ...setOptions.indicatorStyle as object };

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
    let indicator: number = widthContentReference > w ? (w / widthContentReference) * 100 : 100;
    _indic = <Animated.View style={[_indicator.current.getIndicatorStyle, { width: indicator + "%", transform: [{ translateX: _indicator.current.translateX }] }]} />;
  }
  return (
    <View style={[_indicator.current.getTrackingStyle]}>
      {_indic}
    </View>
  );
});
export default TrackingGestures;