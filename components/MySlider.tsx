import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import * as React from 'react'
import { Text, View, Dimensions, ScrollView, Image, TextInput, SafeAreaView, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
const { width: screenWidth } = Dimensions.get('window')

function LoginInputBox() {
  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Thin.ttf')
  });


  if (!loaded) {
    return null;
  }
  // const [text, setText] = useState('');
  return (

    <View style={{ flex: 1, flexDirection: "column", backgroundColor: "" }}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.text}>
            <Text style={styles.innerText1}>Get groceries & food delivered</Text>
            <Text style={styles.innerText}>Login Or SignUp to place your order</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row"}}>
            <TextInput
              style={styles.input}
              //  onChangeText={text => setText(text)}
              // value={5}              
              placeholder=" +91"
              keyboardType="numeric"
              maxLength={10}
              placeholderTextColor='#4E4E4E'

            />
            <TouchableOpacity style={styles.Inputbutton}>
              <AntDesign style={{ marginTop: 9 }} name="arrowright" size={24} color="#fff"
                onPress={() => alert('clicked Me!')}
              />

            </TouchableOpacity>

          </View>

          <View>
            <Text style={styles.innerText2}>By continuing, I
              agree to the <Text style={styles.innerText3}>term of Use
                <Text style={{ color: "#838282" }}> &</Text> Privacy Policy</Text></Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>

  )

}


export default class MySlider extends React.Component<any, any> {

  constructor({ props }: any) {
    super(props);
    this.state = {
      // activeIndex:0,
      entries: [
        {
          title: 'Beautiful and dramatic Antelope Canyon',
          thumbnail: 'https://i.imgur.com/UPrs1EWl.jpg',

        },
        {
          title: 'Earlier this morning, NYC',
          thumbnail: 'https://i.imgur.com/UPrs1EWl.jpg',
        }

      ]
    }
  }
  renderItems({ item, index, parallaxProps }: any) {
    console.log("items", item)
    console.log("parallaxProps", item.parallaxProps)
    return (
      <View style={styles.item}>
        {/* <Image style={{width:400, height:200}} source={{uri: 'https://i.imgur.com/UPrs1EWl.jpg'}}/> */}

        <ParallaxImage
          source={{ uri: item.thumbnail }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <TouchableOpacity>
          <Text numberOfLines={2}>
            {/* {item.title} */}
          </Text>
        </TouchableOpacity>




      </View>

    );
  }


  render() {

    return (

      <View style={{flex:1, flexDirection: 'column' }}>

        

        <View style={{ flex: 2, flexDirection: 'column', backgroundColor: '#F8F9F4' }}>
        <View>
              <Image style={{width:150, marginTop: 20, alignSelf: "center", height:60}} source={require('../assets/img/logo.png')} />
            </View>
          <Carousel
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={this.state.entries}
            renderItem={this.renderItems}
            hasParallaxImages={true}
          />
        </View>
        <View style={{ flex: 1, marginTop: 40, marginLeft: 20, backgroundColor: '' }}>
          <LoginInputBox />
        </View>
      </View>

    );

  }
}



const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'pink',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },

  input: {
    height: 45,
    margin: 12,
    width: 280,
    fontSize: 18,
    borderColor: "#ccc",
    backgroundColor: "#F4F2F2",
    borderWidth: 1,
    marginTop: 0,
    borderRadius: 7
  },

  Inputbutton: {
    backgroundColor: '#00B04E',
    width: 50,
    height: 45,
    marginTop: 0,
    alignItems: "center",
    borderRadius: 7

  },

  text: {
    flexDirection: "column",
    marginBottom: 10,
    marginLeft: 10
  },

  innerText: {
    color: "#838282",
    marginTop: 5,
    fontFamily: 'Montserrat-Thin',
    fontSize: 14,
  },

  innerText1: {
    color: "#0B0B0B",
    fontSize: 20,
    marginTop: 5,
    fontFamily: 'Montserrat-ExtraBold',
  },
  //input text sheet
  innerText2: {
    color: "#838282",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 13,
    fontFamily: 'Montserrat-Thin',
  },

  innerText3: {
    color: "#00B04E",
    fontSize: 13,
    marginTop: 5,
    fontFamily: 'Montserrat-Thin',
  }
})