import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, 
  Image} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class MyCarousel extends React.Component<any, any> {

 
    constructor({props}: any){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"https://image.freepik.com/free-photo/online-communication_1098-15842.jpg",
              text: "Text 2",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          
        ]
      }
    }

    _renderItem({item,index}: any){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Image
                    source={{ uri: 'asset:/app_icon.png' }}
                    style={{ width: 40, height: 40 }}
                    />
            <Text>{item.text}</Text>
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                //   layout={"default"}
                //   ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}
