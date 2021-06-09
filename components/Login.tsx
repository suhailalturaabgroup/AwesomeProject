import React, {useState, useCallback, useRef, useEffect} from 'react';
import {FlatList, View, Text, Dimensions, Image} from 'react-native';
import { vertical } from 'react-native-swiper-flatlist/src/themes';
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const slideList = Array.from({ length: 30 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    title: `This is the title! ${i + 1}`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

function Slide({ data }: any) {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{ width: windowWidth * 1, height: windowHeight * 0.5 }}
      ></Image>
      <Text style={{ fontSize: 18 }}>{data.title}</Text>
      <Text style={{ fontSize: 14 }}>{data.subtitle}</Text>
    </View>
  );
}

function Login() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);
    const isNoMansLand = 0.4 < distance;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  // Use the index
  // useEffect(() => {
  //   // console.warn(index);
  // }, [index]);

  return (
    <FlatList
      data={slideList}
      style={{ flex: 1 }}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={true}
      onScroll={onScroll}
    />
  );
}


export default Login;