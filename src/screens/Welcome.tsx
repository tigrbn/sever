import React from 'react';
import { Text, Pressable,Image, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';

function WelcomeScreen<StackScreenProps>({ navigation }) {
  return (
    <View className="w-full h-full">
  <LinearGradient colors={['white', '#0053A9',]} style={{flex:1}}>
      <View className="mx-4 h-full flex justify-center align-center space-y-6">
      <View>
      <Image source={require('../../assets/tourism.webp')} style={{width: 250, height: 250, alignSelf: 'center'}}/>
      </View>
      <Text className="text-white text-5xl font-bold text-left mx-4" >Север</Text>
      <Text className="text-white text-2xl text-left mx-4" >Ваш отдых в надежных руках</Text>
      <View >
        <Pressable style={{backgroundColor: '#0053A9', borderRadius: 37}} className="ounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base" onPress={() => navigation.navigate('Sign In')}>Авторизоваться</Text></Pressable>
        <Pressable style={{backgroundColor: '#0053A9', borderRadius: 37}} className="rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base" onPress={() => navigation.navigate('Sign Up')}>Зарегистрироваться</Text></Pressable>
      </View>
    </View>
    </LinearGradient>
    </View>
  );
}


export default WelcomeScreen;
