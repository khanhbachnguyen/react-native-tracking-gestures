# react-native-tracking-gestures

## :green_heart: Introduction 
This is a library that gives you scrolling list indicator gestures, you can change the properties to fit your needs.

note for this to work well we need to declare scrolling list animation value `<ScrollView onScroll = {Animated.event([{nativeEvent: {contentOffset: {x: _scrollX}}}] )} ...` and `onContentSizeChange={w => setWidthContent(w)}` property, for more we can see below instructions
## :atom: Live Demo
live [**example**](https://codesandbox.io/s/epic-tdd-et5gy8?file=/src/App.js) here
## :ok_man: Getting Started 

```sh
npm install --save react-native-tracking-gestures
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
| setOptions | setOptions |  |  | if you want to change indicator height, that in like this `trackingStyle: {height:5}`, the same goes for `borderRadius` |
| animatedValue | Animated.Value | :white_check_mark: |  |  |
| width | number |  | `30` | width of indicator |
| widthContentReference | number | :white_check_mark: |  |  width directive reference content |
| isVisibleInSight | boolean |  | `false` | visible or hidden directive when content is less than device width |
| type | `flexible`, `classic` |  |  `classic` | `classic` indicator bar always half overflow, `flexible` indicator will change according to content |
| hidden | boolean |  | `false` |  visibility or hidden indicator  |

## :memo: Creators 
* :four_leaf_clover:  [https://github.com/khanhbachnguyen](https://github.com/khanhbachnguyen)

## :dart: Issues
* [issues here](https://github.com/khanhbachnguyen/react-native-tracking-gestures/issues)
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
