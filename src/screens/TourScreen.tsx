// import React, { useEffect, useState } from 'react';
// import { Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
// import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';


//   const WIDTH = Dimensions.get('window').width;
//   const HEIGHT = Dimensions.get('window').height;
//   const ToursScreen = ({route}) =>{
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [imgAddress, setImgAddress] = useState([]);
//   const [infoShedules, setInfoShedules] = useState([]);
//   const [infoPackages, setInfoPackages] = useState([]);
//   const id = route.params.paramKey;
//   const dnyaText = <Text>дня</Text>;
//   const dneyText = <Text>дней</Text>;
//   let textDay;
//   if (infoShedules.dateForHumans==0) {
      
//   }
//   else if (infoShedules.dateForHumans>5) {
//       textDay = dneyText
//   }
//   else  {
//       textDay = dnyaText
//   }

//   const chasovText = <Text>часов</Text>;
//   const chasaText = <Text>часа</Text>;
//   const chasText = <Text>час</Text>;
  
//   let textHourse;
//   if (infoShedules.hoursForHumans==1 && infoShedules.dateForHumans<1) {
//     textHourse = chasText
//   }
//   else if (infoShedules.hoursForHumans<5 && infoShedules.dateForHumans<1) {
//     textHourse = chasaText
//   }
//   else if (infoShedules.hoursForHumans>6 && infoShedules.dateForHumans<1 ) {
//     textHourse = chasovText
//   }

//   if ( infoShedules.dateForHumans<1) {
//     infoShedules.dateForHumans = ''
//   }
//   if ( infoShedules.dateForHumans>1) {
//     infoShedules.hoursForHumans = '' 
//   }


//   const getCategory = async () => {
//     fetch('http://194.36.191.166/api/v1/tours/' + id + '/')
//     .then((response) => response.json())
//     .then((json) => {
//       setData(json);
//       setImgAddress(json.images);
//       setInfoShedules(json.schedules[0]);
//       setInfoPackages(json.packages);
//       // console.log(json.images);
//     })
//     .catch((error) => console.error(error))
//     .finally(() => setLoading(false));
//   }
//   useEffect(() => {
//     getCategory();
//   }, []);
 
//   return (
//     <View  className="w-full h-full">
//       {isLoading ? <ActivityIndicator/> : (     
//          <ScrollView style={styles.Scroll}  showsVerticalScrollIndicator={false}>      
//             <SafeAreaView style={styles.Area}>      
//               <ScrollView >
//                   <FlatList 
//                     data={imgAddress}
//                     showsHorizontalScrollIndicator={true}
//                     pagingEnabled
//                     horizontal
//                     style={styles.wrap}
//                     keyExtractor={({ id }) => id.toString()}
//                     renderItem={({ item }) => (
//                   <Image 
//                       resizeMode='stretch'
//                       style={styles.wrap}
//                       source={{uri: 'http://194.36.191.166/storage/' + item.image_name}}
//                   />)}/>
//               </ScrollView>
//               <View  style={styles.whitePanel}>
//               <Text style={styles.categoryTitle}>{data.title}</Text>
//               <Text style={styles.LinkText_location}>
//               <Image  resizeMode='cover' source={require("../navigation/assets/map.png")} style={styles.mapPng}/> 
//                {data.location}</Text>
//                <Text style={styles.dataTitle}>
//               <Image  resizeMode='cover' source={require("../navigation/assets/clock.png")} style={styles.mapPng}/> 
//                 {infoShedules.dateForHumans} {textDay}{infoShedules.hoursForHumans} {textHourse}
//                 </Text>
//               <Text style={styles.LinkText_}>Размер группы</Text>
//               <Text style={styles.LinkText}>До {infoShedules.space_current} человек</Text>
//               <Text style={styles.LinkText_}>Размещение:</Text>
//               <Text style={styles.LinkText}>{data.accommodation}</Text>
//               <Text style={styles.LinkText_}>Место сбора:</Text>
//               <Text style={styles.LinkText}>{infoShedules.meet_place}</Text>
//               <Text style={styles.LinkText_}>Описание:</Text>
//               <Text style={styles.LinkText__}>{data.description}</Text>
//               <View style={styles.price_container}>
//               <Text style={styles.price}>{infoShedules.price/1} ₽ {'\n'}
//               <Text style={styles.price_text}>с человека</Text></Text>
//               <TouchableOpacity style={styles.zabron}>
//               <Text style={styles.zabron_text}>
//               Забронировать</Text></TouchableOpacity>
//               </View>
//               </View>  
//             </SafeAreaView>
//      </ScrollView>        
//       )}   
//     </View>
    
//   );
// };

