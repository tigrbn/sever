import React from "react";
import { Modal, TouchableOpacity, Text, Pressable, View, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useAuth } from "../hooks/useAuth";
import { getAuth, signOut } from "firebase/auth";
import { LinearGradient } from "expo-linear-gradient";

const auth = getAuth();

function Settings() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View>
      <Pressable onPress={() => setModalVisible(true)}>
      <Image
                    source={require("../navigation/assets/personal.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor:  "rgba(0, 83, 169, 0.5)",
                    }}
                  />
      </Pressable>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <View className="h-[50%] mt-auto rounded-t-3xl ">
            <LinearGradient
              colors={["white", "white"]}
              style={{ flex: 1, borderRadius: 20 }}
            >
              <Pressable onPress={() => signOut(auth)}>
                <View className="flex flex-row m-4 pt-5">
                  <Feather
                    name="log-out"
                    color="#001B36"
                    size={"35"}
                  />
                  <Text style={{color: "#001B36"}} className="flex-1 font-title text-2xl font-bold text-left text-white"> Выйти</Text>
                </View>
              </Pressable>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default Settings;
