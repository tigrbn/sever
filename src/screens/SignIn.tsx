import React from "react";
import logo from "../../assets/logo.png";
import back from "../../assets/signin.webp";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function SignInScreen<StackScreenProps>({ navigation }) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Нужно ввести электронную почту и пароль",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View className="w-full h-full">
        <LinearGradient colors={['#d6a44e','#4157bb']} style={{flex:1}}>
            <View style={styles.container} >
            <View>
              <Image source={require('../../assets/signin.webp')} style={{width: 320, height: 220, alignSelf: 'center', resizeMode: 'contain',}}/>
            </View>
              <View className="mx-4 h-5/6 flex justify-center align-center space-y-6">
                <Text className="flex-1 pt-5 font-title text-3xl font-bold text-left text-white">
                  Авторизация
                </Text>
                </View>
            </View>
        <View style={styles.card}>
            <View className="space-y-6">
              <View className="mt-1 space-y-4">
                <View   style={styles.textInput} className="font-main flex-row justify-center align-center rounded-xl px-1 py-1 bg-gray-100">
                  <Icon style={styles.icon} name="email" size={18} color="gray" />
                  <TextInput
                    placeholder="Электронная почта"
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
              <Pressable style={styles.pressable} className="rounded-3xl py-2 px-4 m-4">
                <Text
                  className="text-center text-white font-bold text-base"
                  onPress={signIn}
                >
                  Войти
                </Text>
              </Pressable>
            </View>
            <Text style={styles.text} className="text-center text-white font-main text-base">
              У Вас нет аккаунта?{" "}
              <Text
                style={styles.link}
                onPress={() => navigation.navigate("Sign Up")}
              >{'\n'}
                Зарегистрироваться
              </Text>
            </Text>
          </View>
          </LinearGradient>
    </View>
  );
}

export default SignInScreen;

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
    width: "50%",
    fontSize: 30,
    alignSelf: "center"
  },
  textInput: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ADADAD"
  },
});
