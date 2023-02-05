import React , { useEffect, useState } from 'react';
import { ImageBackground, Text, View} from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { Image, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import ToursScreen from './TourScreen';

  const HomeScreen  = ({ navigation}) =>  {    
  const [isLoading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);    
  const [banners, setBann] = useState([]);    
  getCategories = () => {
      fetch('http://194.36.191.166/api/v1/tours/')
        .then((response) => response.json())
        .then((json) => setCategories(json.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  }    
  getBanners = () => {
    fetch('http://194.36.191.166/api/v1/banners/')
      .then((response) => response.json())
      .then((json) => setBann(json.banners))
      
      .catch((error) => console.error(error))
      // console.log(json.images);
}    
  useEffect(() => {
      setLoading(true);
      getCategories();
      getBanners();
  }, []);  
  return (
    <View className="w-full h-full">
      <View>
          {isLoading ? 
          <Text>Загрузка...</Text> :
          (
        <View> 
          <FlatList 
            data={banners}
            showsHorizontalScrollIndicator={true}
            pagingEnabled
            horizontal
            className="rounded-3xl py-2 px-2 m-2"
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity 
              onPress={() => navigation.navigate('ToursScreen' , {paramKey: item.id} )}>
                <View style={styles.gallery}>
                <Image style={styles.img} resizeMode='cover' source={{uri: 'http://194.36.191.166/storage/'+ item.image.image_name}}/>
                </View>
                <View style={styles.Panelslider}>
                <Text style={styles.textPanelslider}>{`${item.title}`}</Text>
                <Text style={styles.pricePanelText}>{`${item.schedules[0].price/1}`} ₽</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        <View>
        <Text style={styles.zagText}>Рекомендации</Text>
        </View>      
          <FlatList 
                className="rounded-3xl py-2 px-2 m-2"
                data={categories}
                numColumns={2}
                key={2}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => (
                <View>
                    <View>
                        <TouchableOpacity  
                           style={styles.container}
                            onPress={() => navigation.navigate('ToursScreen' , {paramKey: item.id} )}>
                            <View  style={styles.box}>
                            <Image  style={styles.inner} source={{uri: 'http://194.36.191.166/storage/'+ item.image.image_name}}/>
                              <View style={styles.textPanel}>
                                  <Text style={styles.colText}>{`${item.title}`}</Text>
                                  <Text style={styles.priceText}>{`${item.schedules[0].price/1}`} ₽</Text>
                              </View>
                              </View>
                        </TouchableOpacity>
                      </View>
                  </View>
                )}
              />
  </View>
          )}
      </View>
      {/* <View className="mx-4 h-5/6 flex justify-center align-center space-y-6">
      <Text className="text-white text-center text-2xl">Welcome {user?.email}!</Text>
    </View> */}
    </View>
    
  );
}


export default HomeScreen;
const styles = StyleSheet.create({
  Panelslider: {
    backgroundColor: 'rgba(0, 17, 35, 0.75)',
    borderRadius: 19,
    height: 100,
    paddingLeft: 0,
    marginRight: 20,
    position:'absolute',
    right: 0,
    left: 0,
    bottom: 0
  },
  textPanelslider: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: '22',
    padding: 20,
    width: '80%'
  },
  zagText: {
    color: '#00274E',
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 10
  },
  linkText: {
    color: '#00274E',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    position: 'absolute',
    right: 10,
    top: 30,
  },
  gallery: {
    width: 330,
    position: 'relative',
    paddingRight: 20,
    borderRadius: 10,
    alignSelf: 'flex-start'
  },
  img: {
    height: 280,
    position: 'relative',
    borderRadius: 19,
  },
  textPanel: {
    zIndex:9,
    height: 80,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(0, 17, 35, 0.75)'
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: '50%',
    height: '50%',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width:  200,
    height: 200
  },
  colText: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18,
    color: 'white',
    width: '90%'
  },
  priceText: {
    color: '#F4D150',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 15,
  },
  pricePanelText: {
    color: '#F4D150',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
    fontWeight: '500',
    fontSize: 25,

  },
});