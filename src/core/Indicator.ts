import type { Animated } from 'react-native';
import type { SetOptionsCore } from 'src/types/SetOptions';
import core from './core';
export default {
    create: function (w: number, anmValue: Animated.Value, setOptions: SetOptionsCore) {
        return new core(w, anmValue, setOptions);
    }
};