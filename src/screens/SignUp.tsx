import React from 'react';
import logo from "../../assets/logo.png"
import back from "../../assets/back.jpg";
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import {LinearGradient} from 'expo-linear-gradient';
import { Image, Pressable, StyleSheet, TextInput, Text, View } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

function SignUpScreen<StackScreenProps>({ navigation }) {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Нужно ввести электронную почту и пароль'
      })
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View className="w-full h-full">
        <LinearGradient colors={['#50bf60', '#0053A9',]} style={{flex:1}}>
         <View style={styles.container} >
            <View>
              <Image source={require('../../assets/signup.png')} style={{width: 360, height: 220, alignSelf: 'center', resizeMode: 'cover',}}/>
            </View>
          <View className="mx-4 h-5/6 flex justify-center align-center space-y-6">
              <Text className="flex-1 pt-5 font-title text-3xl font-bold text-left text-white">
                  Регистрация
              </Text>
            </View>
        </View>     
      <View style={styles.card}>
        <View className="space-y-6" >
          <View className="mt-1 space-y-4">
            <View style={styles.textInput} className="font-main flex-row justify-center align-center rounded-xl px-1 py-1 bg-gray-100">
              <Icon style={styles.icon} name="email" size={18} color="gray" />
              <TextInput
                placeholder='Электронная почта'
                value={value.email}
                className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
                onChangeText={(text) => setValue({ ...value, email: text })}
              />
            </View>

            <View style={styles.textInput} className="flex-row justify-center align-center rounded-xl px-1 py-1 bg-gray-100">
              <Icon style={styles.icon} name="lock" size={18} color="gray" />
              <TextInput
                placeholder="Пароль"
                className="flex-1 pt-2.5 pr-2.5 pb-2.5 pl-0"
                onChangeText={(text) => setValue({ ...value, password: text })}
                secureTextEntry={true}
              />
            </View>
          </View>
          <Pressable style={styles.pressable} className="bg-background rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base" onPress={signUp}>Зарегистрироваться</Text></Pressable>
        </View>
        <Text style={styles.text} className="text-center text-white font-main text-base">У Вас есть аккаунт? <Text style={styles.link}  className="text-blue" onPress={() => navigation.navigate('Sign In')}> {'\n'} Войти</Text></Text>
      </View>
      </LinearGradient>
    </View>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  card: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 37,
    flex: 1,
    marginTop: 25
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
  text: {
    color: "white",
    marginTop: 15,
  },
  link: {
    color: "#ECBE00",
    fontWeight: 'bold'
  },
  pressable: {
    backgroundColor: "#0053A9",
    width: "80%",
    fontSize: 30,
    alignSelf: "center"
  },
  textInput: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ADADAD"
  },
});
