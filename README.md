# react-native-tracking-gestures

## :green_heart: Introduction 
This is a library that gives you an indicator gesture of a scrolling list, you can change the properties to suit your use.
## :atom: Live Demo

## Getting Started :ok_man:

```sh
npm install react-native-tracking-gestures
```
## :sassy_woman: Demo 
![Demo ](https://github.com/khanhbachnguyen/react-native-tracking-gestures/blob/main/example/src/demo/react-native-tracking-gestures.gif)

## :four_leaf_clover: Usage 
Here is an example of using
```js
import TrackingGestures from 'react-native-tracking-gestures';

const App = () => {
  const [widthContent, setWidthContent] = React.useState(0);
  let _scrollX = React.useRef(new Animated.Value(0)).current;
  // ...
  return(
    <View>
      <ScrollView
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: _scrollX } } }], { useNativeDriver: false })}
          horizontal={true}
          onContentSizeChange={w => setWidthContent(w)}
        > 
       // render list
      </ScrollView>
      <TrackingGestures
          widthContentReference={widthContent}
          animatedValue={_scrollX}
          width={30}
          isVisibleInSight={true}
          setOptions={{
            trackingStyle: {backgroundColor: "#dedede"},
            indicatorStyle: {backgroundColor: "#0899D7"}
          }}
          type="flexible"
       />
    </View>
   )
}

```
## :star2: Props
| **Property** | **Type** | **Require** | **Default** | **Description** |
|-------------|------|-------|--------|--------------|
| setOptions | setOptions |  |  |  |
| animatedValue | Animated.Value | :white_check_mark: |  |  |
| width | number |  | `30` | width of indicator |
| widthContentReference | number | :white_check_mark: |  |  width directive reference content |
| isVisibleInSight | boolean |  | `false` | visible or hidden directive when content is less than device width |
| type | `flexible`, `classic` |  |  `classic` |


## :memo: Creators 
* :four_leaf_clover:  [https://github.com/khanhbachnguyen](https://github.com/khanhbachnguyen)

## :dart: Issues
* [issues here](https://github.com/khanhbachnguyen/react-native-tracking-gestures/issues)
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
