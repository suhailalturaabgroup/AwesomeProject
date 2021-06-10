import React, {useState, useCallback, useRef, useEffect} from 'react';
import {FlatList, View, Text, Button, TouchableOpacity, StyleSheet, TextInput , Dimensions, Image} from 'react-native';
import { color } from 'react-native-reanimated';
import { vertical } from 'react-native-swiper-flatlist/src/themes';
import { AntDesign } from '@expo/vector-icons';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const slideList = Array.from({ length: 30 }).map((_, i) => {
  return {
    id: i,
    image: `https://picsum.photos/1440/2842?random=${i}`,
    // title: `This is the title! ${i + 1}`,
    // subtitle: `This is the subtitle ${i + 1}!`,
  };
});


function  InputBox() {
  return(
    <View style={{flex:1, flexDirection: "column", backgroundColor: ""}}>
      <View style={styles.text}>
      <Text style={styles.innerText1}>Get groceries & food delivered</Text>
      <Text style={styles.innerText}>Login Or SignUp to place your order</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row"}} >
      <TextInput
        style={styles.input}
        // onChangeText={}
        // value={5}
        placeholder="Enter Number"
        keyboardType="numeric"
        maxLength={10}
      />
      <TouchableOpacity style={styles.Inputbutton}>
        <AntDesign style={{marginTop: 4}} name="arrowright" size={28} color="#fff"
         onPress={()=> alert('clicked Me!') }
         />
      
      </TouchableOpacity>
      
      </View>
      
      <View>
      <Text>By continuing, I agreeto the term of Use & Privacy Policy</Text>
      </View>
      
    </View>
  )
  
}

function Slide({ data }: any) {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        backgroundColor:"",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        flex: 1,
        flexDirection: "column"
        
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{ width: windowWidth * 1, height: windowHeight * 0.4 }}
      />
      <Text style={{ fontSize: 18 }}>{data.title}</Text>
      <Text style={{ fontSize: 14 }}>{data.subtitle}</Text>
      
      
      <InputBox/>
    
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
  useEffect(() => {
    // console.warn(index);
  }, [index]);

  return (
    
    <FlatList
    
      data={slideList}
      style={{ flex: 1, marginBottom:0 }}
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

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width:280,
    borderWidth: 1,
    marginTop:0
  },

Inputbutton : {
  backgroundColor: '#07B41C',
  width:70,
  height:40,
  marginTop:0,
  alignItems: "center"

},

text: {
  flexDirection: "column", marginBottom:10, marginLeft:10
},

innerText: {
  color: "#838282",
  marginTop:5
},

innerText1: {
  color: "#0B0B0B",
  fontSize:16,
  marginTop:5
}

});
