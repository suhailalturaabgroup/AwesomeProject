import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import * as React from 'react'
import {Text, View, Dimensions, SafeAreaView, StyleSheet, Platform, TouchableOpacity } from 'react-native';

const { width: screenWidth } = Dimensions.get('window')

export default class MySlider extends React.Component<any, any> {

    constructor({props}: any){
            super(props);
            this.state = {
              activeIndex:0,
              entries: [
              {
                  title:"item1",
                  text: "Text 2",
              },
              {
                  title:"Item 2",
                  text: "Text 2",
              },
              
            ]
          }
        }

    renderItems ({item, parallaxProps}: any) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <TouchableOpacity>
                <Text numberOfLines={2}>
                    { item.title }
                </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render () {
        
        return (
          <View>
            <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={this.state.entries}
                renderItem={this.renderItems}
                hasParallaxImages={true}
            />
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
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})