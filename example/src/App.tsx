import * as React from 'react';
import { Animated, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import TrackingGestures from 'react-native-tracking-gestures';

import { data } from './data';

export default function App(): JSX.Element {

  let _scrollX = React.useRef(new Animated.Value(0)).current;
  const [widthContent, setWidthContent] = React.useState(0);

  const [state, setState] = React.useState({
    widthContent: 0,
    width: 30,
    amount: 14,
    trackingStyle: {},
    indicatorStyle: {},
    isVisibleInSight: false,
    type: 'classic',
    hidden: false
  });

  let tmp = React.useRef(state);

  const renderDOM = () => {
    let DOM = [];
    for (let i = 0; i < state.amount; i++) {
      DOM.push(<View
        key={i}
        style={{
          width: 76,
          height: 123,
          paddingHorizontal: 5,
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              width: 35,
              height: 35,
              padding: 4,
              backgroundColor: "#f2f2f2",
              borderRadius: 5
            }}>
            <Image style={{ width: '100%', height: '100%' }} source={{ uri: data[i].icon }} />
          </View>
          <View style={{ height: 40, marginTop: 5, justifyContent: "center" }}>
            <Text numberOfLines={2} style={{ textAlign: "center", color: "#888" }}>{data[i].text}</Text>
          </View>
        </View>
      </View>);
    }
    return DOM;
  };
  return (
    <View style={{}}>
      <Text style={{ position: "absolute", zIndex: 1000, top: 40, left: 20 }}>{JSON.stringify(state, null, 4)}</Text>

      <View style={{ alignItems: "center", marginBottom: 30, marginTop: 300 }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <View style={{ width: 60, height: 30, marginRight: 10 }}>
              <Image style={{ width: '100%', height: "100%" }} source={{ uri: "https://scontent.fsgn5-4.fna.fbcdn.net/v/t39.30808-6/274201106_693870791782289_7822311166649015558_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mEcc4-Lc800AX8j4cVR&tn=Pk-YGnD5-JXXEpX1&_nc_ht=scontent.fsgn5-4.fna&oh=00_AT_ceCsGZVUplPG_OonRAmFToRO5MMcCl3PkQqlu4LV4WA&oe=623DAAAA" }} />
            </View>
            <View style={{ width: 60, height: 20 }}>
              <Image style={{ width: '100%', height: "100%" }} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png" }} />
            </View>
          </View>
          <View>
            <View style={{ width: 60, height: 30 }}>
              <Image style={{ width: '100%', height: "100%" }} source={{ uri: "https://avatars.githubusercontent.com/u/69707392?s=400&u=ae02adc018925dbbbe76ffbe8493155a7f8304c8&v=4" }} />
            </View>
            <View style={{ width: 60, height: 20 }}>
              <Image style={{ width: '100%', height: "100%" }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-V2lvf9TF3ZVsTTiVODLts8qn1SkPXb39sBRgj7k-qvyW1tED3p2Byg6ZY9b4tVYDC0&usqp=CAU" }} />
            </View>
          </View>
        </View>
        <Text style={{ fontWeight: "700", fontSize: 18 }}>react-native-tracking-gestures</Text>
      </View>

      <View style={{ height: 100 }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: _scrollX } } }], { useNativeDriver: false })}
          horizontal={true}
          onContentSizeChange={w => {
            setState({ ...state, widthContent: w });
            setWidthContent(w);
          }}
        >
          {renderDOM()}
        </ScrollView>
      </View>
      <View style={{ alignItems: "center" }}>
        <TrackingGestures
          scrollEventThrottle={16}
          hidden={state.hidden}
          widthContentReference={widthContent}
          animatedValue={_scrollX}
          width={state.width}
          isVisibleInSight={state.isVisibleInSight}
          setOptions={{
            trackingStyle: state.trackingStyle,
            indicatorStyle: state.indicatorStyle
          }}
          type={state.type === 'classic' ? "classic" : "flexible"}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: "space-evenly", marginTop: 50, flexWrap: "wrap" }}>
        <ButtonDemo onClick={() => setState({ ...state, amount: state.amount - 1 })} text="decrease " />
        <ButtonDemo onClick={() => setState(prev => ({ ...prev, amount: prev.amount + 1 }))} text="increase " />
        <ButtonDemo onClick={() => setState(prev => ({ ...prev, isVisibleInSight: !prev.isVisibleInSight }))} text={`in sight: ${state.isVisibleInSight}`} />
        <ButtonDemo onClick={() => setState(prev => ({ ...prev, type: prev.type === "classic" ? "flexible" : "classic" }))} text={state.type === 'classic' ? "type: classic" : "type: flexible"} />
        <ButtonDemo onClick={() => setState(prev => ({ ...prev, indicatorStyle: { backgroundColor: randomColor() }, trackingStyle: { backgroundColor: randomColor() } }))} text="background change" />
        <ButtonDemo onClick={() => setState({ ...state, width: state.width - 5 })} text="width - 5" />
        <ButtonDemo onClick={() => setState({ ...state, width: state.width + 5 })} text="width + 5" />
        <ButtonDemo onClick={() => setState({ ...state, hidden: !state.hidden })} text={`hidden: ${state.hidden}`} />
        <ButtonDemo onClick={() => setState(tmp.current)} text="set default" />
      </View>

    </View>
  );
}

const ButtonDemo = ({ onClick, text }) => {
  return (
    <TouchableOpacity
      style={{ marginHorizontal: 5, marginTop: 10, backgroundColor: "#1697C9", padding: 7, }}
      onPress={onClick}
    >
      <Text style={{ color: "white", fontWeight: "700" }}>{text}</Text>
    </TouchableOpacity>
  );
};

function randomColor() {
  const arrayOfColorFunctions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  let randomColorString = '#';

  for (let x = 0; x < 6; x++) {

    let index = Math.floor(Math.random() * 16);
    let value = arrayOfColorFunctions[index];

    randomColorString += value;
  }
  return randomColorString;

}