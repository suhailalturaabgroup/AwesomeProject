import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const Slider = () => (
  <View>
    <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination>
      <View>
        <Image style={{width:500, height:200}} source={{
          uri: 'https://image.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg' }}
          />

      </View>
      <View>
      <Image style={{width:500, height:200}} source={{
          uri: 'https://image.freepik.com/free-photo/young-student-woman-wearing-denim-jacket-eyeglasses-holding-colorful-folders-showing-thumb-up-pink_176532-13861.jpg' }}
          />
      </View>
      <View>
      <Image style={{width:500, height:200}} source={{
          uri: 'https://image.freepik.com/free-photo/young-attractive-smiling-student-showing-thumb-up-outdoors-campus-university_8353-6394.jpg' }}
          />
      </View>
      <View>
      <Image style={{width:500, height:200}} source={{
          uri: 'https://image.freepik.com/free-photo/horizontal-shot-joyful-young-woman-with-glasses-posing-against-white-wall_273609-20353.jpg' }}
          />
      </View>
    </SwiperFlatList>
  </View>
);

// const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  // container: { flex: 1, backgroundColor: 'white'},
  // child: { width, justifyContent: 'center' },
  // text: { fontSize: width * 0.5, textAlign: 'center'},
});

export default Slider;


  {/* <FlatList horizontal
                    data={DATA}
                    renderItem={({ item }) =>
                        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
                            <View style={styles.list}>
                                <Text>ffdsf</Text>
                            </View>
                            <View style={styles.list1}>
                                <Text>sffds</Text>
                            </View>
                            <View style={styles.list2}>
                                <Text>sffds</Text>
                            </View>
                        </View>

                    }
                    keyExtractor={item => item.id}


                /> */}