// const styles = StyleSheet.create({
//   whitePanel: {
//     backgroundColor: 'white',
//     borderRadius: 37,
//     top: '-2.5%'
//   },
//   categoryTitle: {
//     color: '#00274E',
//     fontWeight: '700',
//     fontSize: 24,
//     lineHeight: 29,
//     marginLeft: 45,
//     marginTop: 45,
//     width: '85%'
//   },
//   LinkText: {
//     fontSize: 20,
//     paddingTop: '5%',
//     color: '#001B36',
//     lineHeight: '26',
//     left: 45,
//     right: 0,
//     width: 350,
//   },
//   LinkText_location: {
//     fontSize: 20,
//     color: '#001B36',
//     marginLeft: 45,
//     paddingLeft: 10,
//     marginTop: 25
//   },
//   mapPng: {
//     width: 25,
//     height: 25,
//     tintColor: "#00274E",
//   },
//   dataTitle: {
//       color: '#001B36',
//       fontSize: 20,
//       paddingLeft: 10,
//       marginLeft: 45,
//       marginTop: 20
//   },
//   LinkText_: {
//       fontSize: 22,
//       marginTop: 30,
//       fontWeight: 'bold',
//       color: '#001B36',
//       lineHeight: '22',
//       left: 45,
//       right: 0,
//       width: 380,
//     },
//     zabron: {
//       backgroundColor: '#ECBE00', 
//       marginTop: '10%',
//       marginBottom: 150,
//       marginLeft: '5%',
//       color: 'white',
//       borderRadius: 28,
//       padding: 15,
//     },
//     zabron_text: {
//       color: 'white',
//       textTransform: 'capitalize',
//       fontWeight: 'bold',
//       fontSize: 16,
//     },
//     LinkText__: {
//       fontSize: 22,
//       paddingTop: '5%',
//       color: '#001B36',
//       lineHeight: '30',
//       left: 45,
//       right: 0,
//       width: 300,
//     },
//     price: {
//       fontWeight: '700',
//       fontSize: 25,
//       color: '#00274E',
//       marginTop: '10%',
//       marginBottom: 150,
//     },
//     price_text: {
//       fontSize: 22,
//     },
//     container: {
//       backgroundColor: 'white',
//       alignItems: 'flex-start',
//       paddingTop: 10,
//     },
//     price_container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center",
//       flexDirection: "row",
//     },
//     img: {
//       left: 25,
//       alignSelf: 'center',
//       paddingTop: 10,
//       width: 300,
//       height: 300,
//     },
//     wrap: {
//       width: WIDTH,
//       height: 300,
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0
//     },
//     wrapDot: {
//       position: 'absolute',
    
//       flexDirection: 'row',
//       alignSelf: 'center'
//     },
//     dotActive: {
//       margin: 3,
//       color: 'black'
//     },
//     dot: {
//       margin: 3,
//       color: 'white'
//     },
    
// })

// export default ToursScreen;
import {Animated, FlatList, StyleSheet, Image, View, Dimensions} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Slides from './data';
import SlideItem from './slideritem';
import Pagination from './pagination';

  const TourScreen = ({route}) =>{
  const [index, setIndex] = useState(0);
  const DEVICE_WIDTH= Dimensions.get('window').width;
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

    const id = route.params.paramKey;
    const [data, setData] = useState([]);
    const [imgAddress, setImgAddress] = useState([]);
    const getCategory = async () => {
    fetch('http://194.36.191.166/api/v1/tours/' + id + '/')
    .then((response) => response.json())
    .then((json) => {
      setData(json);
      setImgAddress(json.images);
      // console.log(json.images);
    })
    .catch((error) => console.error(error))
    // .finally(() => setLoading(false));
  }
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <View>
      {/* <FlatList
        data={Slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      /> */}
             <FlatList 
                    data={imgAddress}
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleOnScroll}
                    onViewableItemsChanged={handleOnViewableItemsChanged}
                    viewabilityConfig={viewabilityConfig}
                    // keyExtractor={({ id }) => id.toString()}
                    renderItem={({ item }) => (
                  <Image 
                  item={item}
                      resizeMode='cover'
                      style={{width: DEVICE_WIDTH, flex: 1, height: 300}}
                      source={{uri: 'http://194.36.191.166/storage/' + item.image_name}}
                  />)}/>
      <Pagination data={imgAddress} scrollX={scrollX} index={index} />
    </View>
  );
};


const styles = StyleSheet.create({
  whitePanel: {
    backgroundColor: 'white',
    borderRadius: 37,
    top: '-2.5%'
  },
  categoryTitle: {
    color: '#00274E',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 29,
    marginLeft: 45,
    marginTop: 45,
    width: '85%'
  },
  LinkText: {
    fontSize: 20,
    paddingTop: '5%',
    color: '#001B36',
    lineHeight: '26',
    left: 45,
    right: 0,
    width: 350,
  },
  LinkText_location: {
    fontSize: 20,
    color: '#001B36',
    marginLeft: 45,
    paddingLeft: 10,
    marginTop: 25
  },
  mapPng: {
    width: 25,
    height: 25,
    tintColor: "#00274E",
  },
  dataTitle: {
      color: '#001B36',
      fontSize: 20,
      paddingLeft: 10,
      marginLeft: 45,
      marginTop: 20
  },
  LinkText_: {
      fontSize: 22,
      marginTop: 30,
      fontWeight: 'bold',
      color: '#001B36',
      lineHeight: '22',
      left: 45,
      right: 0,
      width: 380,
    },
    zabron: {
      backgroundColor: '#ECBE00', 
      marginTop: '10%',
      marginBottom: 150,
      marginLeft: '5%',
      color: 'white',
      borderRadius: 28,
      padding: 15,
    },
    zabron_text: {
      color: 'white',
      textTransform: 'capitalize',
      fontWeight: 'bold',
      fontSize: 16,
    },
    LinkText__: {
      fontSize: 22,
      paddingTop: '5%',
      color: '#001B36',
      lineHeight: '30',
      left: 45,
      right: 0,
      width: 300,
    },
    price: {
      fontWeight: '700',
      fontSize: 25,
      color: '#00274E',
      marginTop: '10%',
      marginBottom: 150,
    },
    price_text: {
      fontSize: 22,
    },
    container: {
      backgroundColor: 'white',
      alignItems: 'flex-start',
      paddingTop: 10,
    },
    price_container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    img: {
      left: 25,
      alignSelf: 'center',
      paddingTop: 10,
      width: 300,
      height: 300,
    },

    wrapDot: {
      position: 'absolute',
    
      flexDirection: 'row',
      alignSelf: 'center'
    },
    dotActive: {
      margin: 3,
      color: 'black'
    },
    dot: {
      margin: 3,
      color: 'white'
    },
    
})
export default TourScreen;

